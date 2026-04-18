import type { ZomEntry } from "@/lib/types";

/**
 * Province center coordinates for fallback when no kabupaten match is found.
 * Format: [latitude, longitude]
 */
export const PROVINCE_CENTERS: Record<string, [number, number]> = {
  ACEH: [4.7, 96.75],
  SUMUT: [2.5, 99.0],
  SUMBAR: [-0.95, 100.4],
  RIAU: [1.0, 102.0],
  KEPRI: [1.0, 104.5],
  JAMBI: [-1.6, 103.6],
  BENGKULU: [-3.8, 102.3],
  SUMSEL: [-3.3, 104.8],
  BABEL: [-2.7, 106.6],
  LAMPUNG: [-5.0, 105.0],
  BANTENDKI: [-6.2, 106.6],
  JABAR: [-6.9, 107.6],
  JATENG: [-7.15, 110.4],
  DIY: [-7.8, 110.4],
  JATIM: [-7.5, 112.0],
  KALBAR: [-0.3, 109.3],
  KALTENG: [-1.7, 113.9],
  KALTARA: [3.0, 116.5],
  KALTIM: [0.5, 116.3],
  KALSEL: [-3.3, 115.5],
  BALI: [-8.4, 115.2],
  NTB: [-8.6, 117.5],
  NTT: [-9.5, 121.0],
  SULUT: [1.2, 124.8],
  GORONTALO: [0.55, 122.4],
  SULTENG: [-1.4, 121.4],
  SULBAR: [-2.8, 119.0],
  SULSEL: [-3.7, 120.2],
  SULTRA: [-4.0, 122.2],
  MALUT: [1.5, 128.0],
  MALUKU: [-3.7, 128.2],
  PAPBAR: [-1.4, 133.5],
  PAPUA: [-3.5, 138.5],
  PAPSEL: [-6.5, 140.0],
};

/**
 * Lookup table mapping normalized kabupaten/kota names to [latitude, longitude].
 * Names are lowercased and stripped of "kab.", "kota", "kabupaten" prefixes.
 */
