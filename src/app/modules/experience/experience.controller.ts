import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { ExperienceServices } from "./experience.service";


const { createExperienceIntoDB, getAllExperiencesFromDB,deleteExperienceFromDB  } = ExperienceServices;

const createExperience = catchAsync(async (req, res) => {
//   const id = req?.user?._id;

    const result = await createExperienceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Experience is created successfully!",
    data: result,
  });
});

const getExperiences= catchAsync(async (req, res) => {
    const result = await getAllExperiencesFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Experiences fetched successfully!",
      data: result,
    });
})



  const deleteExperience = catchAsync(async (req, res) => {

    const id = req.params.id;
    const result = await deleteExperienceFromDB( id);
  
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Experience deleted successfully!",
      data: {},
    });
  });
  

export const ExperienceControllers = {
  createExperience,getExperiences,deleteExperience,
};
