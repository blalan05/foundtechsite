

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3324d76b.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js","_app/immutable/chunks/stores.5fb9329c.js","_app/immutable/chunks/singletons.71cc2d53.js"];
export const stylesheets = [];
export const fonts = [];
