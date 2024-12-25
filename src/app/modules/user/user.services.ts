import AppError from "../../errors/AppError";
import { Blog } from "../blog/blog.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";


const blockUserIntoDB = async (blockId: string) => {
  const result = User.findByIdAndUpdate(blockId, { isBlocked: true });
  return result;
};
const deleteBlogFromDB = async (blogId: string) => {
  const doesBlogExists = await Blog.isBlogAvailable(blogId);
  console.log(blogId);
  if (!doesBlogExists) {
    throw new AppError(404, "Blog not found!");
  }
  const result = Blog.findByIdAndDelete(blogId);
  return result;
};

export const userServices = {

  blockUserIntoDB,
  deleteBlogFromDB,
};
