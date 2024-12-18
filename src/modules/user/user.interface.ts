export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IUser {
  name: IUserName;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
}

