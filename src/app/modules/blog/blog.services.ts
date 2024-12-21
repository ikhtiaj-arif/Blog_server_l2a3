import mongoose from "mongoose";
import QueryBuilder from "../../builder/QureyBuilder";
import AppError from "../../errors/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async (
  payload: IBlog,
  id: mongoose.Types.ObjectId
) => {
  if (!id) {
    throw new AppError(404, "user not found");
  }

  payload.author = id;

  const blog = (await Blog.create(payload)).populate("author");

  return blog;
};

const updateBlogIntoDB = async (
  payload: Partial<IBlog>,
  userID: string,
  id: string
) => {
  if (!userID) {
    throw new AppError(404, "user not found");
  }

  const blogToUpdate = await Blog.findById(id);

  if (!blogToUpdate) {
    throw new AppError(404, "Blog not found!");
  }

  if (userID.toString() !== blogToUpdate?.author?.toString()) {
    throw new AppError(403, "Unauthorized user!");
  }

  const result = Blog.findByIdAndUpdate(id, payload).populate("author");
  return result;
};

const deleteBlogFromDB = async (userID: string, id: string) => {
  if (!userID) {
    throw new AppError(404, "user not found");
  }

  const blogToUpdate = await Blog.findById(id);
  if (!blogToUpdate) {
    throw new AppError(404, "Blog not found!");
  }

  if (userID.toString() !== blogToUpdate?.author?.toString()) {
    throw new AppError(403, "Unauthorized user!");
  }

  const result = Blog.findByIdAndDelete(id);
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate("author"), query)
    .search(["title", "content"])
    .sort()
    .filter();

  const result = await blogQuery.modelQuery;
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
