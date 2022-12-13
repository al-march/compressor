import { defineConfig } from 'astro/config';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://compress.monster',
  base: './',
  output: 'static',
  outDir: './dist',
  integrations: [solidJs(), tailwind(), sitemap()]
});