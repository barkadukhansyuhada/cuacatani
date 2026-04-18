"use client";

import { useMode } from "@/hooks/useMode";
import { Sprout, ClipboardList } from "lucide-react";

export function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex rounded-lg bg-gray-100 p-0.5 text-xs sm:text-sm">
      <button
        onClick={() => setMode("petani")}
        aria-pressed={mode === "petani"}
        className={`flex items-center gap-1 rounded-md px-2.5 py-1.5 font-semibold transition-all sm:gap-1.5 sm:px-3 ${
          mode === "petani"
            ? "bg-green-600 text-white shadow-sm"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        <Sprout size={14} className="sm:size-4 shrink-0" />
        <span>Petani</span>
      </button>
      <button
        onClick={() => setMode("penyuluh")}
        aria-pressed={mode === "penyuluh"}
        className={`flex items-center gap-1 rounded-md px-2.5 py-1.5 font-semibold transition-all sm:gap-1.5 sm:px-3 ${
          mode === "penyuluh"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        <ClipboardList size={14} className="sm:size-4 shrink-0" />
        <span>Penyuluh</span>
      </button>
    </div>
  );
}
