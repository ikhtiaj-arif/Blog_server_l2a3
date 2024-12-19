import config from "../../app/config";
import AppError from "../../app/errors/AppError";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";


const loginUserIntoDB = async (payload: ILoginUser) => {
  //check if the user exists
  const existingUserData = await User.doesUserExistsByEmail(payload.email);
  if (!existingUserData) {
    throw new AppError(404, "User not found!");
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
    throw new AppError(403, 'Incorrect Password!');
  }


  return {};
};

export const AuthServices = { loginUserIntoDB };
