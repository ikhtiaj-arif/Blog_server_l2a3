import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { messageServices } from "./message.services";

const { createMessageIntoDB, getAllMessageFromDB } = messageServices;

const createMessage = catchAsync(async (req, res) => {
  //   const id = req?.user?._id;

  const result = await createMessageIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Message sent successfully!",
    data: result,
  });
});

const getMessages = catchAsync(async (req, res) => {
  const result = await getAllMessageFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Message fetched successfully!",
    data: result,
  });
});

export const messageControllers = {
  createMessage,
  getMessages,
};