export const KABUPATEN_COORDS: Record<string, [number, number]> = {
  // ── ACEH ──────────────────────────────────────────────────────────────────
  "aceh besar": [5.4, 95.6],
  pidie: [4.9, 96.0],
  "pidie jaya": [5.1, 96.3],
  bireuen: [5.2, 96.7],
  "aceh utara": [5.1, 97.0],
  lhokseumawe: [5.18, 97.13],
  "aceh timur": [4.6, 97.7],
  langsa: [4.47, 97.97],
  "banda aceh": [5.55, 95.32],
  sabang: [5.89, 95.32],
  "aceh jaya": [4.6, 95.6],
  "aceh barat": [4.1, 96.1],
  "nagan raya": [4.0, 96.4],
  "aceh tengah": [4.7, 96.8],
  "gayo lues": [3.8, 97.1],
  "bener meriah": [4.6, 96.9],
  "aceh tamiang": [4.2, 97.9],
  "aceh selatan": [3.2, 97.0],
  "aceh singkil": [2.4, 97.8],
  simeulue: [2.6, 96.1],
  "aceh tenggara": [3.5, 97.6],
  subulussalam: [2.65, 98.0],

  // ── SUMUT ─────────────────────────────────────────────────────────────────
  langkat: [3.5, 98.2],
  "deli serdang": [3.4, 98.7],
  medan: [3.59, 98.67],
  binjai: [3.6, 98.49],
  asahan: [2.8, 99.6],
  "tanjung balai": [2.97, 99.8],
  labuhanbatu: [2.1, 100.2],
  "labuhanbatu selatan": [1.8, 100.0],
  "labuhanbatu utara": [2.5, 100.0],
  simalungun: [2.9, 99.0],
  "pematang siantar": [2.96, 99.07],
  dairi: [2.8, 98.3],
  karo: [3.1, 98.5],
  samosir: [2.6, 98.7],
  toba: [2.4, 99.1],
  "humbang hasundutan": [2.3, 98.6],
  "tapanuli utara": [2.1, 99.0],
  "tapanuli tengah": [1.7, 98.7],
  sibolga: [1.74, 98.78],
  "padang lawas": [1.4, 99.8],
  "padang lawas utara": [1.7, 99.6],
  "mandailing natal": [0.7, 99.3],
  "padang sidempuan": [1.38, 99.27],
  nias: [1.1, 97.6],
  "nias selatan": [0.5, 97.8],
  "nias utara": [1.4, 97.6],
  "nias barat": [1.0, 97.3],
  gunungsitoli: [1.29, 97.6],

  // ── SUMBAR ────────────────────────────────────────────────────────────────
  "pasaman barat": [0.1, 99.8],
  pasaman: [0.4, 100.0],
  "padang pariaman": [-0.6, 100.1],
  agam: [-0.25, 100.0],
  bukittinggi: [-0.3, 100.37],
  "lima puluh kota": [-0.2, 100.6],
  "tanah datar": [-0.45, 100.4],
  padang: [-0.95, 100.35],
  solok: [-0.8, 100.65],
  sijunjung: [-0.7, 101.0],
  dharmasraya: [-1.2, 101.5],
  "solok selatan": [-1.4, 101.0],
  "pesisir selatan": [-1.8, 100.4],
  "kepulauan mentawai": [-1.5, 99.2],

  // ── RIAU ──────────────────────────────────────────────────────────────────
  "rokan hilir": [2.3, 101.0],
  "rokan hulu": [1.0, 100.4],
  dumai: [1.68, 101.45],
  bengkalis: [1.5, 102.1],
  siak: [1.0, 102.0],
  pelalawan: [0.3, 102.5],
  kampar: [0.3, 101.2],
  pekanbaru: [0.53, 101.45],
  "indragiri hilir": [-0.5, 103.0],
  "indragiri hulu": [-0.4, 102.3],
  "kuantan singingi": [-0.5, 101.5],
  "kepulauan meranti": [1.0, 102.8],

  // ── KEPRI ─────────────────────────────────────────────────────────────────
  natuna: [3.7, 108.0],
  anambas: [3.0, 106.0],
  bintan: [1.1, 104.5],
  "tanjung pinang": [0.92, 104.46],
  batam: [1.13, 104.03],
  karimun: [1.0, 103.4],
  lingga: [0.2, 104.6],

  // ── JAMBI ─────────────────────────────────────────────────────────────────
  "tanjung jabung timur": [-1.2, 104.0],
  "tanjung jabung barat": [-1.4, 103.5],
  "muaro jambi": [-1.6, 103.7],
  jambi: [-1.6, 103.62],
  "batang hari": [-1.8, 103.0],
  tebo: [-1.5, 102.2],
  bungo: [-1.5, 101.9],
  merangin: [-2.4, 102.4],
  sarolangun: [-2.5, 102.9],
  kerinci: [-2.1, 101.5],
  "sungai penuh": [-2.06, 101.39],

  // ── BENGKULU ──────────────────────────────────────────────────────────────
  "muko-muko": [-2.5, 101.1],
  "bengkulu utara": [-3.2, 102.0],
  lebong: [-3.1, 102.3],
  "rejang lebong": [-3.5, 102.6],
  "bengkulu tengah": [-3.6, 102.2],
  bengkulu: [-3.8, 102.27],
  kepahiang: [-3.7, 102.6],
  seluma: [-4.1, 102.5],
  "bengkulu selatan": [-4.5, 103.2],
  kaur: [-4.9, 103.4],

  // ── SUMSEL ────────────────────────────────────────────────────────────────
  palembang: [-2.98, 104.76],
  "muara enim": [-3.7, 103.7],
  banyuasin: [-2.6, 104.8],
  "musi banyuasin": [-2.5, 103.8],
  "ogan komering ilir": [-3.5, 105.4],
  oki: [-3.5, 105.4],
  "ogan ilir": [-3.3, 104.8],
  prabumulih: [-3.43, 104.23],
  "musi rawas": [-3.0, 103.0],
  "musi rawas utara": [-2.6, 103.1],
  lahat: [-3.8, 103.5],
  "empat lawang": [-4.1, 103.7],
  "pagar alam": [-4.03, 103.27],
  oku: [-4.1, 104.3],
  "oku selatan": [-4.5, 104.1],
  "oku timur": [-4.0, 104.6],

  // ── BABEL ─────────────────────────────────────────────────────────────────
  "bangka barat": [-1.7, 105.6],
  bangka: [-2.1, 106.1],
  "bangka tengah": [-2.2, 106.2],
  "bangka selatan": [-2.8, 106.3],
  belitung: [-2.8, 107.7],
  "belitung timur": [-2.9, 108.2],
  "pangkal pinang": [-2.13, 106.12],

  // ── LAMPUNG ───────────────────────────────────────────────────────────────
  "lampung selatan": [-5.5, 105.5],
  tanggamus: [-5.4, 104.7],
  pesawaran: [-5.4, 105.0],
  "bandar lampung": [-5.45, 105.26],
  pringsewu: [-5.36, 104.97],
  "lampung tengah": [-4.8, 105.3],
  metro: [-5.13, 105.31],
  "lampung timur": [-5.1, 105.8],
  mesuji: [-4.2, 105.8],
  "tulang bawang": [-4.4, 105.7],
  "tulang bawang barat": [-4.5, 105.3],
  "way kanan": [-4.5, 104.5],
  "lampung utara": [-4.5, 104.8],
  "lampung barat": [-5.0, 104.2],
  "pesisir barat": [-5.4, 104.1],

  // ── BANTEN / DKI ──────────────────────────────────────────────────────────
  pandeglang: [-6.3, 106.1],
  lebak: [-6.6, 106.3],
  serang: [-6.1, 106.15],
  cilegon: [-6.0, 106.0],
  tangerang: [-6.2, 106.6],
  "tangerang selatan": [-6.29, 106.72],
  "jakarta barat": [-6.17, 106.76],
  "jakarta selatan": [-6.26, 106.81],
  "jakarta timur": [-6.22, 106.9],
  "jakarta utara": [-6.14, 106.88],
  "jakarta pusat": [-6.19, 106.83],
  "kepulauan seribu": [-5.6, 106.57],
  bekasi: [-6.35, 107.0],
  depok: [-6.4, 106.82],
  bogor: [-6.6, 106.8],

  // ── JABAR ─────────────────────────────────────────────────────────────────
  karawang: [-6.3, 107.3],
  subang: [-6.6, 107.6],
  purwakarta: [-6.55, 107.44],
  indramayu: [-6.4, 108.3],
  cirebon: [-6.7, 108.55],
  majalengka: [-6.85, 108.2],
  kuningan: [-6.97, 108.47],
  sumedang: [-6.85, 107.9],
  bandung: [-7.0, 107.65],
  "bandung barat": [-6.85, 107.5],
  cimahi: [-6.88, 107.54],
  garut: [-7.2, 107.9],
  tasikmalaya: [-7.35, 108.2],
  ciamis: [-7.35, 108.35],
  pangandaran: [-7.68, 108.65],
  // Kota Banjar (Jawa Barat) — keyed with qualifier to avoid clash with Kab. Banjar (Kalsel)
  "banjar kota": [-7.37, 108.54],
  cianjur: [-6.82, 107.14],
  sukabumi: [-6.92, 106.93],

  // ── JATENG ────────────────────────────────────────────────────────────────
  brebes: [-6.87, 108.92],
  tegal: [-6.88, 109.12],
  pemalang: [-6.9, 109.38],
  pekalongan: [-6.89, 109.68],
  batang: [-6.92, 109.73],
  kendal: [-6.92, 110.2],
  semarang: [-7.1, 110.4],
  demak: [-6.9, 110.64],
  jepara: [-6.6, 110.65],
  kudus: [-6.8, 110.84],
  pati: [-6.75, 111.0],
  rembang: [-6.7, 111.35],
  blora: [-6.97, 111.4],
  grobogan: [-7.05, 110.9],
  cilacap: [-7.72, 108.83],
  banyumas: [-7.5, 109.0],
  purbalingga: [-7.39, 109.37],
  banjarnegara: [-7.37, 109.7],
  kebumen: [-7.67, 109.65],
  purworejo: [-7.72, 110.0],
  wonosobo: [-7.36, 109.9],
  temanggung: [-7.3, 110.17],
  magelang: [-7.48, 110.2],
  boyolali: [-7.53, 110.6],
  klaten: [-7.7, 110.6],
  sukoharjo: [-7.67, 110.83],
  wonogiri: [-7.82, 110.92],
  sragen: [-7.42, 111.03],
  karanganyar: [-7.6, 111.03],
  surakarta: [-7.56, 110.83],
  "karimun jawa": [-5.85, 110.43],

  // ── DIY ───────────────────────────────────────────────────────────────────
  "kulon progo": [-7.83, 110.16],
  sleman: [-7.72, 110.36],
  bantul: [-7.9, 110.33],
  gunungkidul: [-8.0, 110.6],
  yogyakarta: [-7.8, 110.37],

  // ── JATIM ─────────────────────────────────────────────────────────────────
  pacitan: [-8.2, 111.1],
  trenggalek: [-8.05, 111.7],
  tulungagung: [-8.06, 111.9],
  ponorogo: [-7.87, 111.46],
  magetan: [-7.65, 111.35],
  ngawi: [-7.4, 111.45],
  madiun: [-7.63, 111.52],
  nganjuk: [-7.6, 111.9],
  kediri: [-7.8, 112.0],
  blitar: [-8.1, 112.2],
  jombang: [-7.55, 112.25],
  lamongan: [-7.1, 112.4],
  gresik: [-7.16, 112.65],
  surabaya: [-7.26, 112.74],
  mojokerto: [-7.47, 112.43],
  sidoarjo: [-7.45, 112.72],
  pasuruan: [-7.65, 112.9],
  malang: [-7.98, 112.62],
  batu: [-7.87, 112.53],
  lumajang: [-8.14, 113.22],
  probolinggo: [-7.75, 113.22],
  jember: [-8.17, 113.7],
  bondowoso: [-7.91, 113.82],
  situbondo: [-7.7, 114.0],
  banyuwangi: [-8.22, 114.37],
  bangkalan: [-6.9, 112.77],
  sampang: [-7.18, 113.25],
  pamekasan: [-7.16, 113.47],
  sumenep: [-6.99, 113.87],
  bojonegoro: [-7.15, 111.88],
  tuban: [-6.9, 112.05],

  // ── KALBAR ────────────────────────────────────────────────────────────────
  ketapang: [-1.85, 110.0],
  "kayong utara": [-1.2, 110.0],
  melawi: [-0.7, 111.5],
  "kapuas hulu": [0.8, 113.0],
  sanggau: [0.1, 110.6],
  sekadau: [-0.1, 110.95],
  sintang: [0.06, 111.5],
  landak: [0.35, 109.9],
  bengkayang: [1.2, 109.6],
  sambas: [1.45, 109.35],
  pontianak: [-0.03, 109.33],
  singkawang: [0.9, 109.0],
  "kubu raya": [-0.35, 109.5],
  mempawah: [0.35, 108.97],

  // ── KALTENG ───────────────────────────────────────────────────────────────
  "murung raya": [-0.7, 114.5],
  "gunung mas": [-1.3, 113.6],
  katingan: [-2.0, 113.4],
  "barito utara": [-0.8, 114.8],
  "barito selatan": [-1.8, 114.8],
  "barito timur": [-2.0, 115.5],
  kapuas: [-2.7, 114.3],
  "pulang pisau": [-2.7, 113.9],
  "palangka raya": [-2.21, 113.92],
  "kotawaringin timur": [-2.3, 113.0],
  "kotawaringin barat": [-2.25, 111.75],
  seruyan: [-2.2, 112.4],
  sukamara: [-2.7, 111.2],
  lamandau: [-2.8, 111.5],

  // ── KALTARA ───────────────────────────────────────────────────────────────
  bulungan: [2.6, 117.3],
  nunukan: [4.15, 117.66],
  malinau: [3.5, 116.7],
  "tana tidung": [3.6, 117.15],
  tarakan: [3.3, 117.63],

  // ── KALTIM ────────────────────────────────────────────────────────────────
  berau: [2.15, 117.5],
  "kutai timur": [1.2, 117.9],
  "kutai kartanegara": [-0.5, 117.0],
  samarinda: [-0.49, 117.14],
  "kutai barat": [-0.5, 115.5],
  "mahakam ulu": [0.7, 115.3],
  paser: [-1.5, 116.0],
  "penajam paser utara": [-1.3, 116.5],
  balikpapan: [-1.27, 116.83],
  bontang: [0.13, 117.5],

  // ── KALSEL ────────────────────────────────────────────────────────────────
  tabalong: [-2.15, 115.5],
  balangan: [-2.5, 115.3],
  "hulu sungai utara": [-2.3, 115.2],
  "hulu sungai tengah": [-2.6, 115.4],
  "hulu sungai selatan": [-2.8, 115.5],
  tapin: [-3.0, 115.0],
  banjar: [-3.5, 115.0],
  "barito kuala": [-3.2, 114.5],
  "tanah laut": [-3.7, 114.7],
  "tanah bumbu": [-3.7, 115.8],
  kotabaru: [-3.3, 116.2],
  banjarmasin: [-3.32, 114.59],
  banjarbaru: [-3.44, 114.83],

  // ── BALI ──────────────────────────────────────────────────────────────────
  jembrana: [-8.4, 114.65],
  buleleng: [-8.12, 115.1],
  tabanan: [-8.55, 115.0],
  badung: [-8.55, 115.17],
  denpasar: [-8.65, 115.22],
  gianyar: [-8.54, 115.33],
  bangli: [-8.45, 115.35],
  klungkung: [-8.54, 115.4],
  karangasem: [-8.45, 115.6],
  "nusa penida": [-8.73, 115.5],

  // ── NTB ───────────────────────────────────────────────────────────────────
  mataram: [-8.58, 116.11],
  "lombok barat": [-8.65, 116.1],
  "lombok utara": [-8.4, 116.1],
  "lombok tengah": [-8.75, 116.28],
  "lombok timur": [-8.65, 116.55],
  "sumbawa barat": [-8.78, 116.89],
  sumbawa: [-8.5, 117.4],
  dompu: [-8.53, 118.47],
  bima: [-8.5, 118.72],

  // ── NTT ───────────────────────────────────────────────────────────────────
  "manggarai barat": [-8.65, 119.9],
  manggarai: [-8.65, 120.45],
  "manggarai timur": [-8.65, 120.8],
  ngada: [-8.7, 121.0],
  nagekeo: [-8.8, 121.3],
  ende: [-8.84, 121.66],
  sikka: [-8.75, 122.3],
  "flores timur": [-8.5, 122.9],
  lembata: [-8.45, 123.5],
  alor: [-8.15, 124.45],
  "sumba barat daya": [-9.52, 119.35],
  "sumba barat": [-9.65, 119.75],
  "sumba tengah": [-9.7, 120.3],
  "sumba timur": [-9.65, 120.9],
  "sabu raijua": [-10.5, 121.85],
  "rote ndao": [-10.75, 123.0],
  kupang: [-10.2, 123.75],
  "timor tengah selatan": [-9.82, 124.2],
  "timor tengah utara": [-9.4, 124.6],
  belu: [-9.55, 125.2],
  malaka: [-9.7, 124.9],

  // ── SULUT ─────────────────────────────────────────────────────────────────
  "bolaang mongondow": [0.6, 124.0],
  "bolaang mongondow utara": [1.0, 124.1],
  "bolaang mongondow timur": [0.5, 124.5],
  "bolaang mongondow selatan": [0.4, 123.9],
  minahasa: [1.2, 124.8],
  "minahasa utara": [1.5, 124.9],
  "minahasa selatan": [1.0, 124.5],
  "minahasa tenggara": [0.75, 124.8],
  manado: [1.48, 124.84],
  tomohon: [1.32, 124.83],
  bitung: [1.44, 125.2],
  sangihe: [3.5, 125.5],
  talaud: [4.3, 126.75],
  sitaro: [2.7, 125.45],

  // ── GORONTALO ─────────────────────────────────────────────────────────────
  gorontalo: [0.55, 122.97],
  "gorontalo utara": [0.85, 122.65],
  "bone bolango": [0.6, 123.2],
  pohuwato: [0.5, 121.9],
  boalemo: [0.45, 122.2],

  // ── SULTENG ───────────────────────────────────────────────────────────────
  buol: [1.2, 121.4],
  "toli-toli": [1.0, 120.8],
  "parigi moutong": [-0.3, 120.2],
  donggala: [-0.7, 119.7],
  palu: [-0.9, 119.87],
  sigi: [-1.2, 119.8],
  poso: [-1.4, 120.75],
  morowali: [-2.3, 121.85],
  "morowali utara": [-1.7, 121.5],
  "tojo una-una": [-0.9, 121.6],
  banggai: [-1.6, 122.9],
  "banggai kepulauan": [-1.8, 123.5],
  "banggai laut": [-1.9, 123.8],

  // ── SULBAR ────────────────────────────────────────────────────────────────
  mamuju: [-2.67, 119.0],
  "mamuju utara": [-1.7, 119.6],
  pasangkayu: [-1.7, 119.6],
  "mamuju tengah": [-2.3, 119.25],
  mamasa: [-3.0, 119.4],
  "polewali mandar": [-3.4, 119.1],
  majene: [-3.55, 118.97],

  // ── SULSEL ────────────────────────────────────────────────────────────────
  selayar: [-6.15, 120.5],
  takalar: [-5.45, 119.45],
  gowa: [-5.3, 119.65],
  jeneponto: [-5.65, 119.7],
  bantaeng: [-5.55, 119.93],
  bulukumba: [-5.55, 120.2],
  sinjai: [-5.12, 120.25],
  bone: [-4.55, 120.35],
  soppeng: [-4.35, 119.88],
  wajo: [-4.1, 120.05],
  barru: [-4.4, 119.6],
  pangkep: [-4.85, 119.55],
  maros: [-5.0, 119.6],
  makassar: [-5.15, 119.43],
  parepare: [-4.01, 119.63],
  pinrang: [-3.79, 119.65],
  enrekang: [-3.57, 119.78],
  sidrap: [-3.96, 119.95],
  "tana toraja": [-3.2, 119.87],
  "toraja utara": [-3.0, 120.0],
  luwu: [-3.0, 120.5],
  palopo: [-2.99, 120.2],
  "luwu utara": [-2.5, 120.3],
  "luwu timur": [-2.55, 121.0],

  // ── SULTRA ────────────────────────────────────────────────────────────────
  kolaka: [-4.05, 121.6],
  "kolaka utara": [-3.4, 121.5],
  "kolaka timur": [-4.3, 121.8],
  konawe: [-3.85, 122.35],
  "konawe selatan": [-4.3, 122.3],
  "konawe utara": [-3.2, 122.4],
  kendari: [-3.97, 122.51],
  bombana: [-4.7, 122.0],
  buton: [-5.2, 122.6],
  "buton utara": [-4.9, 122.7],
  "buton tengah": [-5.1, 122.4],
  "buton selatan": [-5.5, 122.7],
  baubau: [-5.47, 122.62],
  muna: [-4.95, 122.6],
  "muna barat": [-4.85, 122.4],
  wakatobi: [-5.5, 123.6],

  // ── MALUT ─────────────────────────────────────────────────────────────────
  "halmahera barat": [1.35, 127.65],
  "halmahera utara": [1.8, 127.9],
  "halmahera timur": [0.7, 128.3],
  "halmahera tengah": [0.5, 128.2],
  "halmahera selatan": [-0.8, 127.8],
  morotai: [2.3, 128.5],
  ternate: [0.79, 127.38],
  tidore: [0.72, 127.44],
  "kepulauan sula": [-1.8, 125.5],
  taliabu: [-1.8, 124.8],

  // ── MALUKU ────────────────────────────────────────────────────────────────
  buru: [-3.4, 126.7],
  "buru selatan": [-3.8, 126.5],
  "seram bagian barat": [-3.2, 128.0],
  "seram bagian timur": [-3.05, 130.0],
  ambon: [-3.7, 128.17],
  "maluku tengah": [-3.5, 129.0],
  "maluku tenggara": [-5.65, 132.7],
  "maluku tenggara barat": [-7.95, 132.15],
  tanimbar: [-7.95, 132.15],
  tual: [-5.66, 132.75],
  "kepulauan aru": [-6.25, 134.65],
  "maluku barat daya": [-8.2, 129.75],

  // ── PAPBAR (Papua Barat) ──────────────────────────────────────────────────
  manokwari: [-0.87, 134.08],
  "manokwari selatan": [-1.3, 134.1],
  "pegunungan arfak": [-1.5, 133.5],
  "teluk bintuni": [-2.1, 133.5],
  "teluk wondama": [-2.6, 134.5],
  kaimana: [-3.65, 133.75],
  fakfak: [-2.92, 132.27],
  sorong: [-0.88, 131.25],
  "sorong selatan": [-1.55, 131.3],
  "raja ampat": [-0.5, 130.5],
  tambrauw: [-0.7, 132.5],
  maybrat: [-1.4, 132.2],

  // ── PAPUA ─────────────────────────────────────────────────────────────────
  jayapura: [-2.5, 140.7],
  sarmi: [-1.87, 138.75],
  "mamberamo raya": [-2.5, 137.8],
  "mamberamo tengah": [-3.5, 138.7],
  yapen: [-1.8, 136.3],
  "biak numfor": [-1.0, 136.0],
  keerom: [-3.2, 140.5],
  waropen: [-3.0, 136.4],
  nabire: [-3.37, 135.5],
  paniai: [-3.9, 136.5],
  dogiyai: [-3.9, 136.2],
  deiyai: [-4.0, 136.4],
  "intan jaya": [-3.7, 136.8],
  puncak: [-4.1, 137.2],
  "puncak jaya": [-3.7, 137.5],
  jayawijaya: [-4.05, 138.9],
  "pegunungan bintang": [-4.9, 140.2],
  "lanny jaya": [-3.9, 138.3],
  nduga: [-4.3, 138.2],
  yahukimo: [-4.55, 139.2],
  tolikara: [-3.7, 138.9],
  yalimo: [-4.0, 138.9],

  // ── PAPSEL (Papua Selatan) ────────────────────────────────────────────────
  merauke: [-8.5, 140.4],
  "boven digoel": [-5.8, 140.3],
  mappi: [-6.6, 139.5],
  asmat: [-5.5, 138.5],
  mimika: [-4.55, 136.7],
};

