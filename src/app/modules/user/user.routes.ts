import express from "express";
import auth from "../../middlewears/auth";
import { userControllers } from "./user.controllers";
import { userValidations } from "./user.validation";
import ValidateRequest from "../../middlewears/ValidateRequest";

const router = express.Router();

const { blockUser, deleteBlog } = userControllers;

router.patch("/admin/users/:userId/block", auth("admin"), blockUser);
router.delete("/admin/blogs/:id", auth("admin"), deleteBlog);

export const userRoutes = router;
