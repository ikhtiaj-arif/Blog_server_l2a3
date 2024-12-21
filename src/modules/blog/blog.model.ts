import { model, Schema } from "mongoose";

import { BlogModel, IBlog } from "./blog.interface";
import AppError from "../../app/errors/AppError";

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Title Name is required!"],
    },
    content: {
      type: String,
      required: [true, "Content is required!"],
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, "Author is required!"],
      ref: "User",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.statics.isBlogAvailable = async function (id: string) {
  return await Blog.findById(id);
};

export const Blog = model<IBlog, BlogModel>("Blog", blogSchema);
