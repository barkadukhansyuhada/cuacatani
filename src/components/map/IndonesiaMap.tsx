"use client";

import { useEffect, useState, useMemo } from "react";
import type { ZomEntry } from "@/lib/types";
import { RISIKO_CHART_COLORS } from "@/lib/constants";
import { getZomCoordinate } from "@/lib/kabupaten_coords";

// Dynamic import to avoid SSR issues with Leaflet
let MapContainer: typeof import("react-leaflet").MapContainer;
let TileLayer: typeof import("react-leaflet").TileLayer;
let CircleMarker: typeof import("react-leaflet").CircleMarker;
let Popup: typeof import("react-leaflet").Popup;
let Tooltip: typeof import("react-leaflet").Tooltip;

interface ZomMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  risiko: ZomEntry["risikoKekeringan"];
  sifat: ZomEntry["sifatHujan"];
  awal: string;
  island: string;
}

interface IndonesiaMapProps {
  data: ZomEntry[];
  onZomClick?: (zomId: string) => void;
  onProvinceClick?: (provinceName: string) => void;
}

export function IndonesiaMap({ data, onZomClick }: IndonesiaMapProps) {
  const [loaded, setLoaded] = useState(false);

  const markers: ZomMarker[] = useMemo(() => {
    return data.map((z) => {
      const coord = getZomCoordinate(z);
      return {
        id: z.id,
        name: z.name,
        lat: coord.lat,
        lng: coord.lng,
        risiko: z.risikoKekeringan,
        sifat: z.sifatHujan,
        awal: z.awalMusimKemarau,
        island: z.island,
      };
    });
  }, [data]);

  useEffect(() => {
    // Inject Leaflet CSS via <link> tag (Turbopack can't handle dynamic CSS imports)
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    import("react-leaflet").then((mod) => {
      MapContainer = mod.MapContainer;
      TileLayer = mod.TileLayer;
      CircleMarker = mod.CircleMarker;
      Popup = mod.Popup;
      Tooltip = mod.Tooltip;
      setLoaded(true);
    });
  }, []);

  if (!loaded || !MapContainer) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-400">Memuat peta...</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <MapContainer
        center={[-2.5, 118]}
        zoom={5}
        minZoom={4}
        maxZoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => {
          const color = RISIKO_CHART_COLORS[m.risiko];
          return (
            <CircleMarker
              key={m.id}
              center={[m.lat, m.lng]}
              radius={5}
              pathOptions={{
                fillColor: color,
                fillOpacity: 0.8,
                color: "#fff",
                weight: 1,
              }}
              eventHandlers={{
                click: () => onZomClick?.(m.id),
              }}
            >
              <Tooltip direction="top" offset={[0, -6]}>
                <div className="text-xs max-w-[200px]">
                  <p className="font-bold leading-tight">{m.name.split(",")[0]}</p>
                  <p className="text-gray-500">{m.island} · {m.awal}</p>
                </div>
              </Tooltip>
              <Popup>
                <div className="text-xs leading-relaxed max-w-[220px]">
                  <p className="text-sm font-bold leading-tight">{m.name}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {m.risiko}
                    </span>
                    <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium text-gray-600">
                      {m.sifat}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500">{m.island} · Kemarau: {m.awal}</p>
                  {onZomClick && (
                    <button
                      onClick={() => onZomClick(m.id)}
                      className="mt-2 rounded bg-green-600 px-2.5 py-1 text-[10px] font-semibold text-white hover:bg-green-700"
                    >
                      Lihat detail →
                    </button>
                  )}
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
      <div className="flex items-center justify-center gap-4 bg-white px-3 py-2 text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" /> Risiko Tinggi
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" /> Risiko Sedang
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" /> Risiko Rendah
        </span>
      </div>
    </div>
  );
}