// ────────────────────────────────────────────────────────────────────────────
// Helper utilities
// ────────────────────────────────────────────────────────────────────────────

/** Directional offset magnitudes in degrees. */
const CARDINAL_OFFSET = 0.15;
const DIAGONAL_OFFSET = 0.1;

type Direction =
  | "utara"
  | "selatan"
  | "timur"
  | "barat"
  | "tenggara"
  | "barat laut"
  | "timur laut"
  | "barat daya";

function applyDirectionalOffset(
  lat: number,
  lng: number,
  direction: Direction | null
): { lat: number; lng: number } {
  if (!direction) return { lat, lng };

  switch (direction) {
    case "utara":
      return { lat: lat + CARDINAL_OFFSET, lng };
    case "selatan":
      return { lat: lat - CARDINAL_OFFSET, lng };
    case "timur":
      return { lat, lng: lng + CARDINAL_OFFSET };
    case "barat":
      return { lat, lng: lng - CARDINAL_OFFSET };
    case "tenggara":
      return { lat: lat - DIAGONAL_OFFSET, lng: lng + DIAGONAL_OFFSET };
    case "barat laut":
      return { lat: lat + DIAGONAL_OFFSET, lng: lng - DIAGONAL_OFFSET };
    case "timur laut":
      return { lat: lat + DIAGONAL_OFFSET, lng: lng + DIAGONAL_OFFSET };
    case "barat daya":
      return { lat: lat - DIAGONAL_OFFSET, lng: lng - DIAGONAL_OFFSET };
    default:
      return { lat, lng };
  }
}

