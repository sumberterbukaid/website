import rss from '@astrojs/rss';
import { getPublishedAll } from '../lib/content';
import { SITE } from '../lib/site';

export async function GET(context) {
  const items = await getPublishedAll();
  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      'Portal berita open source, sains, dan matematika terbuka — plus hackathon online bulanan. Semua artikel bisa dikoreksi lewat pull request.',
    site: context.site ?? SITE.url,
    items: items.slice(0, 20).map(({ entry, section }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/${section}/${entry.id}/`,
    })),
    customData: '<language>id</language>',
  });
}
