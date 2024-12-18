import express from "express";
import { userControllers } from "./user.controllers";

const router = express.Router();

const { createUser } = userControllers;

router.post("/auth/register", createUser);

export const userRoutes = router;
