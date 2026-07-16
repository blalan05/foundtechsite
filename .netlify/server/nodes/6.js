import * as universal from '../entries/pages/fullvue/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fullvue/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/fullvue/+page.js";
export const imports = ["_app/immutable/nodes/6.04f41761.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = ["_app/immutable/assets/6.28fa1b17.css"];
export const fonts = [];
