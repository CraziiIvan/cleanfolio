import { z, defineCollection } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    featured: z.boolean(),
    categories: z.array(z.string())
  }),
});

const index = defineCollection({});

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    featured: z.boolean(),
    categories: z.array(z.string())
  }),
});

export const collections = {
  project,
  writing,
  index,
};
