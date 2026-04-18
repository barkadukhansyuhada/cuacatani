"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function LandingFooter() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <footer ref={ref} className="border-t border-tanah-kering/20 bg-putih-krem py-12">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        {/* Decorative separator */}
        <div
          className={`footer-separator mb-8 reveal-base reveal-scale ${isVisible ? "revealed reveal-fast reveal-delay-1" : ""}`}
        />

        <p
          className={`font-[family-name:var(--font-source-sans)] text-sm leading-relaxed text-tanah-kering reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
        >
          Data bersumber dari{" "}
          <strong className="text-hijau-tua">
            Prakiraan Musim Kemarau 2026
          </strong>
          , diterbitkan oleh Badan Meteorologi, Klimatologi, dan Geofisika
          (BMKG) Republik Indonesia.
        </p>

        <p
          className={`mt-3 font-[family-name:var(--font-source-sans)] text-xs text-tanah-kering/70 reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-3" : ""}`}
        >
          Bukan produk resmi BMKG. Informasi ini disusun ulang dari data publik
          untuk kepentingan petani Indonesia.
        </p>

        <div
          className={`mt-6 reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-4" : ""}`}
        >
          <Link
            href="/dashboard"
            className="footer-cta inline-flex items-center gap-2 rounded-full border border-hijau-tua/20 px-6 py-2.5 font-[family-name:var(--font-source-sans)] text-sm font-semibold text-hijau-tua transition-colors hover:bg-hijau-tua hover:text-putih-krem"
          >
            Buka Aplikasi
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p
          className={`mt-8 font-[family-name:var(--font-source-sans)] text-xs text-tanah-kering/50 reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-5" : ""}`}
        >
          &copy; 2026 Petani BMKG &mdash; Akses terbuka untuk semua
        </p>
      </div>
    </footer>
  );
}
