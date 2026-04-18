"use client";

import type { DashboardStats } from "@/lib/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface StatBlock {
  value: number;
  label: string;
  accent?: string;
}

function AnimatedStat({ block, visible, index }: { block: StatBlock; visible: boolean; index: number }) {
  const count = useCountUp({ end: block.value, duration: 1800, start: visible });

  return (
    <div
      className={`flex flex-col items-center px-4 py-8 text-center sm:py-10 reveal-base reveal-up ${visible ? `revealed reveal-normal reveal-delay-${index + 1}` : ""}`}
    >
      <span
        className={`font-[family-name:var(--font-playfair)] text-4xl font-black leading-none sm:text-5xl md:text-6xl ${block.accent ?? "text-hijau-tua"}`}
      >
        {count}
      </span>
      <span className="mt-2 font-[family-name:var(--font-source-sans)] text-sm font-medium text-tanah-kering">
        {block.label}
      </span>
    </div>
  );
}

export function DataStrip({ stats }: { stats: DashboardStats }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 });

  const blocks: StatBlock[] = [
    { value: stats.totalZom, label: "Wilayah Dipantau" },
    {
      value: stats.byRisiko.Tinggi,
      label: "Risiko Tinggi",
      accent: "text-red-600",
    },
    {
      value: stats.sudahMK,
      label: "Sudah Kemarau",
      accent: "text-amber-600",
    },
    {
      value: stats.byRisiko.Rendah,
      label: "Aman",
      accent: "text-green-600",
    },
  ];

  return (
    <section ref={ref} className="border-y border-tanah-kering/20 bg-putih-krem">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
        {blocks.map((b, i) => (
          <AnimatedStat key={b.label} block={b} visible={isVisible} index={i} />
        ))}
      </div>
    </section>
  );
}
