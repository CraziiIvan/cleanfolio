import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-dark",
        dark: "github-dark"
      }
    }
  }), sitemap()],
  server: {
    host: true,
    port: 3000,
  },
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: vercel()
});