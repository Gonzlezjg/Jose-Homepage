import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: SITE_URL,
  output: 'server',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      wrap: false,
    },
  },
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://Gonzlezjg.github.io',
});
