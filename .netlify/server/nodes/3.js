import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.0a16c140.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js","_app/immutable/chunks/FoundTech Logo.a3ccdd3f.js"];
export const stylesheets = ["_app/immutable/assets/3.3b6113bb.css"];
export const fonts = [];
