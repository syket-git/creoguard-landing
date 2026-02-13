const providers = [
  {
    name: "OpenAI",
    description: "GPT-4o, GPT-4o-mini, and other OpenAI models with industry-leading code understanding.",
    code: `creoguard config set provider openai
creoguard config set apiKey sk-your-key
creoguard config set model gpt-4o-mini`,
  },
  {
    name: "Anthropic",
    description: "Claude Sonnet and Haiku models known for nuanced, thorough code analysis.",
    code: `creoguard config set provider anthropic
creoguard config set apiKey sk-ant-your-key
creoguard config set model claude-sonnet-4-20250514`,
  },
  {
    name: "Ollama",
    description: "Run AI models locally for free. No API keys needed. Full privacy — your code never leaves your machine.",
    code: `creoguard config set provider ollama
creoguard config set ollamaUrl http://localhost:11434
creoguard config set ollamaModel codellama`,
    badge: "Free & Local",
  },
];

export function Providers() {
  return (
    <section id="providers" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-500 sm:text-sm">
            Providers
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Choose your AI provider
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Bring your own API key and use the model you prefer. Switch
            providers anytime with a single command.
          </p>
        </div>

        {/* Provider Cards */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-emerald-500/30 sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-base font-semibold sm:text-lg">{provider.name}</h3>
                {provider.badge && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {provider.badge}
                  </span>
                )}
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {provider.description}
              </p>
              <div className="overflow-hidden rounded-lg bg-background p-3 sm:p-4">
                <pre className="overflow-x-auto font-mono text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                  {provider.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
