import express from "express";
import auth from "../../middlewears/auth";
import ValidateRequest from "../../middlewears/ValidateRequest";
import { blogControllers } from "./blog.controllers";
import { BlogValidations } from "./blog.validations";

const router = express.Router();
const { createBlog, updateBlog, deleteBlog, getAllBlogs } = blogControllers;

router.get("/blogs", getAllBlogs);

router.post(
  "/blogs",
  auth("admin", "user"),
  ValidateRequest(BlogValidations.createBlogSchema),
  createBlog
);
router.patch(
  "/blogs/:id",
  auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  updateBlog
);
router.delete(
  "/blogs/:id",
  auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  deleteBlog
);

export const blogRoutes = router;
