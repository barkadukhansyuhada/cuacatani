import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petani BMKG — Prakiraan Musim Kemarau 2026",
  description:
    "Informasi prakiraan musim kemarau 2026 untuk petani dan penyuluh pertanian Indonesia. Data resmi BMKG per wilayah prakiraan.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a4d2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
