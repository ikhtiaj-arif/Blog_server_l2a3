import { TMessage } from "./message.interface";
import { Message } from "./message.model";

const createMessageIntoDB = async (payload: TMessage) => {
  const message = await Message.create(payload);
  return message;
};

const getAllMessageFromDB = async () => {
  const messages = await Message.find();
  return messages;
};

export const messageServices = { createMessageIntoDB, getAllMessageFromDB };
