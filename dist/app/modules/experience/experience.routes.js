"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
const { getExperiences, deleteExperience, createExperience } = experience_controller_1.ExperienceControllers;
router.get("/experience", getExperiences);
router.post("/experience", createExperience);
router.delete("/experience/:id", deleteExperience);
exports.experienceRoutes = router;
