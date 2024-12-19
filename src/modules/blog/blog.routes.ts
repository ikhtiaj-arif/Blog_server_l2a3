import express from "express";
import { blogControllers } from "./blog.controllers";

const router = express.Router();
const { createBlog } = blogControllers;
router.post(
  "/blogs",
  //   ValidateRequest(BlogValidations.createBlogSchema),
  createBlog
);

export const blogRoutes = router;
