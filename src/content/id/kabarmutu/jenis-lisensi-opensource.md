---
title: "Lisensi Open Source: Perbedaan MIT, GPL, dan Apache"
description: "Membongkar tiga lisensi open source paling populer — MIT, GPL, dan Apache 2.0 — dari sisi kebebasan, kewajiban, dan risiko hukum untuk developer dan bisnis."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: false
tags: ["open-source", "lisensi", "MIT", "GPL", "Apache"]
mathPreview: '3\ \text{lisensi} \times 1\ \text{tujuan: kebebasan}'
links:
  - label: "Open Source Initiative - Licenses"
    url: "https://opensource.org/licenses"
  - label: "Choose a License"
    url: "https://choosealicense.com/"
  - label: "TLDRLegal - Ringkasan Lisensi"
    url: "https://tldrlegal.com/"
---

Ketika kamu membuka sebuah repositori di GitHub dan melihat file bernama `LICENSE`, kamu sebenarnya sedang melihat kontrak sosial. File itu yang menentukan apakah kamu boleh memakai kode tersebut untuk skripsi, untuk startup, atau untuk produk perusahaan yang akan dijual jutaan kopi.

Di antara ratusan lisensi open source yang ada, tiga nama hampir selalu muncul: MIT, GPL, dan Apache 2.0. Ketiganya sama-sama diakui oleh Open Source Initiative (OSI), ketiganya sama-sama "open source", tapi filosofi dan konsekuensi hukumnya sangat berbeda. Salah pilih, dan kamu bisa dipaksa membuka source code produkmu atau terseret masalah paten.

Artikel ini akan membedah ketiganya secara verbose tapi praktis.

## 1. Fondasi: kenapa lisensi itu penting?

Tanpa lisensi, kode yang kamu publikasikan di internet secara default dilindungi hak cipta penuh. Artinya, orang lain tidak punya hak apa pun untuk memakai, memodifikasi, atau mendistribusikannya — bahkan jika repositorinya publik.

Lisensi open source adalah surat izin yang diberikan pembuat kode kepada dunia. Ia menjawab tiga pertanyaan kunci:

1.  Apa yang boleh kamu lakukan dengan kode ini?
2.  Apa yang wajib kamu lakukan jika kamu memakainya?
3.  Apa yang tidak ditanggung oleh pembuat kode jika terjadi sesuatu?

Perbedaan utama dari semua lisensi terletak pada jawaban untuk pertanyaan kedua: seberapa besar kewajiban yang dibebankan balik kepadamu.

Di sinilah spektrum permisif vs copyleft muncul.

## 2. MIT License: yang paling permisif dan paling singkat

MIT License adalah lisensi favorit dunia open source, dipakai oleh proyek seperti React, Vue.js, .NET Core, dan jutaan library di npm.

Isinya hanya sekitar 20 baris. Saking pendeknya, kamu bisa membacanya dalam satu menit.

**Apa yang boleh:** Hampir segalanya. Kamu boleh memakai, menyalin, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, menjual, bahkan mensublisensikan kode tersebut untuk kepentingan pribadi maupun komersial.

**Apa yang wajib:** Hanya satu — kamu harus menyertakan salinan lisensi MIT asli dan copyright notice di dalam distribusi software-mu. Tidak perlu membuka source code-mu. Tidak perlu memakai lisensi yang sama.

**Filosofi di baliknya:** Kepercayaan total. Pembuatnya berkata: "Aku sudah membuat ini, pakai saja untuk apa pun, asal jangan hapus namaku."

**Kapan cocok:** Ketika kamu ingin adopsinya seluas mungkin. Kamu membuat library utilitas, framework, atau tools yang ingin dipakai perusahaan tanpa rasa takut. Kamu tidak peduli apakah kode-mu akhirnya masuk ke dalam produk tertutup.

**Risiko yang perlu dicatat:** MIT tidak secara eksplisit memberikan perlindungan paten. Jika kontributor kode tersebut memiliki paten atas metode di dalam kode itu, secara teoritis ia masih bisa menuntutmu. Risiko ini kecil untuk proyek kecil, tapi menjadi pertimbangan untuk perusahaan besar.

## 3. Apache License 2.0: MIT yang dilengkapi tameng hukum

Jika MIT adalah surat izin yang sangat sederhana, Apache 2.0 adalah MIT yang sudah diberi bantuan pengacara.

Dipakai oleh Android, Kubernetes, TensorFlow, dan hampir seluruh ekosistem Apache Software Foundation.

**Apa yang boleh:** Sama permisifnya dengan MIT. Boleh dipakai komersial, dimodifikasi, didistribusikan secara privat maupun publik.

**Apa yang wajib:** Dua hal.
1.  Sertakan salinan lisensi dan copyright notice (seperti MIT).
2.  Jika kamu memodifikasi file, kamu harus memberi tanda yang jelas bahwa file tersebut telah kamu ubah. Selain itu, jika proyek asli memiliki file NOTICE, kamu wajib menyertakannya.

