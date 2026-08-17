---
title: "Siapa yang benar-benar merawat proyek open source raksasa?"
description: "Dari XZ Utils hingga Ingress NGINX: ketika infrastruktur kritis bergantung pada sedikit maintainer dengan dukungan yang tidak sebanding."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: true
tags: ["open-source", "breakdown", "software-engineering"]
mathPreview: '\text{critical infrastructure} \neq \text{funded infrastructure}'
links:
  - label: "XZ Utils 5.6.2 release"
    url: "https://github.com/tukaani-project/xz/releases/tag/v5.6.2"
  - label: "core-js maintainer essay (2023)"
    url: "https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md"
  - label: "Kubernetes: Ingress NGINX retirement"
    url: "https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/"
  - label: "Kubernetes advisory CVE-2025-1974"
    url: "https://kubernetes.io/blog/2025/03/24/ingress-nginx-cve-2025-1974/"
---

Tiga proyek berikut hidup di lapisan berbeda—kompresi Linux, kompatibilitas JavaScript, dan routing Kubernetes—tetapi menunjukkan masalah yang sama: tingkat ketergantungan industri sering tidak sebanding dengan dukungan yang diterima maintainer.

Bukan semata karena kodenya buruk. Sering kali kapasitas manusianya yang terlalu tipis.

## XZ Utils: rekayasa sosial terhadap proyek berkapasitas terbatas

Pada Maret 2024, Andres Freund menemukan backdoor dalam XZ Utils 5.6.0 dan 5.6.1. Manipulasi build-nya dapat memengaruhi jalur autentikasi SSH pada konfigurasi distro tertentu. Upstream merilis 5.6.2 pada 29 Mei 2024 untuk menghapus CVE-2024-3094.

Kronologi publik menunjukkan pola serangan jangka panjang:

1. Jia Tan mulai mengirim kontribusi pada Oktober 2021.
2. Sejumlah akun lain menekan proyek karena rilis dan respons yang lambat pada 2022.
3. Jia Tan mendapat akses commit paling lambat Desember 2022.
4. Payload berbahaya masuk ke tarball 5.6.0 dan 5.6.1 melalui mekanisme build yang sengaja dibuat sulit diaudit.

Ada indikasi kuat rekayasa sosial, tetapi beberapa detail tetap perlu ditulis hati-hati. Identitas akun yang ikut menekan proyek dan hubungan mereka dengan pelaku tidak seluruhnya terbukti. Begitu pula sebab-akibat “maintainer lelah lalu memberikan akses” tidak dapat dipastikan hanya dari kronologi publik.

Pelajarannya bukan menyalahkan satu maintainer. Proyek hobi yang tidak dibayar harus menghadapi tekanan dukungan global, review kontribusi, dan upaya infiltrasi bertahun-tahun.

## core-js: miliaran unduhan bukan model pendanaan

Pada Februari 2023, maintainer core-js Denis Pushkarev menulis laporan panjang tentang ekonomi proyeknya. Menurut data yang ia kutip saat itu:

- core-js dipakai sekitar 54% dari 10.000 situs teratas menurut BuiltWith;
- paketnya telah mencatat sekitar 9 miliar unduhan npm;
- dukungan turun dari sekitar US$2.500 menjadi sekitar US$400 per bulan;
- dengan sekitar 250 jam kerja per bulan, pendapatannya berada di bawah US$2 per jam.

Angka-angka itu adalah **potret Februari 2023 berdasarkan laporan maintainer**, bukan statistik live 2026 dan bukan audit independen. Namun kontrasnya tetap relevan: adopsi masif tidak otomatis menghasilkan pendanaan yang stabil.

Perusahaan melihat dependency sebagai baris di lockfile. Maintainer melihatnya sebagai triage issue, kompatibilitas browser, security response, dokumentasi, dan rilis yang terus berulang.

## Ingress NGINX: pensiun karena dukungan tidak cukup

Kubernetes mengumumkan pada 11 November 2025 bahwa Ingress NGINX akan dipensiunkan pada Maret 2026. Setelah itu tidak ada rilis, bugfix, atau pembaruan keamanan baru.

Alasan resmi menyebut proyek ini terus mengalami dukungan maintainer yang tidak cukup—hanya satu atau dua developer yang mengerjakannya di luar jam kerja—ditambah hutang teknis dan kekhawatiran keamanan.

Risikonya bukan abstrak. CVE-2025-1974 pada admission webhook mendapat skor CVSS 9,8. Dalam kondisi jaringan tertentu, penyerang yang dapat menjangkau pod network dapat menjalankan kode dan berpotensi mengambil alih cluster.

Riset Wiz menemukan lebih dari 6.500 cluster yang mengekspos admission controller rentan ke internet. Angka itu bukan total seluruh instalasi Ingress NGINX, tetapi cukup menunjukkan skala dampak konfigurasi yang berbahaya.

Memensiunkan proyek populer terasa ekstrem, tetapi mempertahankan label “supported” tanpa tenaga dan patch keamanan dapat lebih membahayakan pengguna.

## Pola yang sama di tiga kasus

### Adopsi tidak otomatis menjadi pendanaan

Download, dependents, dan instalasi bukan aliran pendapatan. Tidak ada mekanisme bawaan yang mengubah satu juta pengguna menjadi waktu review atau biaya hidup maintainer.

### Pekerjaan paling penting sering tidak terlihat

Maintainer bukan hanya menulis fitur. Mereka memeriksa laporan keamanan, melakukan triage, memperbaiki CI, menjaga kompatibilitas lama, menolak patch berisiko, dan menjelaskan keputusan yang sama berulang kali.

### Kapasitas manusia adalah bagian dari threat model

Jumlah maintainer inti, waktu respons, jalur pelaporan security, dan suksesi pengelola perlu dinilai seperti dependency teknis lain. XZ memperlihatkan bahwa tekanan sosial dapat menjadi bagian dari supply-chain attack; Ingress NGINX memperlihatkan kapan pensiun lebih jujur daripada dukungan semu.

## Cek seberapa rapuh dependency-mu

Data maintainer npm dapat memberi sinyal awal—meski daftar pemilik package tidak selalu sama dengan orang yang aktif merawat kode:

```python
import json
import subprocess


def get_npm_maintainers(package: str):
    result = subprocess.run(
        ["npm", "view", package, "maintainers", "--json"],
        capture_output=True,
        text=True,
        check=False,
    )
    try:
        maintainers = json.loads(result.stdout)
    except json.JSONDecodeError:
        return []
    return maintainers if isinstance(maintainers, list) else [maintainers]


for package in ["core-js", "colors", "faker"]:
    people = get_npm_maintainers(package)
    print(f"{package}: {len(people)} akun maintainer")
```

Lanjutkan dengan pemeriksaan manual:

- lihat contributor dan release terbaru di repository;
- cari security policy dan jalur pelaporan privat;
- periksa apakah ada lebih dari satu orang yang bisa membuat rilis;
- cari organisasi atau sponsor yang mendukung pemeliharaan;
- siapkan migration path untuk dependency kritis.

Open source memang dapat dipakai tanpa biaya lisensi, tetapi pengembangan dan pemeliharaannya tetap membutuhkan waktu, uang, dan manusia. Mengakui biaya itu adalah langkah awal untuk membuat infrastrukturnya lebih tahan lama.
