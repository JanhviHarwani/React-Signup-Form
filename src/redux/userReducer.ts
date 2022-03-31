import { Action, ActionType } from "./userActionType";
import UserState from "../interface/UserState";

const initialValue: UserState = {
  user: {
    photo: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  },
  isSubmitting: false,
};

export default function userReducer(
  state: UserState = initialValue,
  action: Action
): any {
  if (action.type === ActionType.FETCH_USER) {
    return {
      user: action.payload,
      isSubmitting: action.state,
    };
  }
  if (action.type === ActionType.USER_LOGOUT) {
    console.log("reached here");
    console.log(action);
    return {
      user: action.payload,
      isSubmitting: action.state,
    };
  }
  return state;
}
