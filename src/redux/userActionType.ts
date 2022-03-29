// interface User {
//   image:File;
//   name: string;
//   phone: number;
//   password: string;
//   confirmPassword: string;
//   email: string;

import { User } from "./userReducer";

// }
export enum ActionType {
  FETCH_USER = "FETCH_USER",
  USER_LOGOUT="USER_LOGOUT"
}

interface ActionFetching {
  type: ActionType.FETCH_USER;
  payload: User;
}
interface ActionLogingOut {
  type: ActionType.USER_LOGOUT;
  payload: User;
}
export type Action = ActionFetching|ActionLogingOut;
