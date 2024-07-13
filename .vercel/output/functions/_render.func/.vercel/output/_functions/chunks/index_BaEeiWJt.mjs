/* empty css                         */
import { m as createComponent, n as renderTemplate, q as maybeRenderHead, s as addAttribute, t as renderSlot, p as createAstro, o as renderComponent } from './astro/server_DF0Xxt5-.mjs';
import 'kleur/colors';
import { g as getCollection, e as experiences, a as $$Icon, s as socials, $ as $$MainLayout } from './_astro_content_gL7k3uWi.mjs';
import { $ as $$InfoLine } from './InfoLine_Czceohae.mjs';
import { g as getSortedPosts } from './utils_DM1PlL_L.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$InlineLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InlineLink;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class=" dark:text-white font-medium dark:font-normal underline cursor-pointer decoration-zinc-300 hover:decoration-black duration-75 dark:decoration-neutral-700 dark:hover:decoration-white"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/components/InlineLink.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("project", ({ data }) => {
    return data.featured;
  });
  const sortedProjects = getSortedPosts(projects);
  const writings = await getCollection("writing", ({ data }) => {
    return data.featured;
  });
  const sortedWritings = getSortedPosts(writings);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Kaung Thant", "description": "Frontend Engineer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-16"> <section class="text-neutral-600 dark:text-neutral-400">
I am a self-taught <span class="text-black dark:text-white font-medium dark:font-normal">frontend engineer</span>. 
I’m all about creating digital products and love diving into new tech stuff.
</section> <section> <div class="flex flex-col gap-y-4 pl-4 border-l-2 border-neutral-200 dark:border-neutral-800"> ${experiences.map((exp) => renderTemplate`<div> <div class="text-neutral-500 text-sm"> ${exp.from} - ${exp.to} </div> <div class="font-medium dark:font-normal"> ${exp.role} <span class="text-neutral-600 dark:text-neutral-400 font-normal">@</span> ${renderComponent($$result2, "InlineLink", $$InlineLink, { "url": exp.companyUrl }, { "default": ($$result3) => renderTemplate`${exp.company}` })} </div> </div>`)} </div> </section> <section> <div class="flex justify-between items-center text-neutral-500 text-base"> <h2>Projects</h2> <a href="/projects" class="cursor-pointer hover:text-black dark:hover:text-white duration-75 text-sm flex">See all
${renderComponent($$result2, "Icon", $$Icon, { "class": " mt-0.5 ml-0.5", "name": "arrow-up-right", "size": 16 })} </a> </div> <div class="mt-2"> ${sortedProjects.map((project) => renderTemplate`${renderComponent($$result2, "InfoLine", $$InfoLine, { "href": `./projects/${project.slug}`, "title": project.data.title, "date": project.data.date })}`)} </div> </section> <section> <div class="flex justify-between items-center text-neutral-500 text-base"> <h2>Writings</h2> <a href="/writings" class="cursor-pointer hover:text-black dark:hover:text-white duration-75 text-sm flex">See all
${renderComponent($$result2, "Icon", $$Icon, { "class": " mt-0.5 ml-0.5", "name": "arrow-up-right", "size": 16 })} </a> </div> <div class="mt-2"> ${sortedWritings.map((writing) => renderTemplate`${renderComponent($$result2, "InfoLine", $$InfoLine, { "href": `./writings/${writing.slug}`, "title": writing.data.title, "date": writing.data.date })}`)} </div> </section> <section class="pb-8"> <h2 class="text-neutral-500">Connect</h2> <div class="mt-4"> ${socials.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="underline font-medium dark:font-normal mb-1 w-min flex items-center decoration-neutral-300 dark:decoration-neutral-700 group hover:decoration-black dark:hover:decoration-white duration-75"> <span>${social.name}</span> ${renderComponent($$result2, "Icon", $$Icon, { "class": " ml-0.5 text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white duration-75", "name": "move-up-right", "size": 12 })} </a>`)} </div> </section> </main> ` })}`;
}, "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
