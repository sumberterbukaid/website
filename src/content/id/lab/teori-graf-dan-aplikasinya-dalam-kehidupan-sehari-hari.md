---
title: "Teori Graf dan Aplikasinya dalam Kehidupan Sehari-hari"
description: "Dari jembatan Königsberg hingga Google Maps — bagaimana titik dan garis sederhana menjadi matematika di balik jejaring sosial, transportasi, dan internet."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: false
tags: ["matematika", "teori-graf", "graph-theory", "aplikasi", "algoritma"]
mathPreview: 'G = (V, E)'
links:
  - label: "Seven Bridges of Königsberg"
    url: "https://en.wikipedia.org/wiki/Seven_bridges_of_K%C3%B6nigsberg"
  - label: "Graph Theory - MIT OpenCourseWare"
    url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/"
  - label: "Dijkstra Algorithm Visualized"
    url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
---

Pernahkah kamu berpikir bahwa peta rute Gojek, daftar teman di Instagram, jadwal mata kuliah, dan bahkan struktur molekul obat pada dasarnya adalah objek matematika yang sama?

Objek itu disebut graf. Dan teori yang mempelajarinya — teori graf — adalah salah satu cabang matematika paling visual dan paling dekat dengan kehidupan sehari-hari, meskipun namanya terdengar abstrak.

Secara formal, graf didefinisikan sangat sederhana:

$$ G = (V, E) $$

di mana $V$ adalah himpunan simpul (vertices) dan $E$ adalah himpunan sisi (edges) yang menghubungkan sepasang simpul. Itu saja. Titik dan garis.

Dari definisi sesederhana itu, lahir algoritma yang mengatur dunia modern.

## 1. Kelahiran teori graf: teka-teki jembatan yang tidak bisa dipecahkan

Teori graf lahir pada 1736 bukan di laboratorium, tapi di sebuah kota bernama Königsberg (sekarang Kaliningrad, Rusia). Kota itu dibelah oleh sungai Pregel dengan dua pulau di tengahnya, dan ada tujuh jembatan yang menghubungkan empat daratan.

Warga bertanya: bisakah kita berjalan-jalan melewati ketujuh jembatan tepat satu kali dan kembali ke titik awal?

Leonhard Euler, matematikawan terbesar pada masanya, membuktikan bahwa itu mustahil. Caranya jenius: ia mengabaikan bentuk pulau, panjang jembatan, dan semua detail geografis, dan hanya menyisakan abstraksi:

$$ V = \{A, B, C, D\} \text{ (empat daratan)} $$

$$ E = \{7 \text{ jembatan sebagai garis}\} $$

Euler menunjukkan bahwa untuk bisa melewati semua sisi tepat satu kali (yang kini disebut Sirkuit Euler), setiap simpul harus memiliki derajat genap — jumlah sisi yang masuk dan keluar harus genap. Karena di Königsberg semua simpul berderajat ganjil, sirkuit itu tidak ada.

Pembuktian ini adalah kelahiran teori graf. Euler menemukan bahwa untuk banyak masalah, yang penting bukan jarak atau bentuk, tapi konektivitas: siapa terhubung dengan siapa.

Syarat Sirkuit Euler yang ditemukan Euler:

$$ \text{Graf memiliki sirkuit Euler} \iff \text{Graf terhubung dan } \forall v \in V, \deg(v) \equiv 0 \pmod{2} $$

## 2. Jenis-jenis graf yang kamu pakai setiap hari

### a. Graf berbobot: fondasi Google Maps

Ketika kamu membuka Google Maps dan mencari rute tercepat dari Surabaya ke Malang, peta itu adalah graf berbobot.

Setiap persimpangan adalah simpul $v \in V$, setiap jalan adalah sisi $e \in E$, dan setiap sisi memiliki bobot $w(e)$ — bisa berupa jarak, waktu tempuh, atau biaya tol.

Masalahnya menjadi: cari lintasan dengan total bobot minimum dari $s$ ke $t$:

$$ \min_{P: s \to t} \sum_{e \in P} w(e) $$

Algoritma yang menyelesaikannya adalah Algoritma Dijkstra (1956) yang ditemukan oleh Edsger Dijkstra dalam 20 menit sambil minum kopi. Idenya: selalu perluas simpul dengan jarak sementara terkecil.

$$ d(v) = \min(d(v), d(u) + w(u,v)) $$

Algoritma ini dijalankan miliaran kali sehari di seluruh dunia — di Maps, di routing paket internet (OSPF), dan di game untuk mencari jalur musuh.

### b. Graf sosial: kamu adalah simpul

Instagram-mu adalah graf raksasa. Kamu adalah simpul $v$. Jika kamu follow @erfiansy dan dia follow balik, ada sisi tak berarah di antara kalian. Jika hanya satu arah, itu graf berarah (directed graph).

Dari sini lahir konsep-konsep penting:

**Derajat (degree):** Jumlah temanmu. $\deg(v)$ tinggi berarti kamu influencer.

