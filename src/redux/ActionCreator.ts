
import {  ActionType } from "./userActionType";
import { User, UserState } from "./userReducer";
interface ActionCreatorProp{
  user:User
}
export function userActionCreator({user}:ActionCreatorProp) {
  return { type: ActionType.FETCH_USER, payload: user };
}
export function userActionLogOut() {
  return { type: ActionType.USER_LOGOUT};
}



