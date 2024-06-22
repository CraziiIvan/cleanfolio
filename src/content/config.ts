import { z, defineCollection } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  project,
};
