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
    source_code_link_client: {
      type: String,
      required: [true, "Client Repository is required!"],
    },
    source_code_link_server: {
      type: String,
      required: [true, "Server Repository is required!"],
    },
    // user: {
    //   type: String,
    //   required: [true, "user is required!"],
    // },
  },
  {
    timestamps: true,
  }
);

// projectSchema.statics.isProjectAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };

export const Project = model<TProject>("Project", projectSchema);
