"use client";

import type { DashboardStats } from "@/lib/types";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection({ stats }: { stats: DashboardStats }) {
  const pctTinggi = Math.round(
    (stats.byRisiko.Tinggi / stats.totalZom) * 100
  );

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1, rootMargin: "0px" });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden hero-gradient-bg text-putih-krem hero-particles"
    >
      {/* Grain texture via SVG filter */}
      <svg className="absolute inset-0 h-0 w-0" aria-hidden="true">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ filter: "url(#grain)" }}
      />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:px-8">
        {/* Eyebrow */}
        <p
          className={`font-[family-name:var(--font-source-sans)] text-sm font-semibold uppercase tracking-[0.2em] text-kuning-gandum reveal-base reveal-up ${heroVisible ? "revealed reveal-fast reveal-delay-1" : ""}`}
        >
          Prakiraan Musim Kemarau 2026
        </p>

        {/* Headline */}
        <h1
          className={`mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl reveal-base reveal-up ${heroVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
        >
          Kemarau 2026
          <br />
          <span className="text-kuning-gandum">Sudah di Depan Mata</span>
        </h1>

        {/* Big stat */}
        <div
          className={`mt-10 flex items-baseline gap-4 reveal-base reveal-up ${heroVisible ? "revealed reveal-normal reveal-delay-3" : ""}`}
        >
          <span className="font-[family-name:var(--font-playfair)] text-7xl font-black leading-none text-kuning-gandum sm:text-8xl md:text-9xl hero-stat-shimmer">
            {pctTinggi}%
          </span>
          <p className="max-w-[16rem] font-[family-name:var(--font-source-sans)] text-lg leading-snug text-putih-krem/80 sm:text-xl">
            wilayah Indonesia berisiko kekeringan{" "}
            <strong className="text-putih-krem">tinggi</strong>
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex flex-col gap-4 sm:flex-row sm:items-center reveal-base reveal-up ${heroVisible ? "revealed reveal-normal reveal-delay-4" : ""}`}
        >
          <Link
            href="/dashboard"
            className="group inline-flex items-center justify-center rounded-full bg-kuning-gandum px-8 py-3.5 font-[family-name:var(--font-source-sans)] text-base font-bold text-hijau-tua transition-all hover:bg-kuning-gandum/90 hover:shadow-lg hover:shadow-kuning-gandum/20"
          >
            Cek Wilayah Anda
            <span className="ml-2 hero-cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
          <span className="font-[family-name:var(--font-source-sans)] text-sm text-putih-krem/60">
            Data untuk {stats.totalZom} wilayah prakiraan
          </span>
        </div>
      </div>
    </section>
  );
}
