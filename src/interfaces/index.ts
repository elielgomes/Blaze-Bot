export enum Permitions {
  Admin = "Admin",
  User = "User",
}

export interface IUser {
  username: string;
  permition: Permitions | null;
}

export interface ILoginUserResponse {
  token: string;
  username: string;
  permition: Permitions
}

export interface ILoginUserRequest {
  username: string;
  password: string
}

export interface ICreateUserRequest {
  username: string;
  password: string;
  confirmPassword: string;
  permition: Permitions | null;
}

export interface ISignInData {
  username: string;
  password: string;
}

export interface IRecentHistory {
  id: string;
  created_at: string;
  color: number;
  roll: number;
  server_seed: string;
}