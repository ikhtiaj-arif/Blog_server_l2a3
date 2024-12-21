import catchAsync from "../../app/utils/CatchAsync";
import sendResponse from "../../app/utils/SendResponse";
import { blogServices } from "./blog.services";

const { createBlogIntoDB,updateBlogIntoDB,deleteBlogFromDB, getAllBlogsFromDB } = blogServices;

const createBlog = catchAsync(async (req, res) => {
const id = req?.user?._id


  const result = await createBlogIntoDB(req.body, id);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Blog is created successfully!",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {

  const userID = req?.user?._id
  const id = req.params.id

  const result = await updateBlogIntoDB(req.body, userID, id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog updated successfully!",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const userID = req?.user?._id
  const id = req.params.id
  const result = await deleteBlogFromDB( userID, id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog deleted successfully!",
    data: {},
  });

})

const getAllBlogs = catchAsync(async(req, res)=>{
const result = await getAllBlogsFromDB(req.query)

sendResponse(res, {
  success: true,
  statusCode: 200,
  message: "Blogs fetched successfully!",
  data: result,
});
})


export const blogControllers = {
  createBlog,updateBlog,deleteBlog,getAllBlogs
};
