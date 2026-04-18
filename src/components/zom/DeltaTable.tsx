import type { CurahHujanEntry } from "@/lib/types";
import { deltaRainfall, formatDelta, formatDeltaPercent } from "@/lib/utils";

export function DeltaTable({ data }: { data: CurahHujanEntry[] }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-xs text-gray-500">
            <th className="px-3 py-2 text-left font-medium">Bulan</th>
            <th className="px-3 py-2 text-right font-medium">Prakiraan</th>
            <th className="px-3 py-2 text-right font-medium">Normal</th>
            <th className="px-3 py-2 text-right font-medium">Selisih</th>
            <th className="px-3 py-2 text-right font-medium">%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => {
            const delta = deltaRainfall(c);
            const isNeg = delta < 0;
            return (
              <tr key={c.month} className="border-b border-gray-50">
                <td className="px-3 py-2 font-medium text-gray-700">{c.month}</td>
                <td className="px-3 py-2 text-right text-blue-600 font-medium">
                  {c.value}
                </td>
                <td className="px-3 py-2 text-right text-gray-500">{c.normal}</td>
                <td
                  className={`px-3 py-2 text-right font-semibold ${
                    isNeg ? "text-red-600" : delta > 0 ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {formatDelta(delta)}
                </td>
                <td
                  className={`px-3 py-2 text-right text-xs ${
                    isNeg ? "text-red-500" : delta > 0 ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {formatDeltaPercent(c)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-gray-50 font-semibold text-xs">
            <td className="px-3 py-2 text-gray-600">Total</td>
            <td className="px-3 py-2 text-right text-blue-700">
              {data.reduce((s, c) => s + c.value, 0)}
            </td>
            <td className="px-3 py-2 text-right text-gray-500">
              {data.reduce((s, c) => s + c.normal, 0)}
            </td>
            <td className="px-3 py-2 text-right">
              {(() => {
                const d = data.reduce((s, c) => s + c.value, 0) - data.reduce((s, c) => s + c.normal, 0);
                return (
                  <span className={d < 0 ? "text-red-600" : d > 0 ? "text-green-600" : "text-gray-400"}>
                    {formatDelta(d)}
                  </span>
                );
              })()}
            </td>
            <td className="px-3 py-2" />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
