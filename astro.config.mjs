import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/config";
import i18next from 'astro-i18next'; 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), i18next()],
  server: {
    hmr: true,
    host: true,
    port: 3000
  },
  site: SITE_URL,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});
