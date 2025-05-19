"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
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
            (val) => val.length > 0,
            "At least one bullet point is required",
        ],
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
// ExperienceSchema.statics.isExperienceAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };
exports.Experience = (0, mongoose_1.model)("Experience", experienceSchema);
