import { z, defineCollection } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    featured: z.boolean()
  }),
});

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    featured: z.boolean()
  }),
});

export const collections = {
  project,
  writing
};
