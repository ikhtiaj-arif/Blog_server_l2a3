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
exports.projectControllers = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utils/SendResponse"));
const project_service_1 = require("./project.service");
const { createProjectIntoDB, getAllProjectsFromDB, updateProjectsIntoDB, deleteProjectFromDB, getOneProjectFromDB } = project_service_1.projectServices;
const createProject = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const id = req?.user?._id;
    const result = yield createProjectIntoDB(req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Project is created successfully!",
        data: result,
    });
}));
const getProjects = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllProjectsFromDB();
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Projects fetched successfully!",
        data: result,
    });
}));
const updateProject = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield updateProjectsIntoDB(req.body, id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Project updated successfully!",
        data: result,
    });
}));
const getOneProject = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield getOneProjectFromDB(id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Project deleted successfully!",
        data: result,
    });
}));
const deleteProject = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield deleteProjectFromDB(id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Project deleted successfully!",
        data: {},
    });
}));
exports.projectControllers = {
    createProject, getProjects, updateProject, deleteProject, getOneProject
};
