import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dogusural.xyz",
  integrations: [sitemap()],
  // Pages that were retired, kept answering so links already out there land
  // somewhere useful.
  redirects: {
    "/hobbies/lifting": "/hobbies",
    "/hobbies/coins": "/hobbies/coins/collection",
    "/posts/keep-it-basic": "/hobbies",
  },
});
