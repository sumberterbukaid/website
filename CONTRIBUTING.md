# Panduan Kontribusi

Terima kasih ingin berkontribusi di Sumber Terbuka. Ada dua cara utama:

## 1. Mengoreksi / menulis artikel (tanpa setup apa pun)

Semua artikel adalah file markdown di `src/content/id/`. Kamu tidak perlu
memasang apa pun untuk mengoreksinya:

1. Buka artikel di situs, klik tombol **"Edit di GitHub"** di panel kanan.
2. Edit langsung di GitHub (tombol pensil), atau fork repo lalu edit.
3. Ajukan **pull request** dengan deskripsi singkat: apa yang dikoreksi dan sumbernya (kalau ada).
4. PR direview oleh **1 maintainer** — lalu merge ke `main`.
5. Situs ter-deploy otomatis setelah merge. Perubahan hidup dalam ~2 menit.

Jenis koreksi yang sangat kami harapkan: typo, angka/rumus salah, tautan mati,
klarifikasi kalimat yang ambigu, dan penambahan sumber.

## 2. Kontribusi kode (situs ini)

1. Fork repo, clone, lalu:

   ```bash
   npm install
   npm run dev        # http://localhost:4321
   ```

2. Buat branch dari `main`, kerjakan perubahanmu.
3. Pastikan build lolos sebelum push:

   ```bash
   npm run build
   ```

4. Ajukan PR dengan penjelasan apa yang berubah dan alasannya.

## Gaya penulisan

- Bahasa Indonesia yang enak dibaca — formal-santai, tidak berkompromi pada akurasi.
- Klaim faktual mencantumkan sumber (tautan di field `links` atau `source`).
- Untuk artikel matematika: gunakan LaTeX `$...$` (inline) dan `$$...$$` (display).
- Judul maksimal ±110 karakter, deskripsi ±160 karakter (untuk SEO & kartu beranda).

## Kode etik

Baca [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). Berlaku untuk semua kanal
(issue, PR, diskusi, dan acara komunitas termasuk Hack Sprint).
