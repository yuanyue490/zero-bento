import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema,

  //   schema: z.object({
  //     title: z.string(),
  //     description: z.string(),
  //     pubDate: z.coerce.date(),
  //     updatedDate: z.coerce.date().optional(),
  //   }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    coverImage: z.string().optional(),
    client: z.string().optional(),
    tags: z.array(z.string()).optional(),
    portfolioImages: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional()
      })
    ).optional()
  }),
});

export const collections = { blog, portfolio };
