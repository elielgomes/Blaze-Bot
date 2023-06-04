import { axiosApi } from "@/services/api";
import {
  ILoginUserRequest,
  ILoginUserResponse,
  ICreateUserRequest,
  IUser,
} from "@/interfaces";

class Api {

  async authenticateUser({ username, password }: ILoginUserRequest): Promise<ILoginUserResponse> {
    const response = await axiosApi.post('/api/login', {
      username,
      password
    });
    return response.data;
  }

  async registerUser({ username, password, confirmPassword }: ICreateUserRequest): Promise<void> {
    await axiosApi.post('/api/register', {
      username,
      password,
      confirmPassword,
    });
  }

  async getUserById(userId: string): Promise<IUser> {
    const response = await axiosApi.get(`/api/user/${userId}`);
    return response.data;
  }

  async getUserByToken(tokenParam: string): Promise<IUser> {
    const response = await axiosApi.post("/api/find-user-by-token", {
      token: tokenParam
    })
    return await response.data;
  }

}

const api = new Api();
export default api;
