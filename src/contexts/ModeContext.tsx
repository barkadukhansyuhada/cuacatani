"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";
import type { AppMode } from "@/lib/types";

interface ModeContextValue {
  mode: AppMode;
  setMode: (m: AppMode) => void;
}

export const ModeContext = createContext<ModeContextValue>({
  mode: "petani",
  setMode: () => {},
});

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AppMode>("petani");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("appMode") as AppMode | null;
    if (saved === "petani" || saved === "penyuluh") {
      setMode(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("appMode", mode);
    }
  }, [mode, mounted]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
