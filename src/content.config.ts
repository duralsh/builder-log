import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(["work", "project", "lifting", "coins"])),
    excerpt: z.string(),
    cover: z.string().optional(),
    github: z.string().url().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
