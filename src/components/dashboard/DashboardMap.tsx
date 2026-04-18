"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { zomData } from "@/data";
import { Map } from "lucide-react";

const IndonesiaMap = dynamic(
  () =>
    import("@/components/map/IndonesiaMap").then((mod) => mod.IndonesiaMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-400 animate-pulse">Memuat peta...</p>
      </div>
    ),
  }
);

export function DashboardMap() {
  const router = useRouter();

  const handleZomClick = (zomId: string) => {
    router.push(`/zom/${zomId}`);
  };

  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
        <Map size={16} className="text-green-600" />
        Peta Risiko Kekeringan
      </h3>
      <p className="mb-2 text-xs text-gray-400">
        Ketuk titik untuk melihat detail wilayah · zoom untuk memperbesar
      </p>
      <IndonesiaMap
        data={zomData}
        onZomClick={handleZomClick}
      />
    </div>
  );
}
