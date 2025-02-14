import { model, Schema } from "mongoose";

import { BlogModel, IBlog } from "./blog.interface";

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
    user: {
      type: String,
      required: [true, "user is required!"],
    },
    image: {
      type: String,
      required: [true, "Image url is required!"],
    },
    // author: {
    //   type: Schema.Types.ObjectId,
    //   required: [true, "Author is required!"],
    //   ref: "User",
    // },
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
