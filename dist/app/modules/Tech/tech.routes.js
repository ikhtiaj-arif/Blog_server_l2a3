"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechRoutes = void 0;
const express_1 = __importDefault(require("express"));
const tech_controller_1 = require("./tech.controller");
const router = express_1.default.Router();
const { getTechs, deleteTech, createTech } = tech_controller_1.TechControllers;
router.get("/skills", getTechs);
router.post("/skills", createTech);
router.delete("/skills/:id", deleteTech);
exports.TechRoutes = router;
