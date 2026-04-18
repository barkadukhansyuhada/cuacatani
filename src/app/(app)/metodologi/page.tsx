import { BookOpen, AlertCircle, Database, Calculator, MapPin } from "lucide-react";

export const metadata = {
  title: "Metodologi Data — Petani BMKG",
};

export default function MetodologiPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">Metodologi Data</h2>
      <p className="text-sm text-gray-600">
        Transparansi bagaimana data prakiraan musim kemarau 2026 diperoleh dan
        diolah dalam aplikasi ini.
      </p>

      <Section
        icon={<Database size={16} />}
        title="Sumber Data"
      >
        <p>
          Data bersumber dari dokumen resmi{" "}
          <strong>Prakiraan Musim Kemarau (PMK) 2026</strong> yang diterbitkan
          oleh Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Republik
          Indonesia.
        </p>
        <p>
          Dokumen asli berupa PDF yang memuat tabel prediksi untuk 699 Zona
          Musim (ZOM/Wilayah Prakiraan) di seluruh Indonesia, mencakup 6 pulau/kepulauan besar.
        </p>
      </Section>

      <Section
        icon={<Calculator size={16} />}
        title="Metode Ekstraksi"
      >
        <p>
          Data diekstrak dari tabel-tabel dalam PDF ke format JSON dengan proses berikut:
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            <strong>Awal musim kemarau, sifat hujan, puncak kemarau, dan nama zona</strong>{" "}
            diekstrak langsung dari "Tabel Prediksi Musim Kemarau 2026 di
            Indonesia".
          </li>
          <li>
            <strong>Curah hujan normal</strong> dijumlahkan dari tabel normal
            curah hujan dasarian 1991–2020 (April–September), yaitu 3 dasarian
            per bulan × 6 bulan = 18 nilai dasarian.
          </li>
          <li>
            <strong>Curah hujan prakiraan</strong> — PDF hanya menampilkan
            kategori warna (bukan angka presisi). Oleh karena itu, nilai
            representatif digunakan per dasarian.
          </li>
        </ul>
      </Section>

      <Section
        icon={<AlertCircle size={16} />}
        title="Konversi Kategori ke Nilai Representatif"
      >
        <p>
          Karena data prakiraan ditampilkan sebagai kategori warna, konversi
          berikut diterapkan:
        </p>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-xs text-gray-500">
                <th className="px-3 py-2 text-left font-medium">Kategori PDF</th>
                <th className="px-3 py-2 text-left font-medium">Rentang (mm)</th>
                <th className="px-3 py-2 text-left font-medium">Nilai Representatif (mm)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="px-3 py-2">
                  <span className="inline-block rounded bg-red-500 px-2 py-0.5 text-xs text-white">
                    &lt;50
                  </span>
                </td>
                <td className="px-3 py-2">0 – 49</td>
                <td className="px-3 py-2 font-semibold">25</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-3 py-2">
                  <span className="inline-block rounded bg-amber-500 px-2 py-0.5 text-xs text-white">
                    50–150
                  </span>
                </td>
                <td className="px-3 py-2">50 – 150</td>
                <td className="px-3 py-2 font-semibold">100</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-3 py-2">
                  <span className="inline-block rounded bg-blue-500 px-2 py-0.5 text-xs text-white">
                    150–300
                  </span>
                </td>
                <td className="px-3 py-2">150 – 300</td>
                <td className="px-3 py-2 font-semibold">225</td>
              </tr>
              <tr>
                <td className="px-3 py-2">
                  <span className="inline-block rounded bg-green-500 px-2 py-0.5 text-xs text-white">
                    ≥300
                  </span>
                </td>
                <td className="px-3 py-2">300+</td>
                <td className="px-3 py-2 font-semibold">300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-amber-700 bg-amber-50 rounded-lg p-3 text-xs">
          <strong>Catatan penting:</strong> Nilai curah hujan prakiraan yang
          ditampilkan adalah estimasi representatif, bukan angka presisi dari
          BMKG. Gunakan sebagai indikasi umum, bukan acuan numerik mutlak.
        </p>
      </Section>

      <Section
        icon={<BookOpen size={16} />}
        title="Kasus Khusus"
      >
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong>Tipe 1 Musim ({`113 zona`}):</strong> Zona yang tidak
            memiliki pembagian musim hujan dan kemarau yang tegas. Curah hujan
            relatif merata sepanjang tahun. Awal musim kemarau tidak
            diidentifikasi, dan puncak kemarau diisi bulan dengan curah hujan
            terendah.
          </li>
          <li>
            <strong>Sudah MK:</strong> Zona yang sudah memasuki musim kemarau
            pada saat prakiraan diterbitkan. Petani disarankan tidak memulai
            tanam padi baru kecuali irigasi sangat memadai.
          </li>
        </ul>
      </Section>

      <Section
        icon={<Database size={16} />}
        title="Transparansi Data Audit"
      >
        <p>
          Pada <strong>Mode Penyuluh</strong>, halaman detail wilayah menampilkan
          panel "Detail Audit Dasarian" yang memperlihatkan:
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Kategori prakiraan per dasarian (3 per bulan)</li>
          <li>Nilai normal per dasarian (dari data 1991–2020)</li>
          <li>Perhitungan nilai representatif bulanan</li>
        </ul>
        <p>
          Ini memungkinkan penyuluh menelusuri jejak ekstraksi data dan
          memverifikasi angka yang ditampilkan.
        </p>
      </Section>

      <Section
        icon={<MapPin size={16} />}
        title="Peta (Akan Datang)"
      >
        <p>
          Saat ini data wilayah tidak menyertakan koordinat atau poligon geografis,
          sehingga peta interaktif belum tersedia. Arsitektur aplikasi sudah
          disiapkan untuk integrasi data GeoJSON di masa depan, yang akan
          memungkinkan visualisasi spasial per wilayah.
        </p>
      </Section>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center text-xs text-gray-500">
        <p>
          Data terakhir diperbarui berdasarkan PMK 2026 BMKG.
          <br />
          Aplikasi ini bukan produk resmi BMKG. Gunakan informasi dengan bijak.
        </p>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
        {icon}
        {title}
      </h3>
      <div className="space-y-2 text-sm leading-relaxed text-gray-600">
        {children}
      </div>
    </div>
  );
}
