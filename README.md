# sumberterbuka.id — website

> **Sumber Terbuka — Jurnalisme, kode, dan sains yang bisa di-fork.**

Portal berita open source, sains, dan matematika terbuka + hackathon online
bulanan. Situs ini sendiri open source: semua artikel adalah markdown di repo
ini dan bisa dikoreksi siapa saja lewat pull request.

Blueprint lengkap ada di [SPEC.md](./SPEC.md).

## Stack

| Bagian | Pilihan |
|---|---|
| Framework | [Astro 5](https://astro.build) — statis + islands |
| Konten | Markdown di repo (Content Collections), folder `src/content/id/` |
| LaTeX | remark-math + rehype-katex |
| Highlight | Shiki (bawaan Astro) |
| Pencarian | [Pagefind](https://pagefind.app) — index saat build, pencarian di browser |
| Analitik | Plausible (opsional, tanpa cookie) |
| Deploy | Cloudflare Pages / Vercel — auto-deploy saat push ke `main` |

## Mulai

```bash
npm install
npm run dev      # http://localhost:4321
```

Perintah lain:

```bash
npm run build    # build produksi + index Pagefind → dist/
npm run preview  # pratinjau hasil build
npm run og       # regenerasi kartu social share bawaan (public/og-default.png)
```

Catatan: pencarian (`/cari`) hanya berisi index setelah `npm run build` —
di mode dev halamannya tetap terbuka, hasilnya kosong.

## Menulis artikel

Semua konten ada di `src/content/id/<section>/` dengan frontmatter tervalidasi
schema (`src/content.config.ts`):

```yaml
---
title: "Judul artikel (maks ±110 karakter)"
description: "Ringkasan 1-2 kalimat (maks 200 karakter)"
pubDate: 2026-08-16
author: "@handle"      # default: Redaksi Sumber Terbuka
tags: ["topik"]
draft: false          # true = tampil hanya di dev
featured: false       # true = kandidat big story di homepage
mathPreview: '...'    # opsional: LaTeX dirender KaTeX di kartu artikel
links:                # muncul di panel kanan "Terkait"
  - label: "Sumber asli"
    url: "https://…"
---
```

- `/kabarmutu` (kurasi) — wajib `source` + `sourceName`: tautan berita asli.
- `/lab` (breakdown) — opsional `repo`; rumus tulis dengan `$…$` / `$$…$$`.
- `/pustaka` (katalog) — wajib `kind` (`dataset`|`tool`|`repo`), `url`, `license`.

Nama file = URL: `contoh-artikel.md` → `/section/contoh-artikel/`.

## Struktur

```
src/
├── content/id/{kabarmutu,lab,pustaka}/   # konten (locale id, /en/ menyusul)
├── content.config.ts                     # schema frontmatter
├── layouts/                              # BaseLayout (SEO/meta) + ArticleLayout
├── components/                           # header, footer, kartu, TOC, panel, dll.
├── lib/                                  # konfigurasi situs + helper konten
├── pages/                                # rute (/, /kabarmutu/, /lab/, /pustaka/,
│                                         #   /hackathon/, /forks/, /transparansi/,
│                                         #   /content-license/, /cari/, /rss.xml)
└── styles/global.css                     # design system
```

## Kontribusi & koreksi

Baca [CONTRIBUTING.md](./CONTRIBUTING.md) — koreksi artikel bisa langsung dari
tombol **"Edit di GitHub"** di tiap artikel, tanpa setup apa pun. PR direview
1 maintainer, merge ke `main` = auto-deploy. Kode etik:
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Deploy

**Produksi (otomatis):** push ke `main` → GitHub Actions → situs live ±30 detik.

1. Job *build-check* jalan di cloud GitHub (melindungi server dari push yang merusak).
2. Job *deploy* jalan di **self-hosted runner** di home server (label `production`):
   checkout commit terbaru → `docker compose up -d --build` → kontainer berganti.

Situs berjalan sebagai kontainer di belakang Traefik + Cloudflare Tunnel
(infrastruktur di `core/`, network `project_default`) — ingress tunnel sudah
mencakup `sumberterbuka.id` dan `*.sumberterbuka.id`.

### Setup runner (sekali di home server)

```bash
# Debian — gunakan user non-root khusus untuk runner (mis. "runner", atau
# user deployment yang sudah ada seperti "production"), lalu ikuti panduan
# dari GitHub → Settings → Actions → Runners → New self-hosted runner
sudo usermod -aG docker <user>     # izinkan user menjalankan docker compose
# download + config.sh — DAFTARKAN DENGAN LABEL: --labels production
# (label ini tali pengikat dengan runs-on di deploy.yml; tanpanya job
# deploy akan menggantung di antrean selamanya)
./run.sh                           # tes dulu di foreground
sudo ./svc.sh install && sudo ./svc.sh start   # auto-start saat reboot
```

**Keamanan (repo publik):** PR dari fork hanya di-build di runner cloud
(`ci.yml`, `ubuntu-latest`). Self-hosted runner hanya menerima event `push` ke
`main` milik repo asli — dijaga oleh `if: github.repository == '…'` di
`deploy.yml`.

**Catatan deploy pertama:** kalau ada kontainer lama hasil salin manual,
hentikan dulu (`docker compose down` di folder lama) supaya tidak konflik nama
kontainer dengan hasil runner.

**Development lokal:** `npm run dev`, atau jalankan stack penuh dengan
`docker compose up -d --build`.

**Alternatif tanpa server** (Cloudflare Pages/Vercel): output build tetap
`dist/` statis murni — connect repo, preset Astro, build `npm run build`,
output `dist`. Tidak perlu ubah kode.

Variabel lingkungan (opsional, lihat `.env.example`):
`PUBLIC_PLAUSIBLE_DOMAIN`, `PUBLIC_NEWSLETTER_ENDPOINT`,
`PUBLIC_HACKATHON_FORM_URL`.

## Lisensi

- **Konten** (`src/content/`): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.id) — [CONTENT-LICENSE.md](./CONTENT-LICENSE.md)
- **Kode**: [MIT](./LICENSE)
