import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repositoryName = 'BeCoder-Web';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://bc408.github.io',
  base: isGitHubActions ? `/${repositoryName}` : '/',
  integrations: [tailwind()],
});
