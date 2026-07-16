import * as universal from '../entries/pages/vtbiocca/_page.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/vtbiocca/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/vtbiocca/+page.js";
export const imports = ["_app/immutable/nodes/15.05661838.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = ["_app/immutable/assets/15.a0ee3bda.css"];
export const fonts = [];
