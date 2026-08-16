import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Field umum untuk semua koleksi. Konten berada di bawah src/content/id/
// sesuai keputusan i18n SPEC v0.4: menambah locale /en/ nanti cukup dengan
// menambah folder src/content/en/ + koleksi baru — tanpa refactor.
const meta = z.object({
  title: z.string().min(1).max(110),
  description: z.string().min(1).max(200),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  author: z.string().default('Redaksi Sumber Terbuka'),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  // Cuplikan LaTeX yang dirender KaTeX di kartu artikel (bukti visual di grid).
  mathPreview: z.string().optional(),
  links: z
    .array(z.object({ label: z.string(), url: z.string().url() }))
    .default([]),
});

const kabarmutu = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/id/kabarmutu' }),
  schema: meta.extend({
    // Kurasi wajib mencantumkan sumber asli — bukan copy-paste.
    source: z.string().url().optional(),
    sourceName: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/id/lab' }),
  schema: meta.extend({
    repo: z.string().url().optional(),
  }),
});

const pustaka = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/id/pustaka' }),
  schema: meta.extend({
    kind: z.enum(['dataset', 'tool', 'repo']),
    url: z.string().url(),
    license: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = { kabarmutu, lab, pustaka };
