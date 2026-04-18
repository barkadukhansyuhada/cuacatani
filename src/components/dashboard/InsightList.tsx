"use client";

import { Lightbulb } from "lucide-react";

export function InsightList({ insights }: { insights: string[] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
        <Lightbulb size={16} className="text-amber-500" />
        Insight Otomatis
      </h3>
      <ul className="space-y-2">
        {insights.map((text, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 text-[10px] font-bold text-amber-600">
              {i + 1}
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
