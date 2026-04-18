"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";

interface CompareContextValue {
  compareIds: string[];
  addCompare: (id: string) => void;
  removeCompare: (id: string) => void;
  clearCompare: () => void;
  isComparing: (id: string) => boolean;
}

export const CompareContext = createContext<CompareContextValue>({
  compareIds: [],
  addCompare: () => {},
  removeCompare: () => {},
  clearCompare: () => {},
  isComparing: () => false,
});

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("compareIds");
    if (saved) {
      try {
        setCompareIds(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("compareIds", JSON.stringify(compareIds));
  }, [compareIds]);

  const addCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id) || prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const removeCompare = (id: string) => {
    setCompareIds((prev) => prev.filter((x) => x !== id));
  };

  const clearCompare = () => setCompareIds([]);

  const isComparing = (id: string) => compareIds.includes(id);

  return (
    <CompareContext.Provider
      value={{ compareIds, addCompare, removeCompare, clearCompare, isComparing }}
    >
      {children}
    </CompareContext.Provider>
  );
}
