"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewears/auth"));
const ValidateRequest_1 = __importDefault(require("../../middlewears/ValidateRequest"));
const blog_controllers_1 = require("./blog.controllers");
const blog_validations_1 = require("./blog.validations");
const router = express_1.default.Router();
const { createBlog, updateBlog, deleteBlog, getAllBlogs } = blog_controllers_1.blogControllers;
router.get("/blogs", getAllBlogs);
router.post("/blogs", (0, auth_1.default)("admin", "user"), (0, ValidateRequest_1.default)(blog_validations_1.BlogValidations.createBlogSchema), createBlog);
router.patch("/blogs/:id", (0, auth_1.default)("admin", "user"), 
//   ValidateRequest(BlogValidations.createBlogSchema),
updateBlog);
router.delete("/blogs/:id", (0, auth_1.default)("admin", "user"), 
//   ValidateRequest(BlogValidations.createBlogSchema),
deleteBlog);
exports.blogRoutes = router;
