import express from "express";
import { AuthControllers } from "./auth.controllers";


const router = express.Router();
const { loginUser } = AuthControllers;
router.post(
  "/auth/login",
  //   ValidateRequest(BlogValidations.createBlogSchema),
  loginUser
);

export const AuthRoutes = router;
