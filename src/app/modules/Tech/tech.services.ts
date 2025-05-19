import AppError from "../../errors/AppError";
import { Tech, TTech } from "./tech.model";



const createTechIntoDB = async (payload: TTech) => {
  const tech = await Tech.create(payload);
  return tech;
};

const getAllTechsFromDB = async () => {
  const Techs = await Tech.find();
  return Techs;
};

const deleteTechFromDB = async (id: string) => {
  const TechToUpdate = await Tech.findById(id);
  if (!TechToUpdate) {
    throw new AppError(404, "Tech not found!");
  }

  const result = Tech.findByIdAndDelete(id);
  return result;
};

export const TechServices = {
  createTechIntoDB,
  getAllTechsFromDB,
  deleteTechFromDB,
};
