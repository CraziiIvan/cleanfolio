import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import { rehypePrettyCode } from "rehype-pretty-code";

export default defineConfig({
  integrations: [
    icon(),
    tailwind({ applyBaseStyles: false }),
    mdx({
      syntaxHighlight: "shiki",
      rehypePlugins: [
        [
          rehypePrettyCode,
        ],
      ],
    }),
    sitemap(),
    react(),
  ],
  server: {
    host: true,
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: vercel(),
});
