export const SITE = {
  name: 'Sumber Terbuka',
  tagline: 'Jurnalisme, kode, dan sains yang bisa di-fork.',
  url: 'https://sumberterbuka.id',
  repo: 'https://github.com/sumberterbukaid/website',
  discussions: 'https://github.com/sumberterbukaid/website/discussions',
  locale: 'id-ID',
} as const;

/** URL untuk tombol "Edit di GitHub" — jantung dari etos fork situs ini. */
export function editUrl(collection: string, id: string): string {
  return `${SITE.repo}/edit/main/src/content/id/${collection}/${id}.md`;
}

const dateFmt = new Intl.DateTimeFormat(SITE.locale, { dateStyle: 'long' });

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}
