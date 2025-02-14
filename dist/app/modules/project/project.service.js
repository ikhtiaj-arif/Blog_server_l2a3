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
exports.projectServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = require("./project.model");
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.Project.create(payload);
    return project;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_model_1.Project.find();
    return projects;
});
const updateProjectsIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield project_model_1.Project.findById(id);
        if (!product) {
            console.error("Project not found!");
            return null;
        }
        const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            console.error("Failed to update Project");
            return null;
        }
        return result;
    }
    catch (error) {
        console.error("Error updating project:", error);
        throw new Error("Failed to update project");
    }
});
const getOneProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectToUpdate = yield project_model_1.Project.findById(id);
    if (!projectToUpdate) {
        throw new AppError_1.default(404, "Project not found!");
    }
    const result = projectToUpdate;
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectToUpdate = yield project_model_1.Project.findById(id);
    if (!projectToUpdate) {
        throw new AppError_1.default(404, "Project not found!");
    }
    const result = project_model_1.Project.findByIdAndDelete(id);
    return result;
});
exports.projectServices = { createProjectIntoDB, getAllProjectsFromDB, updateProjectsIntoDB, deleteProjectFromDB, getOneProjectFromDB };
