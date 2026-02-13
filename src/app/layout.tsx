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

export const metadata: Metadata = {
  title: "CreoGuard — AI-Powered Code Review Before Every Commit",
  description:
    "Catch bugs, security issues, and best practice violations before they reach your codebase. AI-powered pre-commit code review CLI supporting OpenAI, Anthropic, and Ollama.",
  keywords: [
    "code review",
    "AI",
    "pre-commit",
    "security",
    "CLI",
    "OpenAI",
    "Anthropic",
    "Ollama",
  ],
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
