import { model, Schema } from "mongoose";
export type TTech = {
  icon: string;
  name: string;
};

const techSchema = new Schema<TTech>(
  {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// TechSchema.statics.isTechAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };

export const Tech = model<TTech>("Tech", techSchema);
