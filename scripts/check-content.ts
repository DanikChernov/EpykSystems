import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync
} from "node:fs";
import {
  basename,
  dirname,
  extname,
  join,
  relative,
  resolve
} from "node:path";
import { fileURLToPath } from "node:url";

import {
  entities,
  featuredEntityIds,
  maturityOrder,
  type Maturity,
  type SolutionSlug
} from "../src/content/registry.ts";

type Finding = {
  file: string;
  message: string;
};

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mode = process.argv.includes("--built") ? "built" : "source";
const findings: Finding[] = [];

const sourceExtensions = new Set([".ts", ".tsx"]);
const builtExtensions = new Set([
  ".html",
  ".rsc",
  ".meta",
  ".body",
  ".js",
  ".json",
  ".txt",
  ".xml"
]);

const placeholderPattern =
  /TODO|TBD|FIXME|Lorem ipsum|founder to verify|founder to supply|XXX/i;

const builtEvidencePatterns = [
  /Evidence or result/i,
  /No fabricated proof/i,
  /repository currently provides brand assets/i,
  /No production metrics are published/i,
  /No fabricated screenshots/i,
  /unsupported metrics/i,
  /invented screenshots/i,
  /proprietary screenshots/i
];

const deniedBuiltNames = [
  { label: "unapproved client name", pattern: /\bAccudyn\b/i },
  { label: "CNC client wordmark", pattern: /\bWindsor Beach Technologies\b/i },
  { label: "CNC client acronym", pattern: /\bWBT\b/i },
  { label: "CNC partner branding", pattern: /\bAether\b/i },
  { label: "incumbent ERP product", pattern: /\bPlex Manufacturing Cloud\b/i },
  { label: "incumbent ERP vendor", pattern: /\bPlex\b/i }
];

function addFinding(file: string, message: string) {
  findings.push({ file: relative(root, file), message });
}

function walkFiles(directory: string, extensions: Set<string>) {
  if (!existsSync(directory)) {
    return [];
  }

  const files: string[] = [];
  const entries = readdirSync(directory);

  for (const entry of entries) {
    const fullPath = join(directory, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (mode === "built" && (entry === "cache" || entry === "dev")) {
        continue;
      }

      files.push(...walkFiles(fullPath, extensions));
      continue;
    }

    if (extensions.has(extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

function scanSourcePlaceholders() {
  const directories = [
    join(root, "src", "content"),
    join(root, "src", "lib"),
    join(root, "src", "app"),
    join(root, "src", "components")
  ];

  for (const file of directories.flatMap((directory) =>
    walkFiles(directory, sourceExtensions)
  )) {
    const contents = readFileSync(file, "utf8");

    if (placeholderPattern.test(contents)) {
      addFinding(file, "placeholder marker found in public source");
    }
  }
}

function scanBuiltOutput() {
  const builtRoot = join(root, ".next");

  if (!existsSync(builtRoot)) {
    addFinding(builtRoot, "built output does not exist");
    return;
  }

  for (const file of walkFiles(builtRoot, builtExtensions)) {
    const contents = readFileSync(file, "utf8");

    for (const item of deniedBuiltNames) {
      if (item.pattern.test(contents)) {
        addFinding(file, `denylisted ${item.label} found in built output`);
      }
    }

    for (const pattern of builtEvidencePatterns) {
      if (pattern.test(contents)) {
        addFinding(file, "removed evidence-disclaimer wording found in built output");
      }
    }
  }
}

function getPublishedSolutions() {
  return entities.filter((entity) => entity.solution && !entity.solution.unpublished);
}

function checkRegistryIntegrity() {
  const ids = new Set<string>();
  const maturityValues = new Set<Maturity>(maturityOrder);
  const solutionSlugs = new Set<SolutionSlug>();

  if (maturityOrder.length !== 5) {
    addFinding(join(root, "src", "content", "registry.ts"), "maturity order must contain exactly five values");
  }

  for (const entity of entities) {
    if (ids.has(entity.id)) {
      addFinding(join(root, "src", "content", "registry.ts"), `duplicate entity id: ${entity.id}`);
    }

    ids.add(entity.id);

    if (!maturityValues.has(entity.maturity)) {
      addFinding(join(root, "src", "content", "registry.ts"), `unknown maturity on ${entity.id}`);
    }

    if (entity.solution) {
      if (solutionSlugs.has(entity.solution.slug)) {
        addFinding(join(root, "src", "content", "registry.ts"), `duplicate solution slug: ${entity.solution.slug}`);
      }

      solutionSlugs.add(entity.solution.slug);
    }

    if (entity.publicationBlocked && entity.screenshots?.length) {
      addFinding(join(root, "src", "content", "registry.ts"), `${entity.id} is publication-blocked but still references screenshots`);
    }
  }

  for (const id of featuredEntityIds) {
    const entity = entities.find((candidate) => candidate.id === id);

    if (!entity) {
      addFinding(join(root, "src", "content", "registry.ts"), `featured id does not resolve: ${id}`);
      continue;
    }

    if (entity.solution?.unpublished) {
      addFinding(join(root, "src", "content", "registry.ts"), `featured id points at unpublished solution: ${id}`);
    }
  }

  for (const entity of getPublishedSolutions()) {
    if (!entity.solution) {
      continue;
    }

    if (!solutionSlugs.has(entity.solution.slug)) {
      addFinding(join(root, "src", "content", "registry.ts"), `published solution missing route slug: ${entity.solution.slug}`);
    }
  }
}

function manifestVerdictFor(filePath: string) {
  const manifestPath = join(dirname(filePath), "MANIFEST.md");

  if (!existsSync(manifestPath)) {
    return null;
  }

  const fileName = basename(filePath);
  const line = readFileSync(manifestPath, "utf8")
    .split(/\r?\n/)
    .find((candidate) => candidate.includes(`\`${fileName}\``));

  return line ?? null;
}

function checkScreenshotReferences() {
  for (const entity of entities) {
    if (entity.publicationBlocked && entity.screenshots?.length) {
      addFinding(join(root, "src", "content", "registry.ts"), `${entity.id} has blocked publication but non-empty screenshots`);
      continue;
    }

    for (const screenshot of entity.screenshots ?? []) {
      if (
        /\/(operational-control-platform|wbt-machine-tracker|em-inventory)\//i.test(
          screenshot.src
        )
      ) {
        addFinding(join(root, "src", "content", "registry.ts"), `${entity.id} references a blocked screenshot folder`);
      }

      const publicPath = join(root, "public", screenshot.src.replace(/^\//, ""));

      if (!existsSync(publicPath)) {
        addFinding(publicPath, `screenshot referenced by ${entity.id} does not exist`);
        continue;
      }

      const verdictLine = manifestVerdictFor(publicPath);

      if (!verdictLine) {
        addFinding(publicPath, "screenshot is missing a manifest verdict");
        continue;
      }

      if (!/\bPUBLISH\b/.test(verdictLine)) {
        addFinding(publicPath, "screenshot manifest verdict is not PUBLISH");
      }

      if (/\b(HOLD|GATED|DO NOT PUBLISH|REFERENCE ONLY)\b/i.test(verdictLine)) {
        addFinding(publicPath, "screenshot manifest verdict is blocked");
      }
    }
  }
}

scanSourcePlaceholders();
checkRegistryIntegrity();
checkScreenshotReferences();

if (mode === "built") {
  scanBuiltOutput();
}

if (findings.length > 0) {
  for (const finding of findings) {
    console.error(`${finding.file}: ${finding.message}`);
  }

  process.exit(1);
}

console.log(`content guard passed (${mode})`);
