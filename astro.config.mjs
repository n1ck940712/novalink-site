// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://novalink-technologies.com',
  // Static build for Cloudflare Pages. No adapter required unless you move to SSR.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
