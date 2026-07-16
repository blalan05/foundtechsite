

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/construction/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6de26631.js","_app/immutable/chunks/scheduler.c03600da.js","_app/immutable/chunks/index.6174db7b.js"];
export const stylesheets = ["_app/immutable/assets/4.97cc8e4c.css"];
export const fonts = [];
