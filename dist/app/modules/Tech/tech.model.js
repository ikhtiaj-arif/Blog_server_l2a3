"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tech = void 0;
const mongoose_1 = require("mongoose");
const techSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
// TechSchema.statics.isTechAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };
exports.Tech = (0, mongoose_1.model)("Tech", techSchema);
