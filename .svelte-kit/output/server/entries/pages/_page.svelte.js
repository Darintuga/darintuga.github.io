import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    "Meta-complexity",
    "Error-Correcting Codes",
    "Expanders",
    "Quantum Cryptography",
    "Differential Privacy"
  ];
  return `<p class="layout-md text-black text-xl leading-tight font-light mb-8" id="UIUC_reading_group"></p><article class="layout-lg"><img${add_attribute("src", "/expander.png", 0)} alt="Expander" class="float-right ml-6 mb-4 w-40 md:w-64 h-auto rounded-lg md:float-right float-none md:ml-6 ml-0">

  <h1 class="text-3xl font-bold mb-6">Theory Reading Group</h1>
  <p class="mb-3">We intend to cover various topics in theoretical computer science, including but not limited to:</p>
  <ul class="list-disc list-outside pl-6 space-y-1">${each(items, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>
  <div class="clear-both"></div></article>

<p class="layout-lg mt-2">The reading group will be led by <a class="link" href="https://granha.github.io/">Prof. Fernando Granha Jeronimo</a> 
    with help from student organizers Will, Andrei, and Rhea.</p>

<p class="layout-lg mt-3 mb-6">We will meet in SC 3102 on Thursdays from 5-8PM, starting on September 18th.</p>

<hr>

<h2 class="text-2xl font-bold mb-6 mt-6">Schedule:</h2>`;
});
export {
  Page as default
};
