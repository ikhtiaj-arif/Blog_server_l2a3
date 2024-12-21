import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";

const loginUserIntoDB = async (payload: ILoginUser) => {
  //check if the user exists
  const existingUserData = await User.doesUserExistsByEmail(payload.email);
  if (!existingUserData) {
    throw new AppError(401, "Invalid credentials");
  }
  //check the user is blocked or not
  const isUserBlocked = existingUserData?.isBlocked;
  if (isUserBlocked) {
    throw new AppError(403, "The user is blocked!");
  }

  //check if the password matches the hashed password
  const passwordMatching = await User.isPasswordMatching(
    payload.password,
    existingUserData?.password
  );
  if (!passwordMatching) {
    throw new AppError(401, "Invalid credentials");
  }
  //create token and send to the client
  const jwtPayload = {
    email: existingUserData?.email,
    role: existingUserData?.role,
  };
  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_exp_in as string
  );

  return {
    token,
  };
};

export const AuthServices = { loginUserIntoDB };