**Kelebihan besar dibanding MIT: perlindungan paten.** Apache 2.0 secara eksplisit memberikan grant paten dari semua kontributor kepadamu. Artinya, jika seseorang berkontribusi kode ke proyek Apache, ia otomatis memberikan hak paten yang relevan kepada semua pengguna. Dan jika kamu menuntut salah satu kontributor atas pelanggaran paten terkait proyek tersebut, maka hak lisensi paten-mu akan otomatis dicabut. Ini adalah mekanisme pertahanan mutual.

**Filosofi di baliknya:** Kebebasan yang bertanggung jawab dan aman untuk korporat. "Pakai sebebasnya, tapi mari kita jaga satu sama lain dari tuntutan paten yang tidak perlu."

**Kapan cocok:** Ketika kamu membangun proyek yang berpotensi dipakai oleh perusahaan besar, yang sensitif terhadap isu paten. Hampir semua perusahaan teknologi besar lebih nyaman dengan Apache 2.0 dibanding MIT untuk proyek infrastruktur kritis.

## 4. GPL (GNU General Public License): penjaga kebebasan turunan

GPL adalah kebalikan dari MIT dalam spektrum. Jika MIT sangat permisif, GPL adalah lisensi copyleft yang kuat. Versi yang paling umum dipakai adalah GPL v2 dan GPL v3.

Dipakai oleh Linux Kernel, WordPress, Git, dan VLC.

**Apa yang boleh:** Kamu tetap boleh memakai, memodifikasi, dan mendistribusikan untuk tujuan apa pun, termasuk komersial.

**Apa yang wajib — dan ini yang krusial:** Jika kamu mendistribusikan versi modifikasi dari software berlisensi GPL (misalnya kamu menggabungkan library GPL ke dalam aplikasimu dan menjual aplikasimu), maka seluruh aplikasi turunanmu WAJIB juga dirilis di bawah lisensi GPL. Source code-nya harus kamu buka.

Ini yang disebut efek viral atau copyleft. Lisensi ini memastikan bahwa kebebasan tidak berhenti di kamu, tapi terus mengalir ke orang yang menerima software darimu.

GPL v3 menambahkan perlindungan tambahan: ia melarang tivoization (praktik membuat hardware yang menjalankan software GPL tapi tidak mengizinkan pengguna memodifikasi software-nya) dan memberikan grant paten eksplisit seperti Apache.

**Filosofi di baliknya:** Kebebasan harus dijaga agar tetap bebas. Richard Stallman, penciptanya, berargumen bahwa mengizinkan kode bebas diubah menjadi kode tertutup adalah pengkhianatan terhadap kebebasan itu sendiri.

**Kapan cocok dan kapan harus hati-hati:** Cocok jika kamu memang ingin memastikan semua turunan dari karyamu tetap open source. WordPress memilih GPL agar semua plugin dan tema yang ada di ekosistemnya menghormati semangat yang sama.

Tidak cocok jika kamu membangun produk SaaS atau aplikasi proprietary tertutup dan tidak ingin dipaksa membuka source code-mu. Banyak perusahaan melarang penggunaan library berlisensi GPL v3 di dalam produk inti mereka karena alasan ini.

Untuk mengatasi kekakuan GPL, ada varian LGPL (Lesser GPL) yang mengizinkan library-nya di-link ke software proprietary tanpa memaksa software tersebut menjadi GPL, selama library-nya sendiri tetap terbuka.

## Cara memilih dengan benar: framework 3 pertanyaan

Jangan memilih lisensi karena ikut-ikutan. Tanyakan ini sebelum kamu `git push`:

1.  **Apa tujuan akhirmu?** Ingin adopsi seluas-luasnya termasuk oleh perusahaan tertutup? Pilih MIT atau Apache 2.0. Ingin memastikan semua turunan tetap terbuka selamanya? Pilih GPL.
2.  **Apakah isu paten penting?** Jika kamu di industri yang rawan paten (AI, codec video, telekomunikasi), Apache 2.0 memberikan rasa aman yang tidak dimiliki MIT.
3.  **Apakah kamu memakai library orang lain?** Periksa kompatibilitas. Kamu bisa memasukkan library MIT ke dalam proyek Apache 2.0 atau GPL. Tapi kamu tidak bisa memasukkan library GPL ke dalam proyek MIT tertutup tanpa konsekuensi — proyekmu akan ikut menjadi GPL.

| Lisensi | Boleh Komersial | Wajib Buka Source Turunan | Perlindungan Paten Eksplisit | Kewajiban Atribusi |
| --- | --- | --- | --- | --- |
| MIT | Ya | Tidak | Tidak | Ya, sertakan lisensi |
| Apache 2.0 | Ya | Tidak | Ya | Ya, sertakan lisensi + NOTICE + tandai perubahan |
| GPL v3 | Ya | Ya, jika didistribusikan | Ya | Ya, dan turunan harus GPL juga |

Pada akhirnya, lisensi bukan sekadar formalitas di akhir proyek. Ia adalah pernyataan niat. MIT berkata "aku ingin membantu siapa saja", Apache berkata "aku ingin membantu dengan aman", dan GPL berkata "aku ingin kebebasan ini abadi".

Pilihlah dengan sadar, karena sekali sebuah versi dirilis dengan sebuah lisensi, keputusan itu sulit untuk ditarik kembali.