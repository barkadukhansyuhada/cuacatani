"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import type { CurahHujanEntry } from "@/lib/types";
import { MONTH_LABELS } from "@/lib/constants";

interface RainfallChartProps {
  data: CurahHujanEntry[];
  compact?: boolean;
}

export function RainfallChart({ data, compact = false }: RainfallChartProps) {
  const chartData = data.map((c) => ({
    month: c.month,
    prakiraan: c.value,
    normal: c.normal,
    delta: c.value - c.normal,
  }));

  const height = compact ? 200 : 280;

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      {!compact && (
        <h3 className="mb-3 text-sm font-semibold text-gray-700">
          Curah Hujan Prakiraan vs Normal (mm)
        </h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 5, left: -15, bottom: 5 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            unit=" mm"
          />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
            formatter={(value, name) => {
              const label =
                name === "prakiraan"
                  ? "Prakiraan 2026"
                  : name === "normal"
                    ? "Normal 1991–2020"
                    : "Selisih";
              return [`${value} mm`, label];
            }}
          />
          {!compact && <Legend wrapperStyle={{ fontSize: 11 }} />}
          <Bar
            dataKey="prakiraan"
            name="Prakiraan 2026"
            fill="#3b82f6"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="normal"
            name="Normal 1991–2020"
            fill="#d1d5db"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
