import User from "../interface/User";
import { ActionType } from "./userActionType";

interface ActionCreatorProp {
  user?: User;
  isSubmitting?: boolean;
}
export function userActionCreator({ user, isSubmitting }: ActionCreatorProp) {
  return { type: ActionType.FETCH_USER, payload: user, state: isSubmitting };
}
export function userActionLogOut({ user, isSubmitting }: any) {
  return { type: ActionType.USER_LOGOUT, state: isSubmitting, payload: user };
}
