

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.720774cc.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = ["_app/immutable/assets/2.a06bc6e4.css"];
export const fonts = [];
