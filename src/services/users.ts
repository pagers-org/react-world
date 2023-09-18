import { RegisterUserInput, RegisterUserResponse } from "@/types/users";
import { executeAPI } from "./app";

export const fetchRegisterUser = async (registerUserInfo: RegisterUserInput): Promise<RegisterUserResponse> => {
  const result = await executeAPI({
    method: "POST",
    url: "/users",
    body: { user: registerUserInfo },
  });
  return result;
};

export const fetchLogin = async (loginUserInfo: Omit<RegisterUserInput, "username">): Promise<RegisterUserResponse> => {
  const result = await executeAPI({
    method: "POST",
    url: "/users/login",
    body: { user: loginUserInfo },
  });
  return result;
};
