# SPEC — sumberterbuka.id

Situs portal berita open source dan hackathon online. Tidak terbatas pada topik teknologi dan komputer; mencakup juga matematika dan sains terbuka. Dikerjakan dari Surabaya, dibangun secara terbuka sejak hari pertama.

> Status: v0.4 — semua keputusan implementasi terkunci: penulis solo, konten dulu, bahasa id-ID. Domain `sumberterbuka.id` dan org GitHub `sumberterbukaid` sudah diamankan. Hanya tanggal Hack Sprint #0 yang menyusul (bagian 8). Keputusan bertanda **[baku]** dikunci sebagai arah implementasi.

## 1. Konsep & Positioning

Bukan "media berita" biasa — posisinya **The Guardian-nya open knowledge Indonesia**.

**Tagline:** Sumber Terbuka — Jurnalisme, kode, dan sains yang bisa di-fork.

Pembeda dari media lain:
- Semua artikel punya versi GitHub-nya; pembaca bisa mengoreksi lewat pull request.
- Semua data dan visualisasi terbuka — bisa diunduh, di-fork, diremix.
- Bukan cuma menulis berita; pengunjung diajak membuat sesuatu lewat hackathon.

Tiga pilar utama: **kode & open source**, **hackathon**, **matematika & sains terbuka**.

Prinsip yang tidak boleh dilanggar oleh keputusan teknis apa pun:
1. Situs ini sendiri open source — repo publik, bisa dilihat dan dikontribusi publik.
2. Konten = kode. Artikel disimpan sebagai markdown di repo, bukan di CMS eksternal, supaya etos "bisa di-fork" benar-benar berlaku dua arah.
3. Klaim "terbuka" harus punya dasar legal — semua materi berlisensi eksplisit (bagian 6).

## 2. Arsitektur Informasi

Bukan kategori klasik ("Nasional", "Teknologi"), tapi struktur berbasis fungsi:

| Jalur | Isi |
|---|---|
| `/kabarmutu` | Kurasi berita open source global — ringkasan + tautan, bukan copy-paste |
| `/lab` | Tutorial, paper breakdown, eksperimen matematika/sains |
| `/pustaka` | Dataset, tools, repo open source buatan Indonesia |
| `/hackathon` | Pusat informasi hackathon online |

**`/forks` adalah fitur lintas artikel, bukan section konten:**
- Setiap artikel punya tombol **"Edit di GitHub"** yang menuju file markdown sumbernya.
- Halaman `/forks` dijadikan **changelog komunitas**: daftar koreksi dan PR pembaca yang diterima. Fitur ini belum ada di media mana pun dan menjadi bukti nyata kredibilitas.

**Alur koreksi (moderasi PR):**
- Semua PR koreksi butuh **1 review maintainer** sebelum merge; setelah merge ke `main`, situs di-update dengan rebuild kontainer di mesin host (`docker compose up -d --build`).
- Maintainer awal: pemilik repo; ditambah seiring komunitas tumbuh.
- `CONTRIBUTING.md` (cara mengoreksi artikel) dan `CODE_OF_CONDUCT.md` disiapkan sejak hari pertama.

## 3. Tech Stack

### Keputusan baku

