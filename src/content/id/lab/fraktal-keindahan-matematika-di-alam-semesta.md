---
title: "Fraktal: Keindahan Matematika di Alam Semesta"
description: "Mengenal geometri fraktal — ketika dimensi tidak lagi bulat, sebuah pola kecil mengulang dirinya hingga tak hingga, dari petir, paru-paru, hingga galaksi."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: true
tags: ["matematika", "fraktal", "geometri", "mandelbrot", "alam-semesta"]
mathPreview: 'D = \frac{\log N}{\log (1/r)} \notin \mathbb{N}'
links:
  - label: "Mandelbrot Set Explorer"
    url: "https://www.mandelbrot.io/"
  - label: "Fractals - Yale University"
    url: "https://users.math.yale.edu/public_html/People/frame/Fractals/"
  - label: "The Fractal Geometry of Nature - Mandelbrot"
    url: "https://en.wikipedia.org/wiki/The_Fractal_Geometry_of_Nature"
---

Coba ukur panjang garis pantai Pulau Jawa. Kamu buka peta skala 1:1.000.000 dan mendapat angka 2.500 km. Lalu kamu pakai peta yang lebih detail 1:100.000, kamu mengukur setiap lekukan kecil teluk dan tanjung, dan hasilnya menjadi 3.200 km. Kamu turun ke pantai dengan meteran, mengukur setiap batu dan cekungan pasir, hasilnya menjadi 4.800 km dan terus bertambah.

Berapa panjang sebenarnya garis pantai itu?

Pertanyaan ini yang diajukan Lewis Fry Richardson pada 1961 dan dipopulerkan oleh Benoit Mandelbrot pada 1967 dalam makalah berjudul "How Long Is the Coast of Britain?". Jawabannya mengganggu: panjangnya mendekati tak hingga jika alat ukurmu semakin kecil. Karena garis pantai bukan garis lurus satu dimensi. Ia adalah sesuatu di antara garis dan bidang.

Sesuatu itu adalah fraktal.

## 1. Definisi: ketika dimensi bukan lagi bilangan bulat

Geometri yang kita pelajari di sekolah adalah geometri Euclid: titik berdimensi $0$, garis berdimensi $1$, bidang berdimensi $2$, ruang berdimensi $3$. Semua bulat.

Fraktal menghancurkan ke-bulat-an itu. Sebuah fraktal adalah objek yang memiliki dua sifat:

**Self-similarity:** Bagian kecilnya mirip dengan keseluruhannya. Jika kamu zoom, kamu akan melihat pola yang sama berulang.

**Dimensi fraktal yang tidak bulat:** Dimensinya bukan 1, 2, atau 3, tapi misalnya $1.26$ atau $1.58$.

Bagaimana dimensi bisa tidak bulat? Kita gunakan definisi dimensi Hausdorff yang disederhanakan. Jika sebuah objek dapat dibagi menjadi $N$ salinan kecil dari dirinya sendiri, di mana setiap salinan diperkecil dengan faktor skala $r$ (misalnya $r=1/3$), maka dimensi fraktalnya adalah:

$$ D = \frac{\log N}{\log(1/r)} $$

Mari kita coba pada tiga objek klasik:

**Garis:** Dibagi menjadi $N=3$ bagian, masing-masing diperkecil $r=1/3$. Maka $D = \log 3 / \log 3 = 1$. Masuk akal.

**Persegi:** Dibagi menjadi $N=9$ persegi kecil, masing-masing $r=1/3$. Maka $D = \log 9 / \log 3 = 2$. Masuk akal.

**Segitiga Sierpinski:** Ambil segitiga, bagi menjadi 4 segitiga kecil, buang yang di tengah, sisa 3. Jadi $N=3$, $r=1/2$. Maka:

$$ D = \frac{\log 3}{\log 2} \approx 1.58496... $$

Dimensinya $1.58$! Ia lebih dari garis (1) tapi belum sepenuhnya mengisi bidang (2). Ia hidup di antaranya.

Inilah inti fraktal: dimensi yang retak — dalam bahasa Latin *fractus* yang menjadi asal kata fractal yang diciptakan Mandelbrot pada 1975.

## 2. Tiga fraktal legendaris yang bisa kamu buat di kertas

### a. Himpunan Cantor (1883) — Debu yang tak hilang

Ambil garis $[0,1]$. Buang sepertiga tengahnya $(\frac{1}{3}, \frac{2}{3})$. Sisa 2 segmen. Dari masing-masing segmen, buang lagi sepertiga tengahnya. Ulangi hingga tak hingga.

Berapa panjang total yang tersisa? Pada langkah pertama kamu buang $1/3$, langkah kedua buang $2 \cdot 1/9$, langkah ketiga $4 \cdot 1/27$, dan seterusnya. Total panjang yang dibuang adalah deret geometri:

$$ \sum_{n=0}^{\infty} \frac{2^n}{3^{n+1}} = 1 $$

Kamu membuang panjang total $1$, dari garis yang panjangnya $1$. Tapi apakah tidak ada yang tersisa? Ajaibnya, masih ada titik-titik yang tersisa — tak terhingga banyaknya, sebanyak bilangan real — tapi total panjangnya $0$. Dimensinya:

$$ D = \frac{\log 2}{\log 3} \approx 0.6309 $$

Sebuah debu dengan dimensi $0.63$.

### b. Kurva Koch (1904) — Kepingan salju dengan keliling tak hingga

Ambil garis, bagi jadi 3, ganti bagian tengahnya dengan dua sisi segitiga sama sisi. Sekarang panjangnya dari $1$ menjadi $4/3$. Ulangi untuk setiap segmen. Setelah $n$ iterasi, panjangnya adalah $(4/3)^n$.

