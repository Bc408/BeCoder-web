import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ide.becoder.tech',
  base: '/',
  integrations: [tailwind()],
});
