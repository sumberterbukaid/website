---
title: "Mengenal Golden Ratio dan Kemunculannya di Alam"
description: "Menelusuri bilangan phi (φ = 1.618...), dari definisi geometris Euclid hingga spiral bunga matahari, cangkang nautilus, dan proporsi tubuh manusia."
pubDate: 2026-08-17
updatedDate: 2026-08-17
author: "@thinsmn"
featured: false
tags: ["matematika", "golden-ratio", "phi", "fibonacci", "alam"]
mathPreview: '\varphi = \frac{1+\sqrt{5}}{2} \approx 1.618'
links:
  - label: "Golden Ratio in Nature - Math is Fun"
    url: "https://www.mathsisfun.com/numbers/golden-ratio.html"
  - label: "Fibonacci and Phyllotaxis"
    url: "https://en.wikipedia.org/wiki/Golden_angle"
  - label: "The Golden Ratio - Livio"
    url: "https://www.mariolivio.com/"
---

Ada sebuah bilangan irasional yang muncul di tempat-tempat yang tidak terduga: di susunan biji bunga matahari, di lekukan cangkang laut, di cabang pohon, di galaksi spiral, bahkan di lukisan Mona Lisa dan desain logo Apple. Bilangan itu adalah Golden Ratio, yang dilambangkan dengan huruf Yunani $\varphi$ (phi).

Nilainya:

$$ \varphi = \frac{1 + \sqrt{5}}{2} \approx 1.6180339887... $$

Seperti $\pi$, ia tidak pernah berakhir dan tidak pernah berulang. Tapi tidak seperti $\pi$ yang muncul dari lingkaran, $\varphi$ muncul dari proporsi — dari ide tentang pembagian yang paling harmonis.

## 1. Definisi asli dari Euclid: pembagian yang paling indah

Definisi Golden Ratio pertama kali muncul dalam buku Elements karya Euclid sekitar 300 SM. Ia tidak menyebutnya "golden", ia hanya menyebutnya "extreme and mean ratio".

Bayangkan sebuah garis yang panjang totalnya $a + b$, di mana $a$ adalah bagian yang lebih panjang dan $b$ bagian yang lebih pendek. Garis itu dikatakan dibagi dengan Golden Ratio jika:

$$ \frac{a+b}{a} = \frac{a}{b} = \varphi $$

Artinya, perbandingan keseluruhan terhadap bagian panjang sama dengan perbandingan bagian panjang terhadap bagian pendek. Proporsi ini dianggap paling seimbang.

Jika kita selesaikan persamaan $\frac{a}{b} = \varphi$, dengan memisalkan $x = \frac{a}{b}$, maka:

$$ \frac{a+b}{a} = 1 + \frac{b}{a} = 1 + \frac{1}{x} = x $$

Sehingga kita mendapat persamaan kuadrat:

$$ x^2 - x - 1 = 0 $$

Akar positif dari persamaan ini adalah:

$$ x = \frac{1 + \sqrt{5}}{2} = \varphi \approx 1.618 $$

Dan inilah sifat ajaibnya yang tidak dimiliki bilangan lain:

$$ \varphi^2 = \varphi + 1 \approx 2.618 $$

$$ \frac{1}{\varphi} = \varphi - 1 \approx 0.618 $$

Phi adalah satu-satunya bilangan yang kuadratnya adalah dirinya sendiri ditambah satu, dan kebalikannya adalah dirinya sendiri dikurangi satu. Keindahan aljabar ini adalah cikal bakal kemunculannya di alam.

## 2. Hubungan tak terpisahkan dengan deret Fibonacci

Jika kamu pernah melihat deret $0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...$ di mana setiap suku adalah penjumlahan dua suku sebelumnya:

$$ F_n = F_{n-1} + F_{n-2}, \quad F_0=0, F_1=1 $$

Maka kamu sudah berada satu langkah dari Golden Ratio.

Perhatikan rasio dari dua suku Fibonacci yang berurutan:

$$ \frac{1}{1}=1, \quad \frac{2}{1}=2, \quad \frac{3}{2}=1.5, \quad \frac{5}{3}\approx1.666, \quad \frac{8}{5}=1.6, \quad \frac{13}{8}=1.625, \quad \frac{21}{13}\approx1.615... $$

Semakin besar $n$, rasio ini konvergen ke $\varphi$:

$$ \lim_{n \to \infty} \frac{F_{n+1}}{F_n} = \varphi $$

Inilah jembatan antara matematika diskrit (Fibonacci yang bulat dan terhitung) dan matematika kontinu (phi yang irasional). Alam, yang tumbuh dengan menambahkan unit demi unit (satu daun, satu biji), secara tidak sadar mendekati phi melalui proses Fibonacci.

## 3. Kemunculan di alam: bukan mistik, tapi optimasi

Banyak artikel populer melebih-lebihkan Golden Ratio sebagai "sidik jari Tuhan". Kita perlu lebih kritis: tidak semua klaim itu benar. Tapi kemunculannya di beberapa tempat adalah fakta fisika dan optimasi yang menakjubkan.

### a. Phyllotaxis — susunan daun dan biji bunga matahari

