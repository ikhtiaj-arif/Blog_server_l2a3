import { z } from "zod";

const createBlogSchema = z.object({
  body: z.object({
    title: z.string().nonempty("Title Name is required!"),
    content: z.string().nonempty("Content is required!"),
    author: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidations = {
  createBlogSchema,
};
