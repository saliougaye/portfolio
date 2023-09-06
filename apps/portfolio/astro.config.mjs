import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sanity from '@sanity/astro'
import { loadEnv } from "vite";
import image from "@astrojs/image";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "")

export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [
    tailwind(),
    image(
      {
        serviceEntryPoint: '@astrojs/image/sharp',
        cacheDir: "./.cache/image",
        logLevel: 'debug',
      },
    ),
    sanity({
      projectId: env.SANITY_PROJECT_ID,
      dataset: env.SANITY_DATASET,
      useCdn: false
    })]
});