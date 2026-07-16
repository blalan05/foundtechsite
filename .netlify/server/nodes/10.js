import * as universal from '../entries/pages/products/show-vue/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/show-vue/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/products/show-vue/+page.js";
export const imports = ["_app/immutable/nodes/10.ffe80e72.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = [];
export const fonts = [];
