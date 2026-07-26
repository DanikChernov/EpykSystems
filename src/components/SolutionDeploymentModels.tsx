import { CheckCircle2 } from "lucide-react";

import { Section } from "./Section";

type SolutionDeploymentModelsProps = {
  models: string[];
};

export const deploymentModelsIntro =
  "Local infrastructure and private operation can form the foundation. Cloud platforms and external APIs may be connected when useful, but they remain optional extensions rather than unavoidable dependencies.";

export function SolutionDeploymentModels({
  models
}: SolutionDeploymentModelsProps) {
  return (
    <Section
      className="border-y border-white/10 bg-[#080A0D]/56"
      eyebrow="Deployment models"
      title="Connected where useful, private where needed."
      intro={deploymentModelsIntro}
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {models.map((model) => (
          <div
            key={model}
            className="flex gap-3 border border-white/10 bg-white/[0.03] p-4"
          >
            <CheckCircle2
              aria-hidden
              size={18}
              className="mt-0.5 shrink-0 text-[#1D6FFF]"
            />
            <span className="text-sm leading-6 text-[#DDE3EA]">{model}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
