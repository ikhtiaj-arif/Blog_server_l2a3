import express from "express";
import { messageControllers } from "./message.controller";

const router = express.Router();
const { createMessage, getMessages } = messageControllers;

router.get("/messages", getMessages);

router.post(
  "/messages",

  createMessage
);

export const messageRoutes = router;
