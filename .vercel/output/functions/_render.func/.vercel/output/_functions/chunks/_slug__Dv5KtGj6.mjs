/* empty css                         */
import { m as createComponent, n as renderTemplate, o as renderComponent, p as createAstro, q as maybeRenderHead, s as addAttribute } from './astro/server_DF0Xxt5-.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$MainLayout, a as $$Icon } from './_astro_content_gL7k3uWi.mjs';
import { e as extractYearAndMonth } from './utils_DM1PlL_L.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const writings = await getCollection("writing");
  return writings.map((writing, index) => ({
    params: { slug: writing.slug },
    props: { writing, next: writings[index + 1] || writings[0] }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { writing, next } = Astro2.props;
  const { Content } = await writing.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": writing.data.title, "description": writing.data.description, "date": extractYearAndMonth(writing.data.date) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/writings" class="dark:text-neutral-400 text-neutral-600 hover:text-black dark:hover:text-white duration-75 z-40 absolute top-6"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "inline mb-0.5", "name": "undo-2", "size": 13 })} <span>Back</span> </a> <article class="prose prose-neutral dark:prose-invert prose-strong:font-medium prose-p:leading-6 prose-img:border prose-img:rounded-lg prose-img:border-neutral-200  prose-hr:my-6"> ${renderComponent($$result2, "Content", Content, {})} </article> <div class="flex justify-end mt-12"> <a${addAttribute(next.slug, "href")} class="flex flex-col group items-end"> <div class="text-neutral-500 dark:group-hover:text-white group-hover:text-black">
Next
${renderComponent($$result2, "Icon", $$Icon, { "class": "inline mb-0.5", "name": "arrow-right", "size": 13 })} </div> <div class="font-medium dark:font-normal group-hover:underline">${next.data.title}</div> </a> </div> ` })}`;
}, "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/writings/[slug].astro", void 0);

const $$file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/writings/[slug].astro";
const $$url = "/writings/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