- **Frontend: Astro [baku]** — situs statis + islands untuk interaktivitas (LaTeX, visualisasi). Cepat, SEO-friendly, markdown native, hosting murah. Next.js tidak dipakai untuk situs utama; baru relevan untuk aplikasi hackathon fase 2.
- **Konten: markdown di repo [baku]** (Astro Content Collections). Ghost/Sanity **ditolak** karena konten yang hidup di database eksternal membuat "Edit di GitHub" hanya bisa satu arah — bertentangan dengan pilar utama. Jika kelak banyak penulis non-teknis, tambahkan editor visual berbasis git (Decap/Tina) di atas repo, bukan memindahkan konten ke CMS.
- **Hosting: self-host via Cloudflare Tunnel + Traefik [baku]** — kontainer Docker di mesin sendiri (infrastruktur di `core/`), di-expose lewat tunnel Cloudflare tanpa IP publik; HTTPS ditangani Cloudflare edge. Deploy = rebuild kontainer (`docker compose up -d --build`) di mesin host, atau CI build saat PR merge. Cloudflare Pages/Vercel tetap opsi cadangan tanpa ubah kode (output statis `dist/`).
- **Repo publik wajib [baku]:** `github.com/sumberterbukaid/website` (org sudah diamankan). Ini kredibilitas terbesar proyek ini.
- **Penulis: solo [baku]** — pemilik menulis markdown langsung tanpa CMS. Decap CMS baru dipasang jika muncul kontributor non-teknis tetap; jangan memasangnya lebih awal.
- **Fokus MVP: konten dulu [baku]** — situs konten jalan lebih dulu, hackathon hanya halaman statis di fase 1. Tanpa 15 artikel pilar, halaman hackathon tidak punya alasan untuk dikunjungi.
- **Bahasa: Indonesia (id-ID) [baku]** — 100% Indonesia saat launch, tanpa bilingual. Struktur rute disiapkan untuk i18n sejak awal (konten di bawah `/id/`), sehingga menambah `/en/` nanti tidak perlu refactor.

### Dukungan teknis

- **LaTeX**: KaTeX via remark-math/rehype-katex — wajib sejak MVP (`$E = mc^2$`).
- **Blok kode**: syntax highlighting (Shiki) sejak MVP. **Runnable code ditunda**: Sandpack hanya mendukung JS/web, artikel sains berbasis Python tidak terbantu, dan Pyodide terlalu berat di mobile. Jika diaktifkan nanti, dibatasi ke JS dulu.
- **Search**: Pagefind — gratis, index dibangun saat build, cocok untuk situs statis.
- **Analytics**: Plausible atau Umami, bukan Google Analytics — konsisten dengan etos terbuka.
- **Social card / og:image**: generator otomatis saat build (astro-og-image / satori) untuk Twitter/X, LinkedIn, dan WhatsApp — share tanpa gambar itu kehilangan klik, dan WhatsApp adalah jalur penyebaran utama di Indonesia.
- **Newsletter**: form pendaftaran email terpasang sejak hari-1 (Buttondown atau sejenis), meski edisi pertama menyusul.
- **Integrasi komunitas**: GitHub (PR koreksi) + Discord (diskusi) — tanpa backend sendiri di fase MVP.

## 4. Design System

Nuansa **majalah sains + dokumentasi kode**, bukan portal berita generik.

- **Tipografi**: serif untuk judul (Newsreader / Fraunces), sans bersih untuk body (Inter / Plus Jakarta Sans).
- **Warna**: background putih tulang, aksen hijau terminal `#00C853`.
  - Aksesibilitas: `#00C853` di atas putih **gagal WCAG untuk teks**. Gunakan hanya untuk aksen dan tombol besar; link serta teks kecil memakai varian lebih gelap (mis. `#00A344` atau `#0B8A42`).

### Acuan tampilan per halaman

- **Homepage** = Linear + Katadata: satu big story di atas (mis. breakdown paper terbaru), grid tiga kolom di bawah untuk Lab, Pustaka, dan Kabar.
- **Halaman artikel** = Tirto.id + GitHub README: daftar isi di kiri, artikel di tengah, panel kanan berisi "Edit di GitHub", "Dataset terkait", "Diskusi".
- **Halaman hackathon** = Devpost + Framer: clean, ada countdown, hadiah, juri, dan galeri submission.

## 5. Hackathon Online — Mesin Komunitas

Format signature: **Sumber Terbuka Hack Sprint** — hackathon online 2 minggu, tiap bulan tema berbeda:
- Bulan 1: Visualisasi Data Sains Indonesia
- Bulan 2: Kalkulator Matematika Open Source
- Bulan 3: Tools untuk Guru Sains

Alur: pengumuman di `/hackathon` → daftar → kerja di repo masing-masing → submit → voting + juri → pemenang di-feature di homepage.