Ini adalah contoh paling kuat dan terbukti secara matematis.

Tanaman harus mengatur daun atau biji agar mendapatkan sinar matahari dan ruang maksimal tanpa saling menutupi. Sudut optimal untuk itu adalah Golden Angle, yang diturunkan dari $\varphi$:

$$ \text{Golden Angle} = 360^\circ \cdot \left(1 - \frac{1}{\varphi}\right) = 360^\circ \cdot (2 - \varphi) \approx 137.5^\circ $$

Jika sebuah tanaman menumbuhkan biji baru dengan memutar $137.5^\circ$ dari biji sebelumnya, maka tidak ada biji yang akan tepat berada di atas biji lama. Hasilnya adalah pola spiral ganda yang kamu lihat di bunga matahari: 34 spiral ke satu arah dan 55 spiral ke arah lain — dua bilangan Fibonacci berurutan.

Ini bukan tanaman yang "tahu" matematika. Ini adalah seleksi alam: tanaman yang sudutnya mendekati Golden Angle mendapatkan packing paling efisien, sehingga bertahan.

### b. Cangkang Nautilus dan spiral logaritmik

Sering diklaim cangkang Nautilus adalah spiral emas sempurna. Faktanya, cangkangnya adalah spiral logaritmik umum dengan pertumbuhan sekitar $r = a \cdot e^{b\theta}$, yang mirip tapi tidak persis sama dengan Golden Spiral (yang memiliki faktor pertumbuhan $b = \ln(\varphi) / (\pi/2)$).

Namun, galaksi spiral seperti M51 dan pola badai sering kali mendekati spiral logaritmik yang faktor pertumbuhannya terkait dengan $\varphi$, karena spiral logaritmik mempertahankan bentuknya saat tumbuh — sebuah properti yang disebut self-similarity.

### c. Tubuh manusia dan seni

Rasio $\varphi$ sering muncul dalam proporsi tubuh: perbandingan panjang lengan bawah terhadap tangan, atau tinggi pusar terhadap tinggi total, sering kali mendekati $1.618$, meski dengan variasi individu yang besar. Ini bukan hukum universal, tapi kecenderungan statistik.

Dalam seni dan arsitektur, Parthenon di Athena, Mona Lisa karya Leonardo da Vinci, dan desain logo Twitter (sekarang X) sering dikaitkan dengan Golden Rectangle — persegi panjang dengan sisi $1 : \varphi$ yang jika dipotong menjadi persegi akan menyisakan persegi panjang lain dengan rasio yang sama. Apakah senimannya sengaja memakai $\varphi$ atau kita yang memaksakan $\varphi$ ke karya tersebut masih menjadi perdebatan sejarawan. Yang jelas, otak manusia memang cenderung menganggap proporsi sekitar $1.6:1$ sebagai yang paling menyenangkan secara visual.

## 4. Rumus eksplisit yang menghubungkan keduanya: Formula Binet

Keindahan hubungan Fibonacci dan Golden Ratio memuncak pada Formula Binet, yang memberikan rumus langsung untuk suku Fibonacci ke-$n$ tanpa harus menghitung semua suku sebelumnya:

$$ F_n = \frac{\varphi^n - \psi^n}{\sqrt{5}} $$

di mana $\psi = \frac{1 - \sqrt{5}}{2} \approx -0.618 = -\frac{1}{\varphi}$ adalah konjugat dari $\varphi$.

Karena $|\psi| < 1$, maka $\psi^n \to 0$ saat $n \to \infty$, sehingga:

$$ F_n \approx \frac{\varphi^n}{\sqrt{5}} $$

Sebuah bilangan bulat (Fibonacci) ternyata lahir dari pangkat bilangan irasional! Ini menunjukkan betapa dalamnya keterkaitan keduanya.

## Cara melihat phi dengan matamu sendiri hari ini

1.  Ambil sebuah bunga matahari atau pinus cone. Hitung jumlah spiral yang berputar searah jarum jam dan berlawanan. Kamu akan hampir selalu mendapat dua bilangan Fibonacci seperti $34$ dan $55$, atau $55$ dan $89$.

2.  Ukur panjang dari ujung jari ke pergelangan dan pergelangan ke siku. Bagi keduanya. Banyak orang mendapat rasio antara $1.5$ dan $1.7$, mendekati $\varphi$.

3.  Buat Golden Rectangle: buat persegi $1 \times 1$, tambahkan persegi $1 \times 1$ di sampingnya, lalu persegi $2 \times 2$ di bawahnya, $3 \times 3$, $5 \times 5$, dan seterusnya. Hubungkan sudut-sudutnya dengan busur seperempat lingkaran — kamu akan mendapatkan Golden Spiral yang mendekati pola cangkang.

Golden Ratio bukan sihir. Ia adalah solusi optimal dari persamaan paling sederhana $x^2 = x + 1$ yang secara kebetulan menjadi solusi optimal bagi alam untuk tumbuh secara efisien. Ia mengajarkan bahwa keindahan yang kita anggap estetis sering kali hanyalah efisiensi yang terlihat indah.
