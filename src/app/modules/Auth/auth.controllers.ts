import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { AuthServices } from "./auth.services";

const { loginUserIntoDB } = AuthServices;

const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Login successful",
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
