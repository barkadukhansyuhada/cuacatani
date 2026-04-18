# Petani BMKG — Prakiraan Musim Kemarau 2026

Aplikasi web interaktif mobile-first untuk membantu petani dan penyuluh pertanian Indonesia memahami prakiraan musim kemarau 2026 berdasarkan data resmi BMKG.

## Fitur

- **Dashboard Nasional** — Statistik 699 Zona Musim, distribusi risiko, insight otomatis
- **Pencarian & Filter** — Cari zona berdasarkan nama, pulau, risiko, sifat hujan
- **Detail ZOM** — Chart curah hujan prakiraan vs normal, tabel selisih, rekomendasi tanam
- **Perbandingan** — Bandingkan 2–4 ZOM secara side-by-side
- **Mode Petani & Penyuluh** — Tampilan sederhana vs detail teknis dengan audit dasarian
- **Ekspor** — CSV, share (Web Share API), dan print
- **Metodologi** — Penjelasan transparan tentang sumber data dan konversi nilai

## Tech Stack

- Next.js 16 (App Router, Static Export)
- TypeScript
- Tailwind CSS v4
- Recharts
- Lucide React

## Menjalankan Lokal

```bash
# 1. Install dependencies
cd app
npm install

# 2. Development mode
npm run dev

# 3. Build static export
npm run build

# 4. Preview build hasil
npx serve out
```

Buka `http://localhost:3000` di browser.

## Struktur Folder

```
app/
├── public/data/                    # Audit JSON (lazy-loaded)
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Dashboard (Beranda)
│   │   ├── cari/                   # Pencarian & filter ZOM
│   │   ├── zom/[id]/               # Detail ZOM (699 halaman)
│   │   ├── bandingkan/             # Perbandingan ZOM
│   │   └── metodologi/             # Metodologi data
│   ├── components/
│   │   ├── layout/                 # AppShell, BottomNav, ModeToggle
│   │   ├── dashboard/              # StatCard, RiskBreakdown, InsightList
│   │   ├── zom/                    # ZomCard, RainfallChart, AuditPanel
│   │   ├── search/                 # SearchBar, FilterPanel, SortSelect
│   │   └── shared/                 # RiskBadge, SifatBadge, EmptyState
│   ├── contexts/                   # ModeContext, CompareContext
│   ├── data/                       # JSON data + typed indexes
│   ├── hooks/                      # useMode, useCompare
│   └── lib/                        # types, constants, filters, utils
```

## Arsitektur Data

- **pmk2026_zom_all.json** (880 KB) — Data utama 699 ZOM, di-bundle langsung
- **pmk2026_zom_all_audit.json** (2 MB) — Data audit dasarian, lazy-loaded hanya di Mode Penyuluh
- Nilai curah hujan prakiraan adalah estimasi representatif dari kategori warna PDF BMKG:
  - `<50` → 25 mm, `50-150` → 100 mm, `150-300` → 225 mm, `≥300` → 300 mm

## Deploy

Aplikasi ini menghasilkan static export (`output: 'export'`) — bisa di-deploy ke:
- Vercel, Netlify, GitHub Pages
- Nginx / Apache (serve folder `out/`)
- Bahkan dari USB drive (buka `index.html` langsung)

## Catatan Penting

- Aplikasi ini **bukan produk resmi BMKG**
- Nilai curah hujan prakiraan adalah estimasi, bukan angka presisi
- Data koordinat ZOM belum tersedia; arsitektur siap untuk integrasi GeoJSON di masa depan
- Seluruh 699 halaman ZOM di-prerender sebagai static HTML saat build
