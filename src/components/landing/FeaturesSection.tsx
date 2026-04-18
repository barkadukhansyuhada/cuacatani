"use client";

import { AlertTriangle, MapPin, Smartphone } from "lucide-react";
import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <AlertTriangle size={28} />,
    title: "Peringatan yang Bisa Ditindaklanjuti",
    description:
      "Bukan sekadar data cuaca. Setiap wilayah dilengkapi rekomendasi tanam spesifik \u2014 kapan harus menunda, apa yang bisa ditanam, dan risiko apa yang perlu diantisipasi.",
  },
  {
    icon: <MapPin size={28} />,
    title: "699 Wilayah, Satu Ketukan",
    description:
      "Cari wilayah Anda dari 699 zona prakiraan di seluruh Indonesia. Filter berdasarkan pulau, tingkat risiko, atau cari langsung nama kabupaten.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Bisa Offline, Bisa di HP Murah",
    description:
      "Dirancang untuk koneksi 3G dan layar kecil. Setiap halaman wilayah adalah file statis yang bisa diakses tanpa koneksi internet setelah pertama kali dibuka.",
  },
];

export function FeaturesSection() {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="bg-putih-krem py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div ref={titleRef}>
          <h2
            className={`font-[family-name:var(--font-playfair)] text-3xl font-bold text-hijau-tua sm:text-4xl reveal-base reveal-up ${titleVisible ? "revealed reveal-normal reveal-delay-1" : ""}`}
          >
            Dibuat untuk Petani
          </h2>
          <p
            className={`mt-3 max-w-xl font-[family-name:var(--font-source-sans)] text-base text-tanah-kering sm:text-lg reveal-base reveal-up ${titleVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
          >
            Tiga hal yang membedakan Petani BMKG dari sekadar baca PDF.
          </p>
        </div>

        <div ref={cardsRef} className="mt-10 grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card rounded-2xl border border-langit-cerah bg-langit-cerah/40 p-6 reveal-base reveal-up ${cardsVisible ? `revealed reveal-normal reveal-delay-${i + 1}` : ""}`}
            >
              <div className="feature-icon inline-flex rounded-xl bg-hijau-tua/10 p-3 text-hijau-tua">
                {f.icon}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-source-sans)] text-lg font-bold text-hijau-tua">
                {f.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-source-sans)] text-sm leading-relaxed text-gray-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
