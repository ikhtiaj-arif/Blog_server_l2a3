"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = __importDefault(require("./app/middlewears/ErrorHandler"));
const auth_route_1 = require("./app/modules/Auth/auth.route");
const blog_routes_1 = require("./app/modules/blog/blog.routes");
const user_routes_1 = require("./app/modules/user/user.routes");
const project_routes_1 = require("./app/modules/project/project.routes");
const message_routes_1 = require("./app/modules/messages/message.routes");
const app = (0, express_1.default)();
// const port = 3000;
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api", user_routes_1.userRoutes);
app.use("/api", blog_routes_1.blogRoutes);
app.use("/api", auth_route_1.AuthRoutes);
app.use("/api", project_routes_1.projectRoutes);
app.use("/api", message_routes_1.messageRoutes);
const getController = (req, res) => {
    res.send("Server running");
};
app.get("/", getController);
app.use(ErrorHandler_1.default);
exports.default = app;
