import { defineCollection, z } from "astro:content"

const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
      order: z.number(),
    }),
})

export const collections = {
  works: worksCollection,
}
