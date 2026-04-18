import { SearchX } from "lucide-react";

export function EmptyState({
  title = "Tidak ada data",
  description = "Coba ubah filter atau kata kunci pencarian.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <SearchX size={48} className="mb-4 text-gray-300" />
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  );
}
