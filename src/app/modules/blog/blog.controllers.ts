import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { blogServices } from "./blog.services";

const {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,getBlogFromDB
} = blogServices;

const createBlog = catchAsync(async (req, res) => {
  // const id = req?.user?._id;

  const result = await createBlogIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Blog is created successfully!",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  // const userID = req?.user?._id;
  const id = req.params.id;

  const result = await updateBlogIntoDB(req.body, id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog updated successfully!",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  // const userID = req?.user?._id;
  const id = req.params.id;
  // const user = req.body;

  const result = await deleteBlogFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog deleted successfully!",
    // data: {},
  });
});

const getOneBlog = catchAsync(async (req, res) => {
  // const userID = req?.user?._id;
  const id = req.params.id;
  // const user = req.body;

  const result = await getBlogFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog Fetched successfully!",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await getAllBlogsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blogs fetched successfully!",
    data: result,
  });
});

export const blogControllers = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getOneBlog,
};
