import { model, Schema } from "mongoose";

import { IBlog } from "./blog.interface";
import { User } from "../user/user.model";

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

blogSchema.pre('save', async function(id){
    const userAvailable = await User.findById(id)
    console.log(userAvailable);
})

export const Blog = model<IBlog>("Blog", blogSchema);
