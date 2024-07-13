/* empty css                         */
import { m as createComponent, n as renderTemplate, o as renderComponent, q as maybeRenderHead } from './astro/server_DF0Xxt5-.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Icon, $ as $$MainLayout } from './_astro_content_gL7k3uWi.mjs';
import { g as getSortedPosts } from './utils_DM1PlL_L.mjs';
import { $ as $$InfoLine } from './InfoLine_Czceohae.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("project");
  const sortedProjects = getSortedPosts(projects);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Projects", "description": "Products I build" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="dark:text-neutral-400 text-neutral-600 dark:hover:text-white hover:text-black z-40 absolute duration-75 top-6"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "inline mb-0.5", "name": "undo-2", "size": 13 })} <span>Back</span> </a> <main class="grow"> <div> ${sortedProjects.map((project) => renderTemplate`${renderComponent($$result2, "InfoLine", $$InfoLine, { "href": `/projects/${project.slug}`, "title": project.data.title, "date": project.data.date })}`)} </div> </main> ` })}`;
}, "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/pages/projects/index.astro";
const $$url = "/projects";

export { $$Index as default, $$file as file, $$url as url };
