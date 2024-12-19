import express from "express";
import { userControllers } from "./user.controllers";
import ValidateRequest from "../../app/middlewears/ValidateRequest";
import { userValidations } from "./user.validation";

const router = express.Router();

const { createUser } = userControllers;

router.post(
  "/auth/register",
//   ValidateRequest(userValidations.createUserValidationSchema),
  createUser
);

export const userRoutes = router;
