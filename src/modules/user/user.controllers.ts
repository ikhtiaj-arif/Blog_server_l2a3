import { Request, Response } from "express";
import { userServices } from "./user.services";
import catchAsync from "../../app/utils/CatchAsync";
import sendResponse from "../../app/utils/SendResponse";

const { createUserIntoDB } = userServices;

const createUser = catchAsync(async (req, res) => {


    const result = await createUserIntoDB(req.body);

sendResponse(res,{
  success: true,
  statusCode:201,
  message: "User is created successfully!",
  data: result,
})
  

}) ;

export const userControllers = {
  createUser,
};