/**
 * Extract a directional hint from a ZOM name segment.
 * e.g. "bagian utara" → "utara", "bagian barat laut" → "barat laut"
 */
function extractDirection(text: string): Direction | null {
  const lower = text.toLowerCase();
  if (/bagian barat laut|barat laut/.test(lower)) return "barat laut";
  if (/bagian timur laut|timur laut/.test(lower)) return "timur laut";
  if (/bagian barat daya|barat daya/.test(lower)) return "barat daya";
  if (/bagian tenggara|tenggara/.test(lower)) return "tenggara";
  if (/bagian utara/.test(lower)) return "utara";
  if (/bagian selatan/.test(lower)) return "selatan";
  if (/bagian timur/.test(lower)) return "timur";
  if (/bagian barat/.test(lower)) return "barat";
  return null;
}

/**
 * Normalize a place name for lookup:
 * - lowercase
 * - remove "kab.", "kota", "kabupaten", "kota madya" prefixes/suffixes
 * - remove parenthetical content like "(kota)", "(OKI)"
 * - remove qualifiers: "seluruh", "sebagian", "sebagian besar", "sebagian kecil"
 * - trim whitespace
 */
function normalizeName(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // remove parentheticals
    .replace(
      /\b(kab\.|kabupaten|kotamadya|kota)\b/gi,
      ""
    )
    .replace(/\b(seluruh|sebagian besar|sebagian kecil|sebagian)\b/gi, "")
    .replace(/\bbagian\s+(utara|selatan|timur|barat|tenggara|barat laut|timur laut|barat daya)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Extract province prefix from a ZOM id, e.g. "JATIM-001" → "JATIM".
 */
function extractProvince(zom: ZomEntry): string {
  // ZOM ids may look like "ACEH-001", "JATIM-074", etc.
  return zom.id.split("-")[0].toUpperCase();
}

// ────────────────────────────────────────────────────────────────────────────
// Main exported function
// ────────────────────────────────────────────────────────────────────────────

/**
 * Returns a {lat, lng} coordinate for a given ZOM entry.
 *
 * Algorithm:
 * 1. Split the ZOM name by commas and take the first segment.
 * 2. Extract any directional hint ("bagian utara/selatan/…").
 * 3. Normalize the segment to a plain kabupaten/kota name.
 * 4. Look up in KABUPATEN_COORDS (exact match, then partial match).
 * 5. Apply directional offset if a hint was found.
 * 6. Fall back to PROVINCE_CENTERS if no match is found.
 */
export function getZomCoordinate(zom: ZomEntry): { lat: number; lng: number } {
  const province = extractProvince(zom);

  // Take the first comma-separated segment
  const firstSegment = zom.name.split(",")[0];

  // Extract directional hint before stripping text
  const direction = extractDirection(firstSegment);

  // Normalize to a plain name
  const normalized = normalizeName(firstSegment);

  // --- Exact lookup ---
  const exact = KABUPATEN_COORDS[normalized];
  if (exact) {
    return applyDirectionalOffset(exact[0], exact[1], direction);
  }

  // --- Partial / substring lookup ---
  // Try to find the longest key that is contained in the normalized string,
  // or vice-versa, to handle minor spelling variations.
  let bestKey: string | null = null;
  let bestLen = 0;

  for (const key of Object.keys(KABUPATEN_COORDS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      if (key.length > bestLen) {
        bestLen = key.length;
        bestKey = key;
      }
    }
  }

  if (bestKey) {
    const coords = KABUPATEN_COORDS[bestKey];
    return applyDirectionalOffset(coords[0], coords[1], direction);
  }

  // --- Province-level fallback ---
  const provinceCoords = PROVINCE_CENTERS[province];
  if (provinceCoords) {
    return { lat: provinceCoords[0], lng: provinceCoords[1] };
  }

  // Last-resort: geographic centre of Indonesia
  return { lat: -2.5, lng: 118.0 };
}
