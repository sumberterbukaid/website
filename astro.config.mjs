import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://sumberterbuka.id',
  integrations: [sitemap()],
  // i18n sejak awal (SPEC v0.4): defaultLocale tanpa prefix URL supaya
  // sumberterbuka.id/kabarmutu/... tetap bersih; /en/ nanti tinggal ditambah.
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
