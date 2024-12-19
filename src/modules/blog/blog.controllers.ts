import catchAsync from "../../app/utils/CatchAsync";
import sendResponse from "../../app/utils/SendResponse";
import { blogServices } from "./blog.services";

const { createBlogIntoDB } = blogServices;

const createBlog = catchAsync(async (req, res) => {
  const result = await createBlogIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Blog is created successfully!",
    data: result,
  });
});

export const blogControllers = {
  createBlog,
};
