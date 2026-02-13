import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://creoguard.vercel.app";
const title = "CreoGuard — AI-Powered Code Review Before Every Commit";
const description =
  "Catch bugs, security issues, and best practice violations before they reach your codebase. AI-powered pre-commit code review CLI supporting OpenAI, Anthropic, and Ollama.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "code review",
    "AI",
    "pre-commit",
    "security",
    "CLI",
    "OpenAI",
    "Anthropic",
    "Ollama",
    "creoguard",
    "git hooks",
    "static analysis",
    "code quality",
    "developer tools",
  ],
  authors: [{ name: "CreoGuard" }],
  creator: "CreoGuard",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CreoGuard",
    title,
    description,
    images: [
      {
        url: "/creoguard.png",
        width: 1200,
        height: 630,
        alt: "CreoGuard — AI-Powered Pre-Commit Code Review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/creoguard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