**Jarak (distance):** Berapa langkah untuk menghubungkanmu dengan orang lain? Eksperimen "six degrees of separation" menunjukkan jarak rata-rata antar manusia di Facebook hanya $3.5$ langkah pada 2016.

**Clustering coefficient:** Seberapa banyak teman-temanmu berteman satu sama lain. Jika tinggi, kamu berada di komunitas yang erat.

**PageRank:** Algoritma yang membuat Google mengalahkan Yahoo pada 1998. Idenya: sebuah website penting jika website penting lain menautkannya. Secara matematis, PageRank $PR(v)$ adalah:

$$ PR(v) = \frac{1-d}{N} + d \sum_{u \to v} \frac{PR(u)}{\text{outdeg}(u)} $$

di mana $d \approx 0.85$ adalah damping factor. Ini adalah eigenvector dari matriks adjacency graf web.

### c. Graf bipartit: masalah penjadwalan

Pernahkah kampus harus menjadwalkan ujian agar tidak ada mahasiswa yang punya dua ujian bersamaan? Itu adalah pewarnaan graf.

Buat graf di mana simpul adalah mata kuliah, dan sisi menghubungkan dua mata kuliah jika ada mahasiswa yang mengambil keduanya. Maka jadwal ujian adalah pemberian warna pada simpul sehingga tidak ada dua simpul bertetangga memiliki warna sama. Jumlah warna minimum yang dibutuhkan adalah bilangan kromatik $\chi(G)$.

$$ \chi(G) = \min \{k : G \text{ dapat diwarnai dengan } k \text{ warna}\} $$

Masalah yang sama muncul saat memberi frekuensi radio, mendaftarkan sidang skripsi, hingga menyusun jadwal liga sepak bola.

## 3. Tiga algoritma graf yang mengubah dunia

**1. BFS dan DFS — Cara menjelajahi dunia**

Breadth-First Search (BFS) menjelajah lapis demi lapis, seperti riak air. Depth-First Search (DFS) menjelajah sedalam mungkin sebelum kembali. Keduanya memiliki kompleksitas $O(V + E)$.

BFS digunakan untuk menemukan jarak terpendek di graf tak berbobot (misal: berapa langkah minimal dari akunmu ke akun @nasa?). DFS digunakan untuk mendeteksi siklus, misalnya untuk mendeteksi apakah ada dependensi melingkar pada package npm.

**2. Minimum Spanning Tree — Menghubungkan semua dengan biaya minimal**

Bagaimana PLN menghubungkan semua desa dengan kabel sepanjang total minimum? Atau bagaimana membangun jaringan jalan tol yang menghubungkan semua kota di Jawa dengan biaya minimal? Itu adalah Minimum Spanning Tree (MST).

Algoritma Prim dan Kruskal menemukan pohon dengan total bobot minimum:

$$ \min_{T \subseteq E, T \text{ pohon merentang}} \sum_{e \in T} w(e) $$

**3. Aliran Maksimum — Seberapa banyak yang bisa mengalir?**

Berapa banyak air yang bisa dialirkan dari waduk ke kota melalui jaringan pipa dengan kapasitas berbeda? Atau berapa banyak data yang bisa lewat di jaringan internet? Ini adalah masalah Max-Flow Min-Cut yang diselesaikan oleh algoritma Ford-Fulkerson:

$$ \text{max flow} = \text{min cut} $$

Nilai aliran maksimum sama dengan kapasitas total dari potongan minimum yang memisahkan sumber dan tujuan.

## 4. Eksperimen: buat graf kehidupanmu sendiri

Kamu bisa mencoba ini dalam 15 menit:

1.  Ambil 10 teman terdekatmu. Buat mereka sebagai simpul $V = \{v_1, ..., v_{10}\}$.

2.  Hubungkan $v_i$ dan $v_j$ jika mereka saling kenal (sudah pernah bertemu).

3.  Hitung derajat masing-masing: siapa yang paling terhubung?

4.  Apakah grafmu terhubung? Atau ada yang terisolasi?

5.  Coba cari clique terbesar — kelompok di mana semua orang saling kenal. Itu adalah komunitas intinya.

Kamu baru saja melakukan analisis jaringan sosial dasar, teknik yang dipakai untuk mendeteksi komunitas, penyebaran hoaks, hingga penelusuran kontak saat pandemi.

Teori graf mengajarkan satu hal yang elegan: dunia yang terlihat rumit — dengan miliaran jalan, pertemanan, dan kabel — pada dasarnya hanyalah titik dan garis. Dan dengan memahami bagaimana titik dan garis itu terhubung, kita bisa menjawab pertanyaan yang paling praktis: jalan tercepat, teman terdekat, dan cara paling efisien untuk menghubungkan segalanya.

Dari tujuh jembatan di Königsberg yang tidak bisa dilewati, lahir matematika yang kini menunjukkan jalan pulangmu setiap hari.
