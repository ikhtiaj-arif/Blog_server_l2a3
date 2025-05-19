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
exports.TechControllers = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utils/SendResponse"));
const tech_services_1 = require("./tech.services");
const { createTechIntoDB, getAllTechsFromDB, deleteTechFromDB } = tech_services_1.TechServices;
const createTech = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const id = req?.user?._id;
    const result = yield createTechIntoDB(req.body);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Tech is created successfully!",
        data: result,
    });
}));
const getTechs = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllTechsFromDB();
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Techs fetched successfully!",
        data: result,
    });
}));
const deleteTech = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield deleteTechFromDB(id);
    (0, SendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Tech deleted successfully!",
        data: {},
    });
}));
exports.TechControllers = {
    createTech, getTechs, deleteTech,
};
