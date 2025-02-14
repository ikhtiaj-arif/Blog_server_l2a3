"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controllers_1 = require("./blog.controllers");
const router = express_1.default.Router();
const { createBlog, updateBlog, getOneBlog, deleteBlog, getAllBlogs } = blog_controllers_1.blogControllers;
router.get("/blogs", getAllBlogs);
router.post("/blogs", 
// auth("admin", "user"),
// ValidateRequest(BlogValidations.createBlogSchema),
createBlog);
router.get("/blogs/:id", getOneBlog);
router.patch("/blogs/:id", 
// auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
updateBlog);
router.delete("/blogs/:id", 
// auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
deleteBlog);
exports.blogRoutes = router;
