"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
blogSchema.statics.isBlogAvailable = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.Blog.findById(id);
    });
};
exports.Blog = (0, mongoose_1.model)("Blog", blogSchema);
