"use client";

import { ModeProvider } from "@/contexts/ModeContext";
import { CompareProvider } from "@/contexts/CompareContext";
import { AppShell } from "@/components/layout/AppShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModeProvider>
      <CompareProvider>
        <AppShell>{children}</AppShell>
      </CompareProvider>
    </ModeProvider>
  );
}
