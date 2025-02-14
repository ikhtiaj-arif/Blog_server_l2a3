import { Model, Types } from "mongoose";

export interface IBlog {
  title: string;
  content: string;
  image: string;
  // author?: Types.ObjectId;
  user?: string;
  isPublished: boolean;
}
export interface BlogModel extends Model<IBlog> {
  //create methods
  isBlogAvailable(id: string): Promise<IBlog>;
}
