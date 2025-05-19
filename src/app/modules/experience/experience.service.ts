import AppError from "../../errors/AppError";
import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDB = async (payload: TExperience) => {
  const experience = await Experience.create(payload);
  return experience;
};

const getAllExperiencesFromDB = async () => {
  const Experiences = await Experience.find();
  return Experiences;
};




const deleteExperienceFromDB = async ( id: string) => {


  const ExperienceToUpdate = await Experience.findById(id);
  if (!ExperienceToUpdate) {
    throw new AppError(404, "Experience not found!");
  }

  const result = Experience.findByIdAndDelete(id);
  return result;
};

export const ExperienceServices = { createExperienceIntoDB, getAllExperiencesFromDB,deleteExperienceFromDB };
