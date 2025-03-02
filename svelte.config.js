import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
		  pages: 'build',
		  assets: 'build',
		  fallback: 'index.html'
		}),
		paths: {
		  base: '/watcanido' // Assure-toi que c'est bien ton repo GitHub
		}
	  }
	  
};

export default config;
