import { Shield, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-emerald-500" />
            <span className="font-semibold">CreoGuard</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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
              <Github className="size-4" />
            </a>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CreoGuard. MIT License.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care for developers who ship quality code.
          </p>
        </div>
      </div>
    </footer>
  );
}
