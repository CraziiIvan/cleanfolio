import { z, defineCollection } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    select: z.boolean()
  }),
});

export const collections = {
  project,
};
