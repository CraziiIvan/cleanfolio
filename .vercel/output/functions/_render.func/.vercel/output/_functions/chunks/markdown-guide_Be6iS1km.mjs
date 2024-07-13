import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DF0Xxt5-.mjs';
import { $ as $$Image } from './_astro_assets_DA11OCTC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Markdown in Cleanfolio",
  "description": "Minimal portfolio template",
  "date": "2024-06-01",
  "featured": true,
  "categories": ["guides", "markdown", "cleanfolio"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "basic-syntax",
    "text": "Basic Syntax"
  }, {
    "depth": 3,
    "slug": "headings",
    "text": "Headings"
  }, {
    "depth": 3,
    "slug": "bold-and-italic-text",
    "text": "Bold and Italic Text"
  }, {
    "depth": 3,
    "slug": "lists",
    "text": "Lists"
  }, {
    "depth": 3,
    "slug": "links",
    "text": "Links"
  }, {
    "depth": 3,
    "slug": "images",
    "text": "Images"
  }, {
    "depth": 3,
    "slug": "blockquotes",
    "text": "Blockquotes"
  }, {
    "depth": 3,
    "slug": "code",
    "text": "Code"
  }, {
    "depth": 3,
    "slug": "horizontal-rule",
    "text": "Horizontal Rule"
  }, {
    "depth": 2,
    "slug": "advanced-syntax",
    "text": "Advanced Syntax"
  }, {
    "depth": 3,
    "slug": "tables",
    "text": "Tables"
  }, {
    "depth": 3,
    "slug": "task-lists",
    "text": "Task Lists"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents."
    }), "\n", createVNode(_components.h2, {
      id: "basic-syntax",
      children: "Basic Syntax"
    }), "\n", createVNode(_components.h3, {
      id: "headings",
      children: "Headings"
    }), "\n", createVNode(_components.p, {
      children: ["You can create a heading by adding one or more ", createVNode(_components.code, {
        children: "#"
      }), " symbols before your heading text. The number of ", createVNode(_components.code, {
        children: "#"
      }), " symbols you use will determine the heading level."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "#"
        }), " for the largest heading (H1)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "##"
        }), " for the second largest heading (H2)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "###"
        }), " for the third largest heading (H3), and so on."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "# Heading 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "## Heading 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "### Heading 3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "bold-and-italic-text",
      children: "Bold and Italic Text"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["To make text bold, surround it with double asterisks ", createVNode(_components.code, {
          children: "**"
        }), " or double underscores ", createVNode(_components.code, {
          children: "__"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["To make text italic, surround it with single asterisks ", createVNode(_components.code, {
          children: "*"
        }), " or single underscores ", createVNode(_components.code, {
          children: "_"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["To make text both bold and italic, use triple asterisks ", createVNode(_components.code, {
          children: "***"
        }), " or triple underscores ", createVNode(_components.code, {
          children: "___"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "**Bold text**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              fontStyle: "italic",
              "--shiki-dark-font-style": "italic"
            },
            children: "*Italic text*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              fontStyle: "italic",
              "--shiki-dark-font-style": "italic"
            },
            children: "*Bold and italic text*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "**"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "lists",
      children: "Lists"
    }), "\n", createVNode(_components.p, {
      children: "You can create ordered and unordered lists."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Unordered List"
        }), ": Use asterisks ", createVNode(_components.code, {
          children: "*"
        }), ", plus signs ", createVNode(_components.code, {
          children: "+"
        }), ", or hyphens ", createVNode(_components.code, {
          children: "-"
        }), " for bullet points."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ordered List"
        }), ": Use numbers followed by periods."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " Item 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " Item 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " Item 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "1."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " First item"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "2."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " Second item"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "3."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " Third item"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "links",
      children: "Links"
    }), "\n", createVNode(_components.p, {
      children: ["To create a hyperlink, enclose the link text in brackets ", createVNode(_components.code, {
        children: "[ ]"
      }), " and then enclose the URL in parentheses ", createVNode(_components.code, {
        children: "( )"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF",
              "--shiki-dark": "#DBEDFF",
              textDecoration: "underline",
              "--shiki-dark-text-decoration": "underline"
            },
            children: "OpenAI"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "]("
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              textDecoration: "underline",
              "--shiki-dark-text-decoration": "underline"
            },
            children: "https://www.openai.com"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "images",
      children: "Images"
    }), "\n", createVNode(_components.p, {
      children: ["To add an image, use an exclamation mark ", createVNode(_components.code, {
        children: "!"
      }), " followed by alt text in brackets ", createVNode(_components.code, {
        children: "[ ]"
      }), " and the image URL in parentheses ", createVNode(_components.code, {
        children: "( )"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "!["
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF",
              "--shiki-dark": "#DBEDFF",
              textDecoration: "underline",
              "--shiki-dark-text-decoration": "underline"
            },
            children: "Alt text"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "]("
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8",
              textDecoration: "underline",
              "--shiki-dark-text-decoration": "underline"
            },
            children: "https://www.example.com/image.jpg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "blockquotes",
      children: "Blockquotes"
    }), "\n", createVNode(_components.p, {
      children: ["To create a blockquote, start a line with a ", createVNode(_components.code, {
        children: ">"
      }), " symbol."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#85E89D",
              "--shiki-dark": "#85E89D"
            },
            children: "> This is a blockquote."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "code",
      children: "Code"
    }), "\n", createVNode(_components.p, {
      children: ["To denote inline code, wrap it with backticks ", createVNode(_components.code, {
        children: "`"
      }), ". For a code block, use triple backticks ", createVNode(_components.code, {
        children: "```"
      }), " or indent the lines with four spaces."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "Inline "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF"
            },
            children: "`code`"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " example."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is a code block."
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
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0",
              "--shiki-dark": "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF",
              "--shiki-dark": "#9ECBFF"
            },
            children: "\"Hello, world!\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "horizontal-rule",
      children: "Horizontal Rule"
    }), "\n", createVNode(_components.p, {
      children: ["To create a horizontal rule, use three or more hyphens ", createVNode(_components.code, {
        children: "---"
      }), ", asterisks ", createVNode(_components.code, {
        children: "***"
      }), ", or underscores ", createVNode(_components.code, {
        children: "___"
      }), " on a line by themselves."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#79B8FF",
              "--shiki-dark": "#79B8FF",
              fontWeight: "bold",
              "--shiki-dark-font-weight": "bold"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "advanced-syntax",
      children: "Advanced Syntax"
    }), "\n", createVNode(_components.h3, {
      id: "tables",
      children: "Tables"
    }), "\n", createVNode(_components.p, {
      children: ["To create a table, use pipes ", createVNode(_components.code, {
        children: "|"
      }), " and hyphens ", createVNode(_components.code, {
        children: "-"
      }), " to define the table structure."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "| Header 1 | Header 2 |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "| -------- | -------- |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "| Row 1    | Data 1   |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "| Row 2    | Data 2   |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "task-lists",
      children: "Task Lists"
    }), "\n", createVNode(_components.p, {
      children: ["To create a task list, use square brackets ", createVNode(_components.code, {
        children: "[ ]"
      }), " for unchecked and ", createVNode(_components.code, {
        children: "[x]"
      }), " for checked items."]
    }), "\n", createVNode(_components.p, {
      children: "Example:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " [ ] Task 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70",
              "--shiki-dark": "#FFAB70"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF",
              "--shiki-dark": "#DBEDFF",
              textDecoration: "underline",
              "--shiki-dark-text-decoration": "underline"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8",
              "--shiki-dark": "#E1E4E8"
            },
            children: "] Task 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Markdown is a simple and powerful way to format text. By learning its basic syntax, you can easily create documents, write posts, or add formatting to any plaintext file."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "This guide should help beginners understand the basics of Markdown and how to use it to format text."
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

const url = "src/content/writing/markdown-guide.mdx";
const file = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/writing/markdown-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Lucky/OneDrive/Desktop/cleanfolio/src/content/writing/markdown-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
