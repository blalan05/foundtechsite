import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".thanks-section.svelte-qgcosx.svelte-qgcosx{display:flex;align-items:center;justify-content:center;height:calc(100vh - 68px);height:calc(100svh - 68px);background-image:linear-gradient(\n      to bottom,\n      white,\n      var(--lightblue),\n      white\n    )}.thanks-content.svelte-qgcosx.svelte-qgcosx{display:flex;flex-direction:column;align-items:center;text-align:center;gap:1.5em;width:85%;max-width:700px}.thanks-content.svelte-qgcosx h2.svelte-qgcosx{font-size:2rem;font-weight:600}.thanks-links.svelte-qgcosx.svelte-qgcosx{display:flex;flex-wrap:wrap;gap:1em;justify-content:center}.thanks-links.svelte-qgcosx a.svelte-qgcosx{padding:1rem 1.5rem;font-size:1.1em;text-decoration:none;font-weight:bold;color:white;background-color:var(--green);border-radius:7px}.thanks-links.svelte-qgcosx a.secondary.svelte-qgcosx{background-color:var(--blue)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ztvonm_START -->${$$result.title = `<title>Thanks — we got your message | FoundTech</title>`, ""}<meta name="robots" content="noindex"><meta name="description" content="Your message is in. A real person replies within one business day."><!-- HEAD_svelte-ztvonm_END -->`, ""} <div data-svelte-h="svelte-1ere28b"><section class="thanks-section svelte-qgcosx"><div class="thanks-content svelte-qgcosx"><h2 class="svelte-qgcosx">Thanks — we got your message.</h2> <p>A real person will reply within one business day. In the meantime, take
        a look at what we build:</p> <div class="thanks-links svelte-qgcosx"><a href="/services" class="svelte-qgcosx">Our Services</a> <a class="secondary svelte-qgcosx" href="/">Back to Home</a></div></div></section> </div>`;
});
export {
  Page as default
};
