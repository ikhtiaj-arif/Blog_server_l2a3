import express from "express";
import { TechControllers } from "./tech.controller";


const router = express.Router();
const { getTechs,deleteTech,createTech} =
  TechControllers;

router.get("/skills", getTechs);

router.post(
  "/skills",
  createTech
);


router.delete(
  "/skills/:id",
  deleteTech
);

export const TechRoutes = router;
