import { c as create_ssr_component } from "../../chunks/index.js";
const _400Italic = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"><header class="border-b bg-orange-50"><nav class="layout-md flex items-center gap-6 py-4"><a href="/" class="font-semibold text-2xl">Fall 2025</a>
      <a href="/code_bounds.html" class="link ml-auto">Code Bounds</a></nav></header>

  <main class="layout-lg py-8">
    ${slots.default ? slots.default({}) : ``}</main>

  <footer class="border-t bg-blue-50"><div class="layout-md py-6 text-lg text-slate-500"><a href="https://theoryincs.web.illinois.edu/" class="link">UIUC TCS</a></div></footer></div>`;
});
export {
  Layout as default
};
