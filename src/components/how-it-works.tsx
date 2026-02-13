import { Settings, FolderGit2, GitCommitHorizontal } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Configure",
    description: "Set your LLM provider and API key. Choose from OpenAI, Anthropic, or Ollama for local AI.",
    code: `creoguard config set provider openai
creoguard config set apiKey sk-your-key`,
  },
  {
    icon: FolderGit2,
    step: "02",
    title: "Initialize",
    description: "Run init in your Git repository to set up the pre-commit hook and project configuration.",
    code: `cd your-project
creoguard init`,
  },
  {
    icon: GitCommitHorizontal,
    step: "03",
    title: "Commit",
    description: "Just commit as usual. CreoGuard automatically reviews your staged changes before the commit goes through.",
    code: `git add .
git commit -m "feat: add login"
# CreoGuard reviews automatically`,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-16 sm:px-6 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.04)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-500 sm:text-sm">
            How It Works
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Three steps to safer code
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Get up and running in under a minute. No complex configuration, no
            CI/CD changes needed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative min-w-0">
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-emerald-500/30 sm:p-6">
                {/* Step Number */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500/10 font-mono text-xs font-bold text-emerald-500">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Code Block */}
                <div className="overflow-hidden rounded-lg bg-background p-3 sm:p-4">
                  <pre className="overflow-x-auto font-mono text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    {step.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
