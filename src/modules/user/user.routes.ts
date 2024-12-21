import express from "express";
import auth from "../../app/middlewears/auth";
import { userControllers } from "./user.controllers";

const router = express.Router();

const { createUser, blockUser, deleteBlog } = userControllers;

router.post(
  "/auth/register",
  //   ValidateRequest(userValidations.createUserValidationSchema),
  createUser
);

router.patch("/admin/users/:userId/block", auth("admin"), blockUser);
router.delete("/admin/blogs/:id", auth("admin"), deleteBlog);

export const userRoutes = router;
