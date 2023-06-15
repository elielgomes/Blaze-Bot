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

export type TRoulletColors = "black" | "red" | "white";

export type TRoulletColorsTernary = 0 | 1 | 2;

export interface IRecentHistory {
  id: string;
  created_at: string;
  color: TRoulletColorsTernary;
  roll: number;
  server_seed: string;
}

export interface IOccurrencesHistoryColors {
  0: number,
  1: number,
  2: number,
}

export interface ICurrentRound {
  id: string;
  color: number | null;
  roll: number | null;
  status: "waiting" | "rolling" | "complete";
}
