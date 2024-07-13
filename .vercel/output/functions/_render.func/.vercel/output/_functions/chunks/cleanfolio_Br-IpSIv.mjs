import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DF0Xxt5-.mjs';
import { $ as $$Image } from './_astro_assets_DA11OCTC.mjs';
import 'clsx';

const __0_______assets_cleanfolio_png__ = new Proxy({"src":"/_astro/cleanfolio.BR1Eb1Bx.png","width":1144,"height":858,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/assets/cleanfolio.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Cleanfolio",
  "description": "Minimal portfolio template",
  "date": "2024-06-01",
  "featured": true,
  "categories": ["personal", "portfolio", "minimal", "template"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 3,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    "astro-image": "astro-image",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cleanfolio"
      }), " is a minimal, clean, and monochrome portfolio template designed to showcase your work elegantly."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Cleanfolio minimalist portfolio template!",
        title: "Cleanfolio Demo",
        src: __0_______assets_cleanfolio_png__
      })
    }), "\n", createVNode(_components.h3, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Minimal and clean design"
      }), "\n", createVNode(_components.li, {
        children: "SEO-friendly"
      }), "\n", createVNode(_components.li, {
        children: "Performant and lightweight"
      }), "\n", createVNode(_components.li, {
        children: "Markdown Down Support (MDX)"
      }), "\n", createVNode(_components.li, {
        children: "Syntax highlightings"
      }), "\n", createVNode(_components.li, {
        children: "Dark mode"
      }), "\n", createVNode(_components.li, {
        children: "Easy customization"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Cleanfolio is developed to help you present your work. For installation and setup instructions, refer to the ", createVNode(_components.a, {
        href: "/writings/starter-guide",
        children: "Starter Guide for Cleanfolio"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/project/cleanfolio.mdx";
const file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/project/cleanfolio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/project/cleanfolio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
