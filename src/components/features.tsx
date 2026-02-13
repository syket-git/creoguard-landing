import {
  GitCommitHorizontal,
  Brain,
  FileText,
  Key,
  GitBranch,
  Settings,
  Terminal,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: GitCommitHorizontal,
    title: "Pre-commit Hook",
    description:
      "Automatically reviews staged code before every commit. Issues are caught at the source, not in PR reviews.",
  },
  {
    icon: Brain,
    title: "Multiple LLM Providers",
    description:
      "Choose between OpenAI GPT-4, Anthropic Claude, or run locally with Ollama. Use the model that fits your needs.",
  },
  {
    icon: FileText,
    title: "Company Guidelines",
    description:
      "Import your organization's coding standards from PDF or Markdown. Get reviews tailored to your team's rules.",
  },
  {
    icon: Key,
    title: "BYOK — Bring Your Own Key",
    description:
      "No subscriptions or accounts needed. Use your own API keys with direct provider billing. Full control.",
  },
  {
    icon: GitBranch,
    title: "Git-provider Agnostic",
    description:
      "Works with GitHub, GitLab, Bitbucket, or any Git repository. No platform lock-in.",
  },
  {
    icon: Settings,
    title: "Configurable Rules",
    description:
      "Set severity levels for security, performance, best practices, and style. Ignore files with glob patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Block Critical Issues",
    description:
      "Prevent commits with critical security vulnerabilities. Configurable blocking rules per severity level.",
  },
  {
    icon: Terminal,
    title: "Beautiful Terminal Output",
    description:
      "Clear, colorful reports with line numbers, issue descriptions, and suggested fixes right in your terminal.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-500 sm:text-sm">
            Features
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Everything you need for
            <br />
            automated code review
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            A comprehensive CLI tool that integrates seamlessly into your Git
            workflow, catching issues before they make it past your local
            machine.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-emerald-500/30 hover:bg-card sm:p-6"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <feature.icon className="size-5 text-emerald-500" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
