import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { projectServices } from "./project.service";

const { createProjectIntoDB, getAllProjectsFromDB,updateProjectsIntoDB,deleteProjectFromDB,getOneProjectFromDB  } = projectServices;

const createProject = catchAsync(async (req, res) => {
//   const id = req?.user?._id;

    const result = await createProjectIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Project is created successfully!",
    data: result,
  });
});

const getProjects= catchAsync(async (req, res) => {
    const result = await getAllProjectsFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Projects fetched successfully!",
      data: result,
    });
})

const updateProject = catchAsync(async (req, res) => {
 
    const id = req.params.id;
  
    const result = await updateProjectsIntoDB(req.body,  id);
  
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Project updated successfully!",
      data: result,
    });
  });
  
  const getOneProject = catchAsync(async (req, res) => {

    const id = req.params.id;
    const result = await getOneProjectFromDB( id);
  
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Project deleted successfully!",
      data:result,
    });
  });
  const deleteProject = catchAsync(async (req, res) => {

    const id = req.params.id;
    const result = await deleteProjectFromDB( id);
  
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Project deleted successfully!",
      data: {},
    });
  });
  

export const projectControllers = {
  createProject,getProjects,updateProject,deleteProject,getOneProject
};
