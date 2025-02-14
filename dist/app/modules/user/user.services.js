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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("../blog/blog.model");
const user_model_1 = require("./user.model");
const blockUserIntoDB = (blockId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.User.findByIdAndUpdate(blockId, { isBlocked: true });
    return result;
});
const deleteBlogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const doesBlogExists = yield blog_model_1.Blog.isBlogAvailable(blogId);
    console.log(blogId);
    if (!doesBlogExists) {
        throw new AppError_1.default(404, "Blog not found!");
    }
    const result = blog_model_1.Blog.findByIdAndDelete(blogId);
    return result;
});
exports.userServices = {
    blockUserIntoDB,
    deleteBlogFromDB,
};
