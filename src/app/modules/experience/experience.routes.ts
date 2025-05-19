import express from "express";
import { ExperienceControllers } from "./experience.controller";


const router = express.Router();
const { getExperiences,deleteExperience,createExperience} =
  ExperienceControllers;

router.get("/experience", getExperiences);

router.post(
  "/experience",
  createExperience
);


router.delete(
  "/experience/:id",
  deleteExperience
);

export const experienceRoutes = router;
