import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    company_logo: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    job_title: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
    },
    bullet_points: {
      type: [String],
      required: true,
      validate: [
        (val: string[]) => val.length > 0,
        "At least one bullet point is required",
      ],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// ExperienceSchema.statics.isExperienceAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };

export const Experience = model<TExperience>("Experience", experienceSchema);
