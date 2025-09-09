

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2106420b.js","_app/immutable/chunks/index.8528c4bc.js"];
export const stylesheets = ["_app/immutable/assets/0.cb079aa2.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.15c2d816.woff2","_app/immutable/assets/newsreader-all-400-italic.b234bc8e.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.5bf368d2.woff2","_app/immutable/assets/newsreader-latin-400-italic.c935023f.woff2"];
