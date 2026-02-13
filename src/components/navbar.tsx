"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Github, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Shield className="size-6 text-emerald-500" />
          <span className="text-lg font-semibold tracking-tight">
            CreoGuard
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a
            href="#providers"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Providers
          </a>
          <a
            href="https://github.com/syket-git/creoguard-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-5" />
          </a>
          <Button size="sm" asChild className="bg-emerald-500 text-white hover:bg-emerald-400">
            <a href="https://www.npmjs.com/package/creoguard-cli" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#providers"
              className="text-sm text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Providers
            </a>
            <Button size="sm" asChild className="w-full bg-emerald-500 text-white hover:bg-emerald-400">
              <a href="https://www.npmjs.com/package/creoguard-cli" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
