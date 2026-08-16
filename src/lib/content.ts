import { getCollection, type CollectionEntry } from 'astro:content';

export type SectionId = 'kabarmutu' | 'lab' | 'pustaka';
export type AnyEntry = CollectionEntry<SectionId>;

export interface SectionMeta {
  id: SectionId;
  title: string;
  description: string;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'kabarmutu',
    title: 'Kabarmutu',
    description:
      'Kurasi berita open source global — ringkasan dan tautan, bukan copy-paste.',
  },
  {
    id: 'lab',
    title: 'Lab',
    description:
      'Tutorial, paper breakdown, dan eksperimen matematika/sains — dengan rumus yang benar-benar ter-render.',
  },
  {
    id: 'pustaka',
    title: 'Pustaka',
    description:
      'Dataset, tools, dan repo open source buatan Indonesia — lengkap dengan lisensinya.',
  },
];

export function sectionMeta(id: SectionId): SectionMeta {
  const meta = SECTIONS.find((s) => s.id === id);
  if (!meta) throw new Error(`Section tidak dikenal: ${id}`);
  return meta;
}

/**
 * Entri terbit, terbaru dulu. Draft disembunyikan di build produksi,
 * tetap tampil di dev supaya penulis bisa preview.
 */
export async function getPublished(section: SectionId): Promise<AnyEntry[]> {
  const entries = await getCollection(section, ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export interface SectionedEntry {
  entry: AnyEntry;
  section: SectionId;
}

/** Estimasi waktu baca dari raw markdown (±200 kata/menit). */
export function readingTimeMinutes(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Semua entri dari semua koleksi, terbaru dulu. */
export async function getPublishedAll(): Promise<SectionedEntry[]> {
  const [kabarmutu, lab, pustaka] = await Promise.all([
    getPublished('kabarmutu'),
    getPublished('lab'),
    getPublished('pustaka'),
  ]);
  return [
    ...kabarmutu.map((entry) => ({ entry, section: 'kabarmutu' as const })),
    ...lab.map((entry) => ({ entry, section: 'lab' as const })),
    ...pustaka.map((entry) => ({ entry, section: 'pustaka' as const })),
  ].sort((a, b) => b.entry.data.pubDate.valueOf() - a.entry.data.pubDate.valueOf());
}
