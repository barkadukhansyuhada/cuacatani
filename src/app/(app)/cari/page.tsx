import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import { CariContent } from "./CariContent";

export const metadata = {
  title: "Cari Wilayah Prakiraan — Petani BMKG",
};

export default function CariPage() {
  return (
    <Suspense fallback={<LoadingSkeleton count={5} />}>
      <CariContent />
    </Suspense>
  );
}
