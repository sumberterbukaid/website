---
title: "Mengapa 0,999… sama dengan 1 — bukan hampir, tapi persis"
description: "Tiga bukti bahwa koma sembilan berulang dan satu adalah bilangan yang sama, plus kenapa naluri kita menolaknya."
pubDate: 2026-08-16
updatedDate: 2026-08-16
author: "@thinsmn"
featured: true
tags: ["matematika", "breakdown"]
mathPreview: '0{,}999\ldots = 1'
links:
  - label: "Wikipedia: 0,999…"
    url: "https://id.wikipedia.org/wiki/0,999%E2%80%A6"
---

Klaimnya terdengar salah, tapi bisa dibuktikan tiga cara berbeda: $0{,}999\ldots$
(koma sembilan berulang tanpa akhir) dan $1$ adalah dua tulisan untuk bilangan
yang **sama persis**. Bukan "hampir sama", bukan "mendekati" — sama.

## Bukti 1: lewat pecahan

Kita semua setuju $\tfrac{1}{3} = 0{,}333\ldots$ (bagi 1 dengan 3 di kertas,
komanya benar-benar tak berujung). Kalikan ketiganya:

$$
3 \times \frac{1}{3} = 3 \times 0{,}333\ldots
$$

Ruas kiri jelas $1$. Ruas kanan: setiap angka 3 dikali 3 menjadi 9 di posisi
yang sama, jadi $0{,}999\ldots$. Maka $0{,}999\ldots = 1$.

## Bukti 2: lewat aljabar

Misalkan $x = 0{,}999\ldots$. Kalikan 10:

$$
10x = 9{,}999\ldots
$$

Kurangi $x$ dari keduanya:

$$
10x - x = 9{,}999\ldots - 0{,}999\ldots = 9 \quad\Rightarrow\quad 9x = 9 \quad\Rightarrow\quad x = 1
$$

Perhatikan yang terjadi di pengurangan itu: setiap digit 9 di belakang koma
saling menghabisi satu per satu — tidak tersisa apa pun. Itu inti argumennya.

## Bukti 3: lewat deret (cara formal)

$0{,}999\ldots$ adalah deret geometri dengan suku pertama $a = \tfrac{9}{10}$
dan rasio $r = \tfrac{1}{10}$:

$$
0{,}999\ldots = \sum_{n=1}^{\infty} \frac{9}{10^n}
$$

Karena $|r| < 1$, deret konvergen dan jumlahnya:

$$
S = \frac{a}{1 - r} = \frac{0{,}9}{1 - 0{,}1} = \frac{0{,}9}{0{,}9} = 1
$$

Ini bukti yang dipakai di buku analisis real: angka desimal berulang
*didefinisikan* sebagai nilai limit deretnya — dan limit-nya tepat 1.

## Kenapa naluri kita menolak?

Kebanyakan orang merasa "harus ada sisa $0{,}000\ldots 1$". Masalahnya, angka
itu tidak ada: menulis "nol tak hingga banyaknya, lalu 1" tidak punya posisi
untuk angka 1-nya — setiap posisi di belakang koma sudah ditempati nol.
Naluri kita membayangkan angka desimal yang "berhenti entah di sana", padahal
$0{,}999\ldots$ tidak pernah berhenti.

Cara lain melihatnya: kalau $0{,}999\ldots \ne 1$, harus ada bilangan di antara
keduanya. Coba sebutkan satu — tidak ada. Dua bilangan tanpa bilangan di
antaranya adalah bilangan yang sama.

## Cek sendiri dengan kode

Klaim di atas bisa diverifikasi siapa saja, bahkan dari HP:

```python
def sebagian_deret(n: int) -> float:
    """Jumlah n suku pertama dari 0.999..."""
    return sum(9 / 10**k for k in range(1, n + 1))

print(sebagian_deret(10))                 # 0.9999999999
print(round(sebagian_deret(1000), 12))    # 1.0 — makin lama makin dekat, tak pernah lewat
```

Semakin banyak suku, hasilnya mendekati 1 dan tidak pernah melewatinya —
persis definisi limit.

---

Ini contoh kecil dari apa yang dilakukan /lab: klaim matematika tidak diminta
percaya begitu saja. Ada rumusnya, ada buktinya, dan ada kode untuk
mengeceknya. Menemukan kesalahan? Klik **Edit di GitHub** di panel kanan.
