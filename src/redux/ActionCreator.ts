
import {  ActionType } from "./userActionType";

export function userActionCreator(user: any) {
  return { type: ActionType.FETCH_USER, payload: user };
}
export function userActionLogOut() {
  return { type: ActionType.USER_LOGOUT};
}



