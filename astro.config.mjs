// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';

// https://astro.build/config
export default defineConfig({
  site: 'https://hyoseo.dev',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc,
      [remarkCollapse, { test: 'Table of contents' }],
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: 'min-light', dark: 'night-owl' },
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});