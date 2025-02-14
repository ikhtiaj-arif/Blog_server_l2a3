"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
const { createProject, getProjects, updateProject, deleteProject, getOneProject } = project_controller_1.projectControllers;
router.get("/projects", getProjects);
router.post("/projects", 
//   auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
createProject);
router.get("/project/:id", 
//   auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
getOneProject);
router.patch("/project/:id", 
//   auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
updateProject);
router.delete("/project/:id", 
//   auth("admin", "user"),
//   ValidateRequest(BlogValidations.createBlogSchema),
deleteProject);
exports.projectRoutes = router;
