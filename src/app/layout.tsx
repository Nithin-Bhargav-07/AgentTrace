import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "AgentTrace — Evidence-Backed Verification for AI Agents",
  description: "Verify AI-agent actions against declared authority using deterministic policies, evidence-linked findings, and bounded AI explanations.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
