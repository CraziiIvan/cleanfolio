import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind()],
  server: {
    host: true
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      }
    }
  },
  devToolbar: {
    enabled: false
  }
});