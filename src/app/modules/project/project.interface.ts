import { Model } from "mongoose";

export type TProject = {
  title: string;
  description: string;
  tags: string[];
  // source_code_link: string;
  live_link: string;
  image: string;
  user: string
};
