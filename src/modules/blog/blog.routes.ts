import express from "express";
import auth from "../../app/middlewears/auth";
import { blogControllers } from "./blog.controllers";
import ValidateRequest from "../../app/middlewears/ValidateRequest";
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
