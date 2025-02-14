import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema = new Schema<TMessage>(
  {
    name: {
      type: String,
      required: [true, "Title Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Content is required!"],
    },
    message: {
      type: String,
      required: [true, "Content is required!"],
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

export const Message = model<TMessage>("Message", messageSchema);
