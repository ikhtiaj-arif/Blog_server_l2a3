import cors from "cors";
import express, { Request, Response } from "express";
import errorHandler from "./app/middlewears/ErrorHandler";
import { blogRoutes } from "./modules/blog/blog.routes";
import { userRoutes } from "./modules/user/User.routes";
import { AuthRoutes } from "./modules/Auth/auth.route";

const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", AuthRoutes);

const getController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getController);
app.use(errorHandler);

export default app;
