import * as universal from '../entries/pages/products/inventory-importer/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/inventory-importer/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/products/inventory-importer/+page.js";
export const imports = ["_app/immutable/nodes/9.0aea0a6a.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = [];
export const fonts = [];
