"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ArrowRight, Github } from "lucide-react";
import { HeroGrid } from "@/components/hero-grid";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g creoguard-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-16 sm:px-6">
      {/* Animated Grid Background */}
      <HeroGrid />

      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08)_0%,transparent_60%)]" />

      {/* Top fade for navbar blend */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <Badge
          variant="secondary"
          className="hero-fade-in mb-4 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          AI-Powered Code Review CLI
        </Badge>

        {/* Headline */}
        <h1
          className="hero-fade-in mb-4 text-3xl font-bold leading-tight tracking-tight sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          Catch bugs before
          <br />
          <span className="bg-linear-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            they reach your codebase
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-fade-in mb-8 max-w-2xl px-2 text-base text-muted-foreground sm:mb-10 sm:px-0 sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          AI-powered pre-commit hook that reviews every code change for security
          vulnerabilities, performance issues, and best practice violations.
          Supports OpenAI, Anthropic, and Ollama.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-fade-in mb-8 flex w-full flex-col items-center gap-3 px-2 sm:mb-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            asChild
            className="w-full gap-2 bg-emerald-500 px-8 text-white hover:bg-emerald-400 sm:w-auto"
          >
            <a href="https://www.npmjs.com/package/creoguard-cli" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full gap-2 px-8 sm:w-auto">
            <a href="https://github.com/syket-git/creoguard-cli" target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Install Command */}
        <div
          className="hero-fade-in group relative flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 backdrop-blur-sm sm:gap-3 sm:px-6 sm:py-3"
          style={{ animationDelay: "0.65s" }}
        >
          <span className="text-xs text-muted-foreground sm:text-sm">$</span>
          <code className="font-mono text-xs text-foreground sm:text-sm">
            npm install -g creoguard-cli
          </code>
          <button
            onClick={handleCopy}
            className="ml-1 shrink-0 text-muted-foreground transition-colors hover:text-foreground sm:ml-2"
          >
            {copied ? (
              <Check className="size-4 text-emerald-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Fade out at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
