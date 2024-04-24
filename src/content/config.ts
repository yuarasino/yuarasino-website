import { defineCollection, z } from "astro:content"

const worksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      thumbnail: image(),
    }),
})

export const collections = {
  works: worksCollection,
}
