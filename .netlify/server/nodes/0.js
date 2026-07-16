import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.da3dc24d.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js","_app/immutable/chunks/FoundTech Logo.a3ccdd3f.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/stores.5fb9329c.js","_app/immutable/chunks/singletons.71cc2d53.js"];
export const stylesheets = ["_app/immutable/assets/0.278278de.css"];
export const fonts = [];
