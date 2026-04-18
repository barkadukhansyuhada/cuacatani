"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyMattersSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-putih-krem py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_0.4fr]">
          {/* Main content */}
          <div className="space-y-6">
            <h2
              className={`font-[family-name:var(--font-playfair)] text-3xl font-bold text-hijau-tua sm:text-4xl reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-1" : ""}`}
            >
              Mengapa Ini Penting
            </h2>

            <div className="space-y-5 font-[family-name:var(--font-source-sans)] text-base leading-relaxed text-gray-700 sm:text-lg">
              <p
                className={`reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
              >
                Setiap tahun, BMKG menerbitkan prakiraan musim kemarau untuk
                seluruh Indonesia. Data ini menentukan kapan kemarau dimulai,
                seberapa kering, dan wilayah mana yang paling berisiko. Bagi 42
                juta petani Indonesia, informasi ini bisa menjadi perbedaan
                antara panen yang berhasil dan gagal total.
              </p>

              <p
                className={`reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-3" : ""}`}
              >
                Masalahnya: data ini terkubur dalam dokumen PDF teknis ratusan
                halaman, penuh istilah klimatologi yang bahkan penyuluh pertanian
                butuh waktu untuk memahami. &ldquo;ZOM&rdquo;,
                &ldquo;Dasarian&rdquo;, &ldquo;Sifat Hujan Bawah Normal&rdquo;
                &mdash; bukan bahasa yang sampai ke sawah.
              </p>

              <p
                className={`reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-4" : ""}`}
              >
                Petani BMKG mengubah data ini menjadi informasi yang bisa
                langsung ditindaklanjuti. Tanpa jargon, tanpa PDF, langsung di HP
                Anda.
              </p>
            </div>
          </div>

          {/* Pull quote sidebar */}
          <aside
            className={`flex items-start md:pt-16 reveal-base reveal-right ${isVisible ? "revealed reveal-slow reveal-delay-3" : ""}`}
          >
            <blockquote className="relative border-l-4 border-kuning-gandum pl-5">
              <p className="font-[family-name:var(--font-playfair)] text-xl italic leading-snug text-hijau-tua sm:text-2xl">
                &ldquo;451 dari 699 wilayah berisiko kekeringan tinggi. Ini
                bukan statistik &mdash; ini jutaan hektar sawah.&rdquo;
              </p>
            </blockquote>
          </aside>
        </div>
      </div>
    </section>
  );
}
