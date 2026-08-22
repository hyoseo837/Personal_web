// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';
import remarkWikiLink from 'remark-wiki-link';

// remark-wiki-link needs the full permalink list at config-load time, and this file
// can't read an Astro content collection — so glob the filesystem instead. Slugs are
// the bare filename, matching getSlugFromId() in src/utils/posts.ts.
const postsDir = path.join(process.cwd(), 'src/content/posts');
const permalinks = fs
  .readdirSync(postsDir, { recursive: true })
  .filter((f) => typeof f === 'string' && /\.mdx?$/.test(f))
  .map((f) => path.basename(f).replace(/\.mdx?$/, ''))
  // Underscore-prefixed files are excluded by the collection loader, so they aren't pages.
  .filter((slug) => !slug.startsWith('_'));

// At least one post filename has capitals (lesson-from-WW-extension-implementation),
// so resolve case-insensitively rather than forcing lowercase and silently missing it.
const permalinkByLower = new Map(permalinks.map((p) => [p.toLowerCase(), p]));

const resolveWikiLink = (name) => {
  const key = name.trim().replace(/\s+/g, '-').toLowerCase();
  return [permalinkByLower.get(key) ?? key];
};

// https://astro.build/config
export default defineConfig({
  site: 'https://hyoseo.dev',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc,
      [remarkCollapse, { test: 'Table of contents' }],
      [
        remarkWikiLink,
        {
          permalinks,
          pageResolver: resolveWikiLink,
          hrefTemplate: (permalink) => `/blog/${permalink}`,
          // Default is ':' (Gollum-style); use the Obsidian/Wikipedia '|' instead.
          aliasDivider: '|',
          // Targets that don't resolve get `.internal.new` so they can be styled as broken.
          wikiLinkClassName: 'internal',
          newClassName: 'new',
        },
      ],
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'night-owl',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});