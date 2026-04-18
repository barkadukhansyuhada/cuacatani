"use client";

import { useState, useEffect } from "react";
import type { CurahHujanAuditEntry } from "@/lib/types";
import { loadAuditData, getAuditEntry } from "@/data";
import { PRED_CATEGORY_COLORS, PRED_CATEGORY_LABELS, MONTH_LABELS } from "@/lib/constants";
import { FileSearch, ChevronDown, ChevronUp } from "lucide-react";

export function AuditPanel({ zomId }: { zomId: string }) {
  const [auditData, setAuditData] = useState<CurahHujanAuditEntry[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    loadAuditData()
      .then((data) => {
        const entry = getAuditEntry(data, zomId);
        setAuditData(entry?.curahHujanAudit || null);
      })
      .catch(() => setAuditData(null))
      .finally(() => setLoading(false));
  }, [zomId]);

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <p className="animate-pulse text-sm text-gray-400">Memuat data audit...</p>
      </div>
    );
  }

  if (!auditData) return null;

  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/30 shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-4 text-sm font-semibold text-blue-700"
      >
        <span className="flex items-center gap-2">
          <FileSearch size={16} />
          Detail Audit Dasarian
        </span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {expanded && (
        <div className="border-t border-blue-100 px-4 pb-4 pt-2 space-y-4">
          <p className="text-xs text-blue-600">
            Setiap bulan terdiri dari 3 dasarian (10 harian). Kategori prakiraan dikonversi ke
            nilai representatif: {"<50→25, 50-150→100, 150-300→225, ≥300→300 mm"}.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-blue-100 text-blue-700">
                  <th className="px-2 py-1.5 text-left font-medium">Bulan</th>
                  <th className="px-2 py-1.5 text-center font-medium">Das. I</th>
                  <th className="px-2 py-1.5 text-center font-medium">Das. II</th>
                  <th className="px-2 py-1.5 text-center font-medium">Das. III</th>
                  <th className="px-2 py-1.5 text-right font-medium">Repr.</th>
                  <th className="px-2 py-1.5 text-right font-medium">Normal</th>
                </tr>
              </thead>
              <tbody>
                {auditData.map((a) => (
                  <tr key={a.month} className="border-b border-blue-50">
                    <td className="px-2 py-1.5 font-medium text-gray-700">
                      {a.month}
                    </td>
                    {a.predCategoryDasarian.map((cat, i) => (
                      <td key={i} className="px-2 py-1.5 text-center">
                        <span
                          className="inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold text-white"
                          style={{ backgroundColor: PRED_CATEGORY_COLORS[cat] }}
                          title={PRED_CATEGORY_LABELS[cat]}
                        >
                          {cat}
                        </span>
                        <br />
                        <span className="text-[10px] text-gray-400">
                          n:{a.normalDasarian[i]}
                        </span>
                      </td>
                    ))}
                    <td className="px-2 py-1.5 text-right font-semibold text-blue-700">
                      {a.predRepresentativeValue}
                    </td>
                    <td className="px-2 py-1.5 text-right text-gray-500">
                      {a.normal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-700 mb-1">Legenda Kategori</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(PRED_CATEGORY_COLORS) as Array<keyof typeof PRED_CATEGORY_COLORS>).map(
                (cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 text-[10px]"
                  >
                    <span
                      className="inline-block h-2.5 w-2.5 rounded"
                      style={{ backgroundColor: PRED_CATEGORY_COLORS[cat] }}
                    />
                    {PRED_CATEGORY_LABELS[cat]}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
