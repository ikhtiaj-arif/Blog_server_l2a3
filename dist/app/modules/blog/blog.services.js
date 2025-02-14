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
exports.blogServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload
// id: mongoose.Types.ObjectId
) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload.user) {
        throw new AppError_1.default(404, "user not found");
    }
    // payload.author = id;
    const blog = yield blog_model_1.Blog.create(payload);
    return blog;
});
const updateBlogIntoDB = (payload, 
// userID: string,
id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(payload === null || payload === void 0 ? void 0 : payload.user)) {
        throw new AppError_1.default(404, "user not found");
    }
    const blogToUpdate = yield blog_model_1.Blog.findById(id);
    if (!blogToUpdate) {
        throw new AppError_1.default(404, "Blog not found!");
    }
    // if (userID.toString() !== blogToUpdate?.author?.toString()) {
    //   throw new AppError(403, "Unauthorized user!");
    // }
    if ((payload === null || payload === void 0 ? void 0 : payload.user) !== (blogToUpdate === null || blogToUpdate === void 0 ? void 0 : blogToUpdate.user)) {
        throw new AppError_1.default(403, "Unauthorized user!");
    }
    const result = blog_model_1.Blog.findByIdAndUpdate(id, payload);
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // if (user) {
    //   throw new AppError(404, "user not found");
    // }
    const blogToUpdate = yield blog_model_1.Blog.findById(id);
    if (!blogToUpdate) {
        throw new AppError_1.default(404, "Blog not found!");
    }
    // if (user !== blogToUpdate?.user) {
    //   throw new AppError(403, "Unauthorized user!");
    // }
    const result = blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
const getBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = blog_model_1.Blog.findById(id);
    return result;
});
const getAllBlogsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const blogQuery = new QueryBuilder(Blog.find().populate("author"), query)
    //   .search(["title", "content"])
    //   .sort()
    //   .filter();
    const result = yield blog_model_1.Blog.find();
    return result;
});
exports.blogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
    getBlogFromDB,
};
