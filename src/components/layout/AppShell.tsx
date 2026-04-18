"use client";

import type { ReactNode } from "react";
import { ModeToggle } from "./ModeToggle";
import { BottomNav } from "./BottomNav";
import { CloudSun } from "lucide-react";
import Link from "next/link";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="no-print sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2">
          <Link href="/dashboard" className="flex items-center gap-2">
            <CloudSun size={24} className="text-green-600" />
            <div>
              <h1 className="text-base font-bold leading-tight text-gray-900">
                Petani BMKG
              </h1>
              <p className="text-[10px] leading-tight text-gray-500">
                Prakiraan Kemarau 2026
              </p>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-20 pt-4">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