**Dipecah dua fase — jangan jadi monolit dengan situs berita:**

| | Fase 1 (MVP, hari 1–60) | Fase 2 (setelah Hack Sprint #0) |
|---|---|---|
| Bentuk | Halaman statis di situs utama | Aplikasi terpisah `hack.sumberterbuka.id` |
| Pendaftaran | Formulir eksternal (Tally/Google Form) | GitHub OAuth |
| Submission | Link repo via formulir, dikurasi manual | Sistem ala Devpost sederhana: submit link repo, otomatis ter-list |
| Voting | Juri + kurasi internal | Voting publik **dengan anti-abuse** (wajib login GitHub, rate-limit) |

Hadiah tidak harus uang besar: beasiswa, VPS, atau feature di newsletter.

## 6. Lisensi (wajib sebelum launch)

Klaim "terbuka" butuh dasar legal eksplisit:
- **Artikel**: CC BY-SA 4.0 — boleh diremix dengan atribusi + share-alike.
- **Kode situs**: MIT.
- **Dataset di `/pustaka`**: CC0 atau ODbL, dicantumkan per item.

Footer situs dan file LICENSE di repo memuat ketiganya. Tanpa lisensi, status legal fork jadi abu-abu — padahal itu nilai jual utamanya.

## 7. Roadmap 90 Hari

**Hari 1–30 — MVP:**
- Setup repo publik `sumberterbukaid/website` + deploy pertama (CI deploy on push).
- 15 artikel pilar (5 open source, 5 sains, 5 breakdown matematika) dengan satu template artikel yang sempurna: TOC, KaTeX, tombol Edit di GitHub.
- Halaman `/hackathon` statis + form newsletter sudah terpasang.

**Hari 31–60:**
- Edisi pertama newsletter mingguan "Kabar Terbuka".
- Hack Sprint #0 internal (teman kampus / komunitas Surabaya) — memakai formulir fase 1.
- Halaman `/forks` (changelog komunitas) aktif begitu ada PR koreksi pertama.

**Hari 61–90:**
- Kolaborasi komunitas: Python ID, BlankOn, Kelas Terbuka, komunitas olimpiade matematika.
- Evaluasi: mulai bangun aplikasi hackathon fase 2 jika Hack Sprint #0 menunjukkan minat yang cukup.

Posisi dari Surabaya adalah peluang: menjadi pusat open science di luar Jakarta yang belum ada yang isi.

## 8. Pertanyaan Terbuka

1. **Tanggal Hack Sprint #0** — belum ditentukan. Tidak memblokir MVP: halaman `/hackathon` fase 1 menampilkan "akan diumumkan"; tenggat formulir pendaftaran diset saat tanggal ditetapkan.

## 9. Definisi Selesai (Definition of Done) MVP

Launch saat checklist ini tercentang — tidak menunggu sempurna:

- [x] `sumberterbuka.id` bisa diakses publik via HTTPS — live via Cloudflare Tunnel + Traefik (2026-08-16)
- [x] Lighthouse ≥ 95 (performance, aksesibilitas, SEO) — homepage 99/96/100/100, halaman artikel 98/96/100/100 (dengan preload font)
- [ ] 15 artikel pilar live — tombol "Edit di GitHub" mengarah ke file sumber yang benar (mekanisme ✓, baru 1/15 artikel)
- [x] LaTeX ter-render benar di artikel matematika (KaTeX) — di halaman artikel dan kartu
- [ ] Form newsletter terpasang dan menyimpan email (form ✓ terpasang; penyimpanan menunggu `PUBLIC_NEWSLETTER_ENDPOINT` / Buttondown)
- [x] Halaman `/hackathon` statis live dengan info Hack Sprint #0
- [x] LICENSE (MIT), lisensi CC BY-SA di footer, `CONTRIBUTING.md` + `CODE_OF_CONDUCT.md` ada di repo
- [x] Halaman `/transparansi` placeholder live — laporan status proyek + slot kebijakan monetisasi (AdSense nanti)
