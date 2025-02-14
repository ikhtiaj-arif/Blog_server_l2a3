import AppError from "../../errors/AppError";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: TProject) => {
  const project = await Project.create(payload);
  return project;
};

const getAllProjectsFromDB = async () => {
  const projects = await Project.find();
  return projects;
};



const updateProjectsIntoDB = async (
  payload: Partial<TProject>,
  id: string
) => {
  try {
    const product = await Project.findById(id);
    if (!product) {
      console.error("Project not found!");
      return null;
    }

    const result = await Project.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      console.error("Failed to update Project");
      return null;
    }

    return result;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
};

const getOneProjectFromDB = async ( id: string) => {


  const projectToUpdate = await Project.findById(id);
  if (!projectToUpdate) {
    throw new AppError(404, "Project not found!");
  }

  const result = projectToUpdate
  return result;
};
const deleteProjectFromDB = async ( id: string) => {


  const projectToUpdate = await Project.findById(id);
  if (!projectToUpdate) {
    throw new AppError(404, "Project not found!");
  }

  const result = Project.findByIdAndDelete(id);
  return result;
};

export const projectServices = { createProjectIntoDB, getAllProjectsFromDB,updateProjectsIntoDB,deleteProjectFromDB,getOneProjectFromDB };
