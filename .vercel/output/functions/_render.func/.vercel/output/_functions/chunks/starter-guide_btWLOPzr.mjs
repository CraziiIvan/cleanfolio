import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DF0Xxt5-.mjs';
import { $ as $$Image } from './_astro_assets_DA11OCTC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cleanfolio starter guide",
  "description": "Minimal portfolio template",
  "date": "2024-06-01",
  "featured": true,
  "categories": ["guides", "starter", "cleanfolio"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "table-of-contents",
    "text": "Table of Contents"
  }, {
    "depth": 3,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "folder-structure",
    "text": "Folder Structure"
  }, {
    "depth": 3,
    "slug": "updating-content",
    "text": "Updating Content"
  }, {
    "depth": 3,
    "slug": "deploying-your-portfolio",
    "text": "Deploying Your Portfolio"
  }, {
    "depth": 3,
    "slug": "contact-information",
    "text": "Contact Information"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This guide will help you get started with setting up and customizing the Cleanfolio template. Follow the steps below to install the necessary dependencies and understand the folder structure."
    }), "\n", createVNode(_components.h3, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#installation",
          children: "Installation"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#folder-structure",
          children: "Folder Structure"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#updating-content",
          children: "Updating Content"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#deploying-your-portfolio",
          children: "Deploying Your Portfolio"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#contact-information",
          children: "Contact Information"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.p, {
      children: "To get started with Cleanfolio, clone the repository and install the necessary dependencies."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-dark github-dark",
      style: {
        backgroundColor: "#24292e",
        "--shiki-dark-bg": "#24292e",
        color: "#e1e4e8",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0",
              "--shiki-dark": "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " https://github.com/CraziiIvan/cleanfolio.git"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " cleanfolio"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0",
              "--shiki-dark": "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "folder-structure",
      children: "Folder Structure"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-dark github-dark",
      style: {
        backgroundColor: "#24292e",
        "--shiki-dark-bg": "#24292e",
        color: "#e1e4e8",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cleanfolio/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── public/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── src/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── assets/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── icons/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── content/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── project/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── writing/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── layouts/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── pages/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── components/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── lib/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ ├── App.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│ └── types.ts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── .gitignore"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── README.md"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "src/"
        }), ": Source code for components, pages, and styles."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "assets/"
        }), ": Assets like images and fonts."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "layouts/"
        }), ": Layout components."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pages/"
        }), ": Page components (Home, Projects, Writings)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "components/"
        }), ": Reusable UI components."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "content/"
        }), ": Markdown files for content."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "lib/"
        }), ": Utility functions and constants."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pages/index.astro"
        }), ": Entry point for the application."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "updating-content",
      children: "Updating Content"
    }), "\n", createVNode(_components.p, {
      children: "If you don’t want to customize further, you can just update the content in the following files."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Home Page"
        }), ": Modify the content in ", createVNode(_components.code, {
          children: "src/pages/index.astro"
        }), " and ", createVNode(_components.code, {
          children: "src/lib/constants.ts"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Projects Page"
        }), ": Manage your project posts in ", createVNode(_components.code, {
          children: "src/content/project/"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Writings Page"
        }), ": Manage your blog posts in ", createVNode(_components.code, {
          children: "src/content/writing/"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Content Photos"
        }), ": Manage your content photos in ", createVNode(_components.code, {
          children: "src/assets/"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "deploying-your-portfolio",
      children: "Deploying Your Portfolio"
    }), "\n", createVNode(_components.p, {
      children: "To deploy your portfolio, you can use services like Netlify, Vercel, or GitHub Pages. Here’s a quick guide for deploying with Vercel:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Build the project"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-dark github-dark",
      style: {
        backgroundColor: "#24292e",
        "--shiki-dark-bg": "#24292e",
        color: "#e1e4e8",
        "--shiki-dark": "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0",
              "--shiki-dark": "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: " build"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Deploy"
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["Log in to ", createVNode(_components.a, {
              href: "https://vercel.com/",
              children: "Netlify"
            }), "."]
          }), "\n", createVNode(_components.li, {
            children: "Create a new repository with Git."
          }), "\n", createVNode(_components.li, {
            children: "Connect your repository and deploy."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "contact-information",
      children: "Contact Information"
    }), "\n", createVNode(_components.p, {
      children: ["For support or questions, please reach out via email at ", createVNode(_components.a, {
        href: "mailto:luckybn310@gmail.com",
        children: "luckybn310@gmail.com"
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

const url = "src/content/writing/starter-guide.mdx";
const file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/writing/starter-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/writing/starter-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
