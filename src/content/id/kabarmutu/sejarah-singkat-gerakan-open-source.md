---
title: "Sejarah Singkat Gerakan Open Source: Dari Linux hingga Sekarang"
description: "Menelusuri perjalanan ide kebebasan software — dari kultur berbagi di MIT, perang ideologi free software, hingga dominasi open source di era cloud dan AI."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: false
tags: ["open-source", "sejarah", "linux", "free-software", "teknologi"]
mathPreview: '1970 \rightarrow 2026\ \text{perjalanan kolaborasi}'
links:
  - label: "GNU Project History"
    url: "https://www.gnu.org/gnu/thegnuproject.html"
  - label: "The Cathedral and the Bazaar"
    url: "http://www.catb.org/~esr/writings/cathedral-bazaar/"
  - label: "Linux Kernel History"
    url: "https://www.linuxfoundation.org/blog/a-brief-history-of-linux"
---

Jika hari ini kita bisa menjalankan server dengan Linux gratis, deploy aplikasi dengan Kubernetes, dan bereksperimen dengan model AI open source, itu bukan kebetulan. Itu adalah hasil dari perjalanan ide yang panjang, penuh konflik, idealisme, dan kompromi bisnis selama lebih dari 50 tahun.

Sejarah open source bukan sekadar sejarah teknologi. Ia adalah sejarah tentang bagaimana sebuah komunitas mempertahankan ide bahwa pengetahuan harus tetap dapat dibagikan.

## 1. Era keemasan berbagi: 1970-an

Pada awal 1970-an, software belum dianggap sebagai produk komersial yang terpisah. Ketika kamu membeli komputer PDP-10 dari DEC, kamu mendapat semua source code sistem operasinya.

Di lab-lab seperti Artificial Intelligence Lab di MIT, kultur berbagi adalah norma. Jika kamu memperbaiki sebuah driver printer, kamu akan menempelkan kode perbaikanmu di papan pengumuman agar orang lain bisa memakainya. Hacker pada masa itu berarti seseorang yang senang membongkar sistem untuk memahami dan memperbaikinya, bukan peretas jahat.

Richard Stallman, seorang programmer di MIT saat itu, mengenang bahwa tidak ada yang mengunci pintu. Jika kamu butuh kode, kamu tinggal meminta.

Kultur inilah yang menjadi cetak biru moral bagi semua yang terjadi setelahnya.

## 2. Pagar mulai dibangun: 1980-an dan lahirnya Free Software

Memasuki 1980-an, industri berubah. Perusahaan mulai menyadari bahwa software jauh lebih menguntungkan daripada hardware. Source code mulai dikunci sebagai rahasia dagang. Perjanjian non-disclosure (NDA) menjadi standar.

Peristiwa yang mengguncang Stallman adalah ketika ia tidak bisa memperbaiki driver printer Xerox di MIT karena source code-nya tidak diberikan. Ia tidak bisa membantu komunitasnya sendiri.

