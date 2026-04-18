import type { SifatHujan } from "@/lib/types";
import { SIFAT_COLORS } from "@/lib/constants";

export function SifatBadge({ sifat }: { sifat: SifatHujan }) {
  const c = SIFAT_COLORS[sifat];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${c.bg} ${c.text}`}
    >
      {sifat}
    </span>
  );
}
