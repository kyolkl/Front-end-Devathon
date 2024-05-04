import { isAxiosError } from "axios";
import { api } from "../libs/axios";
import { UserRegisterForm } from "../types";

export const createUser = async (data: UserRegisterForm) => {
  try {
    const response = await api.post("/v1/users", data);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return error;
  }
};

export const getUser = async () => {
  try {
    const data = api.get("/v1/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