Frustrasi itu memicu gerakan perlawanan. Pada September 1983, Stallman mengumumkan Proyek GNU (GNU's Not Unix) — sebuah upaya ambisius untuk membangun ulang sistem operasi mirip Unix yang sepenuhnya bebas. Pada 1985, ia mendirikan Free Software Foundation (FSF).

Stallman merumuskan definisi Free Software dengan 4 kebebasan yang sangat ideologis: kebebasan menjalankan, mempelajari, memodifikasi, dan mendistribusikan. Untuk menjamin kebebasan itu tidak dicabut, ia menciptakan lisensi yang jenius dan provokatif: GPL (General Public License). GPL menggunakan hukum hak cipta itu sendiri untuk memastikan bahwa turunan dari software bebas harus tetap bebas — sebuah konsep yang disebut copyleft.

Pada akhir 80-an, proyek GNU sudah hampir lengkap: mereka punya compiler (GCC), editor (Emacs), shell (Bash), tapi masih kekurangan satu komponen vital: kernel — jantung dari sistem operasi.

## 3. Bagian yang hilang dilengkapi: 1991 dan ledakan Linux

Pada 21 Agustus 1991, seorang mahasiswa ilmu komputer berusia 21 tahun dari Universitas Helsinki, Finlandia, bernama Linus Torvalds, memposting pesan yang kini legendaris di newsgroup `comp.os.minix`:

> "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones."

Ia menyebutnya Linux. Ia merilis kernel versinya di bawah lisensi GPL.

Yang terjadi selanjutnya adalah ledakan kolaborasi yang belum pernah ada sebelumnya. Berkat internet yang mulai menyebar, programmer dari seluruh dunia mulai mengirim patch, driver, dan perbaikan via email. Model pengembangannya sangat berbeda dengan model katedral yang tertutup dan hierarkis.

Eric S. Raymond, seorang hacker veteran, menulis esai paling berpengaruh tentang fenomena ini pada 1997: "The Cathedral and the Bazaar". Ia menggambarkan model GNU/FSF sebagai katedral yang dibangun dengan hati-hati oleh arsitek ahli, sementara model Linux adalah bazaar — pasar yang riuh, berisik, tapi sangat efisien dalam menemukan bug dan berinovasi karena "given enough eyeballs, all bugs are shallow."

Pada 1992, kombinasi GNU dan Linux akhirnya melahirkan sistem operasi lengkap yang benar-benar bebas: GNU/Linux.

## 4. Rebranding untuk dunia bisnis: 1998

Meskipun secara teknis sukses, istilah "free software" punya masalah pemasaran. Di Amerika, kata "free" ambigu — bisa berarti "bebas" tapi juga "gratisan". Bagi dunia korporat, istilah itu terdengar anti-bisnis dan terlalu ideologis.

Momen kritis terjadi pada 1998 ketika Netscape merilis source code browser mereka (yang kemudian menjadi Mozilla Firefox). Ini adalah perusahaan besar pertama yang membuka kodenya.

Melihat momentum ini, pada 3 Februari 1998 di Palo Alto, sekelompok tokoh termasuk Christine Peterson, Eric S. Raymond, Tim O'Reilly, dan Bruce Perens berkumpul dan mencetuskan istilah baru: "open source". Tujuannya pragmatis — membuat ide yang sama terdengar lebih ramah bagi CEO dan investor.

Tak lama setelah itu, mereka mendirikan Open Source Initiative (OSI) dan merumuskan Open Source Definition yang berisi 10 kriteria, yang sebagian besar diadaptasi dari Debian Free Software Guidelines.

Perpecahan istilah ini menciptakan dua kubu yang hingga hari ini masih berdebat: kubu FSF yang tetap memakai "free software" karena alasan etika, dan kubu OSI yang memakai "open source" karena alasan praktis. Tapi bagi dunia luar, keduanya membangun ekosistem yang sama.

## 5. Dari pinggiran ke pusat: 2000 hingga sekarang

Dua dekade terakhir adalah era di mana open source berpindah dari pinggiran menjadi pusat dari segalanya.

**2000-an: Infrastruktur web.** LAMP Stack (Linux, Apache, MySQL, PHP/Python) menjadi fondasi dari hampir semua website. IBM menginvestasikan 1 miliar dolar untuk Linux. Google lahir dan berjalan di atas Linux.

**2008: Android.** Google merilis Android yang berbasis kernel Linux. Dalam beberapa tahun, sistem operasi open source ini ada di saku miliaran manusia.

**2010-an: Cloud dan GitHub.** GitHub (didirikan 2008) membuat kolaborasi menjadi semudah klik tombol Fork dan Pull Request. Docker (2013) dan Kubernetes (2014, didonasikan Google) yang keduanya open source, mendefinisikan ulang cara kita menjalankan software di cloud. Microsoft, yang dulu CEO-nya menyebut Linux sebagai "kanker", pada 2018 mengakuisisi GitHub seharga 7,5 miliar dolar dan menjadi kontributor open source terbesar di dunia.

**2020-an: Era AI Terbuka.** Pertarungan yang sama terulang di dunia kecerdasan buatan. Di satu sisi ada model tertutup seperti GPT-4 dan Gemini. Di sisi lain, komunitas merilis Llama (Meta), Mistral, Falcon, dan Stable Diffusion yang open source. Seperti Linux dulu, model-model terbuka ini memungkinkan universitas, startup di Indonesia, dan developer individu untuk bereksperimen, mengaudit bias, dan membangun di atasnya tanpa bergantung pada satu perusahaan.

Jika diperiksa pada 2026, perjalanan itu membentuk sebuah pola: setiap kali teknologi menjadi terlalu penting untuk dikunci oleh satu pihak, komunitas akan menciptakan alternatif terbukanya. Dari sistem operasi, ke browser, ke cloud, hingga kini ke AI.

Sejarah open source belum selesai. Ia hanya berpindah medan.
