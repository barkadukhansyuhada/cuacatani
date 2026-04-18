"use client";

import { zomData } from "@/data";
import { getZomCoordinate } from "@/lib/kabupaten_coords";
import { RISIKO_CHART_COLORS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MIN_LNG = 94;
const MAX_LNG = 142;
const MIN_LAT = -11.5;
const MAX_LAT = 7;
const SVG_W = 960;
const SVG_H = 370;

function project(lat: number, lng: number) {
  const x = ((lng - MIN_LNG) / (MAX_LNG - MIN_LNG)) * SVG_W;
  const y = ((MAX_LAT - lat) / (MAX_LAT - MIN_LAT)) * SVG_H;
  return { x, y };
}

export function DotMapSection() {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 });
  const [mapRef, mapVisible] = useScrollReveal({ threshold: 0.15 });

  const dots = zomData.map((z) => {
    const { lat, lng } = getZomCoordinate(z);
    const { x, y } = project(lat, lng);
    return {
      id: z.id,
      x,
      y,
      color: RISIKO_CHART_COLORS[z.risikoKekeringan],
      risk: z.risikoKekeringan,
    };
  });

  return (
    <section className="bg-hijau-tua py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div ref={titleRef}>
          <h2
            className={`text-center font-[family-name:var(--font-playfair)] text-3xl font-bold text-putih-krem sm:text-4xl reveal-base reveal-up ${titleVisible ? "revealed reveal-normal reveal-delay-1" : ""}`}
          >
            699 Wilayah, Satu Pandangan
          </h2>
          <p
            className={`mx-auto mt-3 max-w-xl text-center font-[family-name:var(--font-source-sans)] text-base text-putih-krem/60 reveal-base reveal-up ${titleVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
          >
            Setiap titik adalah satu wilayah prakiraan. Merah mendominasi.
          </p>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className={`mt-10 overflow-hidden rounded-2xl bg-hijau-tua/50 dot-map-container ${mapVisible ? "revealed" : ""}`}
        >
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full"
            role="img"
            aria-label="Peta Indonesia menunjukkan 699 wilayah prakiraan berdasarkan risiko kekeringan"
          >
            {/* Dots — render Rendah first, Tinggi on top */}
            {dots
              .sort((a, b) => {
                const order = { Rendah: 0, Sedang: 1, Tinggi: 2 };
                return order[a.risk] - order[b.risk];
              })
              .map((d) => (
                <circle
                  key={d.id}
                  cx={d.x}
                  cy={d.y}
                  r={mapVisible ? 3.5 : 0}
                  fill={d.color}
                  opacity={mapVisible ? 0.85 : 0}
                  className={d.risk === "Tinggi" && mapVisible ? "dot-glow-tinggi" : ""}
                  style={{
                    transition: "r 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
                    transitionDelay: `${Math.random() * 0.8}s`,
                  }}
                />
              ))}
          </svg>
        </div>

        {/* Legend */}
        <div
          className={`mt-6 flex justify-center gap-6 font-[family-name:var(--font-source-sans)] text-sm text-putih-krem/80 reveal-base reveal-up ${mapVisible ? "revealed reveal-normal reveal-delay-3" : ""}`}
        >
          {(
            [
              ["Tinggi", RISIKO_CHART_COLORS.Tinggi],
              ["Sedang", RISIKO_CHART_COLORS.Sedang],
              ["Rendah", RISIKO_CHART_COLORS.Rendah],
            ] as const
          ).map(([label, color]) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
