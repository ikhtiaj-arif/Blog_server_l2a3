import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { TechServices } from "./tech.services";



const { createTechIntoDB, getAllTechsFromDB,deleteTechFromDB  } = TechServices;

const createTech = catchAsync(async (req, res) => {
//   const id = req?.user?._id;

    const result = await createTechIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Tech is created successfully!",
    data: result,
  });
});

const getTechs= catchAsync(async (req, res) => {
    const result = await getAllTechsFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Techs fetched successfully!",
      data: result,
    });
})



  const deleteTech = catchAsync(async (req, res) => {

    const id = req.params.id;
    const result = await deleteTechFromDB( id);
  
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Tech deleted successfully!",
      data: {},
    });
  });
  

export const TechControllers = {
  createTech,getTechs,deleteTech,
};
