import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: [true, "Title Name is required!"],
    },
    description: {
      type: String,
      required: [true, "Content is required!"],
    },
    tags: {
      type: [String],
      required: [true, "Tags are required!"],
    },
    image: {
      type: String,
      required: [true, "Image url is required!"],
    },
    live_link: {
      type: String,
      required: [true, "live link is required!"],
    },
    user: {
      type: String,
      required: [true, "user is required!"],
    },
  },
  {
    timestamps: true,
  }
);

// projectSchema.statics.isProjectAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };

export const Project = model<TProject>("Project", projectSchema);
