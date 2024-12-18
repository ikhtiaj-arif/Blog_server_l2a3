import { Request, Response } from "express";
import { userServices } from "./user.services";

const { createUserIntoDB } = userServices;

const createUser = async (req: Request, res: Response) => {
  console.log("controller");
  try {
    const result = await createUserIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "User is created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error._message,
      success: false,
      error: error || 'Something went wrong',
    });
  }
};

export const userControllers = {
  createUser,
};
