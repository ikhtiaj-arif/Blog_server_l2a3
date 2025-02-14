import cors from "cors";
import express, { Request, Response } from "express";
import errorHandler from "./app/middlewears/ErrorHandler";
import { AuthRoutes } from "./app/modules/Auth/auth.route";
import { blogRoutes } from "./app/modules/blog/blog.routes";
import { userRoutes } from "./app/modules/user/user.routes";
import { projectRoutes } from "./app/modules/project/project.routes";
import { messageRoutes } from "./app/modules/messages/message.routes";

const app = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", AuthRoutes);
app.use("/api", projectRoutes);
app.use("/api", messageRoutes);

const getController = (req: Request, res: Response) => {
  res.send("Server running");
};

app.get("/", getController);
app.use(errorHandler);

export default app;
