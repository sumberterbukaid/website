// Membuat public/og-default.png (1200x630) — kartu social share bawaan.
// Jalankan: npm run og  (file ini juga di-referensi BaseLayout sebagai og:image default)
// Upgrade path (SPEC v0.4 bagian 3): generator per-artikel dengan satori.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'public', 'og-default.png');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#10241a"/>
  <circle cx="1080" cy="80" r="220" fill="#0c1c14"/>
  <circle cx="90" cy="600" r="180" fill="#0c1c14"/>
  <polyline points="96,150 176,230 96,310" stroke="#00c853" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="210" y1="310" x2="290" y2="310" stroke="#00c853" stroke-width="16" stroke-linecap="round"/>
  <text x="96" y="420" font-family="Arial, Helvetica, sans-serif" font-size="88" font-weight="bold" fill="#faf9f6">sumberterbuka.id</text>
  <text x="98" y="486" font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#8fbf9f">Jurnalisme, kode, dan sains yang bisa di-fork.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OK →', out);
