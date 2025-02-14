import express from "express";
import { projectControllers } from "./project.controller";

const router = express.Router();
const { createProject, getProjects, updateProject, deleteProject, getOneProject } =
  projectControllers;

router.get("/projects", getProjects);

router.post(
  "/projects",
  //   auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  createProject
);
router.get(
  "/project/:id",
  //   auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  getOneProject
);
router.patch(
  "/project/:id",
  //   auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  updateProject
);
router.delete(
  "/project/:id",
  //   auth("admin", "user"),
  //   ValidateRequest(BlogValidations.createBlogSchema),
  deleteProject
);

export const projectRoutes = router;
