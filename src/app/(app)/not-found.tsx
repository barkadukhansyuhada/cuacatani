import Link from "next/link";
import { MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <MapPinOff size={48} className="mb-4 text-gray-300" />
      <h2 className="text-xl font-bold text-gray-700">Halaman Tidak Ditemukan</h2>
      <p className="mt-2 text-sm text-gray-500">
        Wilayah prakiraan atau halaman yang Anda cari tidak tersedia.
      </p>
      <Link
        href="/dashboard"
        className="mt-6 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
