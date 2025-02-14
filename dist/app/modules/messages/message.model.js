"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
// projectSchema.statics.isProjectAvailable = async function (id: string) {
//   return await Blog.findById(id);
// };
exports.Message = (0, mongoose_1.model)("Message", messageSchema);
