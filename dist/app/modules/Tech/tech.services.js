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
exports.TechServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const tech_model_1 = require("./tech.model");
const createTechIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const tech = yield tech_model_1.Tech.create(payload);
    return tech;
});
const getAllTechsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const Techs = yield tech_model_1.Tech.find();
    return Techs;
});
const deleteTechFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const TechToUpdate = yield tech_model_1.Tech.findById(id);
    if (!TechToUpdate) {
        throw new AppError_1.default(404, "Tech not found!");
    }
    const result = tech_model_1.Tech.findByIdAndDelete(id);
    return result;
});
exports.TechServices = {
    createTechIntoDB,
    getAllTechsFromDB,
    deleteTechFromDB,
};
