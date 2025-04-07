// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/portafolio/',
  // site: 'https://leynervm.github.io/portafolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});