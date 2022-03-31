import User from "../interface/User";

export enum ActionType {
  FETCH_USER = "FETCH_USER",
  USER_LOGOUT = "USER_LOGOUT",
}

interface ActionFetching {
  type: ActionType.FETCH_USER;
  payload: User;
  state: boolean;
}
interface ActionLogingOut {
  type: ActionType.USER_LOGOUT;
  payload: any;
  state: boolean;
}
export type Action = ActionFetching | ActionLogingOut;
