import { model, Schema } from "mongoose";
import { IUser, IUserName } from "./user.interface";

const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
    trim: true,
    maxlength: [20, "First name cannot be more then 20 characters"],
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [20, "Middle name cannot be more then 20 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Middle Name is required!"],
    trim: true,
    maxlength: [20, "Last name cannot be more then 20 characters"],
  },
});

const userSchema = new Schema<IUser>(
  {
    name: {
      type: userNameSchema,
      required: [true, "User Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", userSchema);