Ketika $n \to \infty$:

$$ L_n = \left(\frac{4}{3}\right)^n \to \infty $$

Kelilingnya tak hingga! Tapi luas yang dikurungnya tetap terbatas. Jika kamu mulai dari segitiga, kamu mendapat Koch Snowflake — bentuk yang sering muncul sebagai model pulau.

Dimensinya $D = \log 4 / \log 3 \approx 1.2618$.

### c. Himpunan Mandelbrot — Semesta dalam satu rumus

Ini adalah fraktal paling terkenal, lahir dari rumus paling sederhana yang bisa ditulis:

$$ z_{n+1} = z_n^2 + c $$

di mana $z_n$ dan $c$ adalah bilangan kompleks. Mulai dengan $z_0 = 0$, iterasikan. Jika $|z_n|$ tidak pernah meledak hingga tak hingga, maka $c$ termasuk dalam Himpunan Mandelbrot.

Aturan sesederhana itu menghasilkan gambar yang ketika kamu zoom, kamu akan menemukan mini-Mandelbrot, spiral, dan filamen yang tak pernah sama, hingga kedalaman tak hingga. Pada 2026, manusia sudah melakukan zoom hingga perbesaran $10^{1000}$ dan masih menemukan struktur baru.

Himpunan Mandelbrot adalah bukti bahwa kompleksitas tak hingga bisa lahir dari aturan yang sangat sederhana — sebuah pelajaran penting tentang alam semesta.

## 3. Kemunculan di alam: alam adalah seniman fraktal

Mengapa alam suka fraktal? Karena fraktal adalah solusi paling efisien untuk masalah distribusi.

**Paru-paru manusia:** Untuk memasukkan luas permukaan sebesar lapangan tenis ($70 m^2$) ke dalam volume dada, paru-paru bercabang secara fraktal. Bronkus bercabang menjadi bronkiolus, bercabang lagi menjadi alveoli. Pola percabangannya memiliki dimensi sekitar $D \approx 2.97$ — hampir mengisi ruang 3D sepenuhnya, tapi dengan struktur yang memungkinkan aliran udara efisien. Jika paru-paru adalah bidang 2D biasa, kamu tidak akan bisa bernapas.

**Pohon, petir, dan sungai:** Sebuah pohon harus mendistribusikan air dari akar ke daun dengan energi minimal. Solusi optimalnya adalah percabangan fraktal. Petir mencari jalur dengan resistansi minimal di udara — hasilnya adalah Lichtenberg figure fraktal. Sistem sungai dari hulu ke hilir mengikuti pola yang sama, yang bisa dimodelkan dengan dimensi $D \approx 1.1 - 1.3$.

**Garis pantai, awan, dan pegunungan:** Mandelbrot sendiri menulis buku *The Fractal Geometry of Nature* pada 1982 yang menunjukkan bahwa awan bukan bola, pegunungan bukan kerucut, dan garis pantai bukan garis lurus. Mereka semua adalah fraktal. Gunung memiliki dimensi sekitar $D \approx 2.2$.

Alam tidak menggunakan penggaris Euclid. Alam menggunakan algoritma rekursif fraktal.

## 4. Rumus untuk mengukur keindahan: dari dimensi ke aplikasi

Memahami fraktal tidak hanya untuk keindahan. Dimensi fraktal kini dipakai untuk mengukur hal-hal yang sebelumnya tidak terukur:

-   Dalam kedokteran, dimensi fraktal dari pembuluh darah retina dapat memprediksi risiko stroke. Pembuluh yang sehat memiliki $D \approx 1.7$, yang sakit menyimpang dari itu.
-   Dalam seismologi, distribusi gempa bumi mengikuti pola fraktal.
-   Dalam keuangan, pergerakan harga saham dimodelkan Mandelbrot dengan model fraktal, bukan dengan random walk biasa, karena pasar memiliki self-similarity di berbagai skala waktu.
-   Dalam kompresi gambar, algoritma fraktal memungkinkan kompresi dengan rasio tinggi dengan menyimpan aturan iterasi, bukan piksel.

Untuk bereksperimen, kamu bisa mencoba menghitung dimensi fraktal dari sebuah foto garis pantai dengan metode box-counting: tutupi foto dengan kotak-kotak berukuran $r$, hitung berapa kotak $N(r)$ yang mengandung garis pantai, lalu plot $\log N(r)$ vs $\log(1/r)$. Gradiennya adalah dimensinya.

Fraktal mengajarkan kita sebuah paradoks yang indah: bahwa ketidakteraturan yang kita lihat di alam — awan yang bergerumbul, pantai yang berlekuk, pohon yang bercabang — sebenarnya diatur oleh aturan yang sangat sederhana yang diulang tanpa henti.

Seperti yang ditulis Mandelbrot:

> "Awan bukan bola, pegunungan bukan kerucut, garis pantai bukan lingkaran, dan kulit kayu tidak halus, begitu pula petir tidak bergerak dalam garis lurus."

Dan untuk memahami itu semua, kita butuh geometri baru. Geometri fraktal.

Dari satu rumus $z_{n+1}=z_n^2 + c$ lahir semesta tak hingga. Dari satu garis yang dibagi tiga lahir kepingan salju dengan keliling tak hingga. Dari kekosongan $0$ yang kita bahas sebelumnya, lahir dimensi $0.63$.

Matematika, pada akhirnya, adalah seni melihat keabadian dalam sebuah pengulangan.
