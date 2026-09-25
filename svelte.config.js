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
			// crawl:true discovers linked pages automatically; the entries list
			// covers routes nothing links to yet (crawl:false silently skipped
			// forgotten routes twice before).
			crawl: true,
			entries: ['/', '/about', '/construction', '/services', '/services/hardware', '/contact', '/thank-you', '/privacy-policy', '/products', '/products/inventory-importer', '/products/show-vue', '/products/show-vue/terms-of-service', '/products/show-vue/account-deletion', '/fullvue']
		}
	}
};

export default config;