# CreoGuard Landing Page

Landing page for [CreoGuard CLI](https://github.com/syket-git/creoguard-cli) — an AI-powered pre-commit code review tool that catches bugs, security issues, and best practice violations before they reach your codebase.

**Live:** [creoguard-cli on npm](https://www.npmjs.com/package/creoguard-cli)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (Button, Badge, Card, Separator)
- **Lucide React** icons
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme, animations, scrollbar styles
│   ├── icon.svg             # Favicon (emerald shield)
│   ├── layout.tsx           # Root layout (dark mode, Geist fonts, SEO meta)
│   └── page.tsx             # Landing page (composes all sections)
├── components/
│   ├── ui/                  # shadcn/ui primitives (button, badge, card, separator)
│   ├── navbar.tsx           # Fixed navbar with mobile hamburger menu
│   ├── hero.tsx             # Hero section with CTA, install command, copy button
│   ├── hero-grid.tsx        # Animated canvas grid background
│   ├── features.tsx         # 8-card feature grid
│   ├── how-it-works.tsx     # 3-step setup flow with code snippets
│   ├── terminal-demo.tsx    # Styled terminal showing CreoGuard review output
│   ├── providers.tsx        # OpenAI / Anthropic / Ollama provider cards
│   ├── cta.tsx              # Final call-to-action section
│   └── footer.tsx           # Footer with nav links and copyright
└── lib/
    └── utils.ts             # cn() utility for class merging
```

## Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed top bar, nav links, GitHub icon, Get Started CTA, responsive mobile menu |
| **Hero** | Animated grid background, staggered fade-in, headline, CTA buttons, copyable install command |
| **Features** | 8 feature cards in a responsive grid (1 / 2 / 4 columns) |
| **How It Works** | 3-step cards — Configure, Initialize, Commit — with code snippets |
| **Terminal Demo** | Realistic terminal window showing a CreoGuard code review (SQL injection detection) |
| **Providers** | OpenAI, Anthropic, Ollama cards with configuration examples |
| **CTA** | Final call-to-action with emerald glow effect |
| **Footer** | Logo, nav links, GitHub, copyright |

## Design

- **Dark theme** by default (`class="dark"` on `<html>`)
- **Emerald green** accent color throughout
- **Geist** sans + mono fonts
- Subtle radial gradients and backdrop blurs
- Animated canvas grid with drifting glow beam in hero
- Staggered CSS fade-in animations on hero content
- Fully responsive (mobile-first)

## Deployment

Deploy to any static hosting or Node.js platform:

**Vercel** (recommended):
```bash
npx vercel
```

**Static export:**
```bash
npm run build
# Output is in .next/ — serve with `npm run start` or deploy to any platform
```

## License

MIT
