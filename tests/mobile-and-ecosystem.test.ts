import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("portfolio modal source uses viewport-bounded mobile layout", () => {
  const source = readFileSync("src/components/PortfolioCaseStudyCard.tsx", "utf8");

  assert.match(source, /h-\[100dvh\]/);
  assert.match(source, /overflow-y-auto overscroll-contain/);
  assert.match(source, /lg:overflow-hidden/);
  assert.match(source, /object-contain/);
  assert.match(source, /overscroll-x-contain/);
});

test("portfolio cards guard against mobile horizontal overflow", () => {
  const cardSource = readFileSync("src/components/CaseStudyCard.tsx", "utf8");
  const modalSource = readFileSync(
    "src/components/PortfolioCaseStudyCard.tsx",
    "utf8"
  );

  assert.match(cardSource, /break-words/);
  assert.match(cardSource, /min-w-0/);
  assert.match(modalSource, /break-words/);
  assert.match(modalSource, /min-w-0/);
});

test("future environment is moved off the main ecosystem page", () => {
  const ecosystemSource = readFileSync("src/app/ecosystem/page.tsx", "utf8");
  const futureSource = readFileSync("src/app/ecosystem-future/page.tsx", "utf8");

  assert.doesNotMatch(ecosystemSource, /EnvironmentDisclosure/);
  assert.match(futureSource, /EnvironmentDisclosure/);
  assert.match(futureSource, /defaultOpen/);
  assert.match(futureSource, /Back to Ecosystem/);
});
