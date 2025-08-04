import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			split: false,
			edge: false
		}),
		prerender: {
			crawl: false,
			entries: ['/', '/about', '/construction', '/services', '/contact', '/webinar', '/privacy-policy', '/products', '/products/inventory-importer']
		}
	}
};

export default config;