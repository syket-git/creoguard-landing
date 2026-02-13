import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-32">
      <div className="relative mx-auto max-w-3xl text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-emerald-500/5 blur-3xl sm:-inset-24" />

        <div className="relative">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Start catching bugs
            <br />
            before they ship
          </h2>
          <p className="mb-6 text-base text-muted-foreground sm:mb-8 sm:text-lg">
            Install CreoGuard in under a minute. No sign-up required — just your
            API key and a Git repository.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4 sm:px-0">
            <Button
              size="lg"
              asChild
              className="w-full gap-2 bg-emerald-500 px-8 text-white hover:bg-emerald-400 sm:w-auto"
            >
              <a href="https://www.npmjs.com/package/creoguard-cli" target="_blank" rel="noopener noreferrer">
                Get Started Now
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Install reminder */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 backdrop-blur-sm sm:px-4">
            <span className="text-xs text-muted-foreground sm:text-sm">$</span>
            <code className="font-mono text-xs sm:text-sm">
              npm install -g creoguard-cli
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
