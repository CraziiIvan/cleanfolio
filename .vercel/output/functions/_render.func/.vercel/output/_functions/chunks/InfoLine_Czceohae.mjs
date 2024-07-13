import { m as createComponent, n as renderTemplate, q as maybeRenderHead, s as addAttribute, o as renderComponent, p as createAstro } from './astro/server_DF0Xxt5-.mjs';
import 'kleur/colors';
import { a as $$Icon } from './_astro_content_gL7k3uWi.mjs';
import { e as extractYearAndMonth } from './utils_DM1PlL_L.mjs';

const $$Astro = createAstro();
const $$InfoLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoLine;
  const { title, href, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class=" py-1.5 cursor-pointer group flex items-center space-x-2 "> <div class=" text-black dark:text-white flex items-center group-hover:underline duration-75"> <span class="font-medium dark:font-normal">${title}</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "ml-0.5 opacity-0 group-hover:opacity-100 duration-75", "name": "move-up-right", "size": 14 })} </div> <div class=" grow h-px bg-neutral-200 dark:bg-neutral-800"></div> <span class="text-neutral-600 dark:text-neutral-400 text-sm">${extractYearAndMonth(date)}</span> </a>`;
}, "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/components/InfoLine.astro", void 0);

export { $$InfoLine as $ };
