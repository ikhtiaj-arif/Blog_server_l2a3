import { z } from "zod";

const createBlogSchema = z.object({
  title: z.string().nonempty("Title Name is required!"),
  content: z.string().nonempty("Content is required!"),
  author: z.string().nonempty("Author is required!"),
  isPublished: z.boolean().optional(),
});

export const BlogValidations = {
  createBlogSchema,
};
