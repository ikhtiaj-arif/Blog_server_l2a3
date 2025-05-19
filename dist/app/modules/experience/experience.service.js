"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const experience_model_1 = require("./experience.model");
const createExperienceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const experience = yield experience_model_1.Experience.create(payload);
    return experience;
});
const getAllExperiencesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const Experiences = yield experience_model_1.Experience.find();
    return Experiences;
});
const deleteExperienceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ExperienceToUpdate = yield experience_model_1.Experience.findById(id);
    if (!ExperienceToUpdate) {
        throw new AppError_1.default(404, "Experience not found!");
    }
    const result = experience_model_1.Experience.findByIdAndDelete(id);
    return result;
});
exports.ExperienceServices = { createExperienceIntoDB, getAllExperiencesFromDB, deleteExperienceFromDB };
