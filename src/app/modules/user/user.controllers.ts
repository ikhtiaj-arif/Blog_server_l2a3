import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { userServices } from "./user.services";

const { createUserIntoDB, blockUserIntoDB, deleteBlogFromDB } = userServices;

const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "User is created successfully!",
    data: result,
  });
});

const blockUser = catchAsync(async (req, res) => {
  const blockId = req.params.userId;

  await blockUserIntoDB(blockId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User blocked successfully!",
    data: {},
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const blogId = req.params.id;

  await deleteBlogFromDB(blogId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog deleted successfully!",
    data: {},
  });
});

export const userControllers = {
  createUser,
  blockUser,
  deleteBlog,
};
