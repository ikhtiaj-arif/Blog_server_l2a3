import { Model, Types } from "mongoose";

export interface IBlog {
  title: string;
  content: string;
  author?: Types.ObjectId;
  isPublished: boolean;
}
export interface BlogModel extends Model<IBlog> {
  //create methods
  isBlogAvailable(id: string): Promise<IBlog>;
}
