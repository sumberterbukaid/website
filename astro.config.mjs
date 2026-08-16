import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * Link eksternal di konten markdown dibuka di tab baru.
 * Link internal (relatif) dan absolut milik situs sendiri tetap sama tab.
 */
function rehypeExternalLinks() {
  const SITE_URL = 'https://sumberterbuka.id';
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== 'object') return;
    if (node.type === 'element' && node.tagName === 'a') {
      const href = node.properties?.href;
      if (
        typeof href === 'string' &&
        /^https?:\/\//i.test(href) &&
        !href.startsWith(SITE_URL)
      ) {
        node.properties.target = '_blank';
        node.properties.rel = 'noopener noreferrer';
      }
    }
    if (node.children) walk(node.children);
  };
  return (tree) => walk(tree);
}

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
    rehypePlugins: [rehypeKatex, rehypeExternalLinks],
  },
});
