import * as universal from '../entries/pages/services/_page.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/services/+page.js";
export const imports = ["_app/immutable/nodes/13.335a9330.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = ["_app/immutable/assets/13.d44e1c42.css"];
export const fonts = [];
