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
exports.blogControllers = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utils/SendResponse"));
const blog_services_1 = require("./blog.services");
const { createBlogIntoDB, updateBlogIntoDB, deleteBlogFromDB, getAllBlogsFromDB, getBlogFromDB } = blog_services_1.blogServices;
const createBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req?.user?._id;
    const result = yield createBlogIntoDB(req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Blog is created successfully!",
        data: result,
    });
}));
const updateBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userID = req?.user?._id;
    const id = req.params.id;
    const result = yield updateBlogIntoDB(req.body, id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Blog updated successfully!",
        data: result,
    });
}));
const deleteBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userID = req?.user?._id;
    const id = req.params.id;
    // const user = req.body;
    const result = yield deleteBlogFromDB(id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Blog deleted successfully!",
        // data: {},
    });
}));
const getOneBlog = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userID = req?.user?._id;
    const id = req.params.id;
    // const user = req.body;
    const result = yield getBlogFromDB(id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Blog Fetched successfully!",
        data: result,
    });
}));
const getAllBlogs = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllBlogsFromDB(req.query);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Blogs fetched successfully!",
        data: result,
    });
}));
exports.blogControllers = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getOneBlog,
};
