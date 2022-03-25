import { Action, ActionType } from "./userActionType";

export interface UserState {
  user: any;
}
const initialValue = {
  user: {
    photo: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  },
};
var removeUserData = {
  photo: "",
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: "",
};
export default function userReducer(
  state: UserState = initialValue,
  action: Action
): UserState {
  if (action.type === ActionType.FETCH_USER) {
    return {
      user: action.payload,
    };
  }
  if (action.type === ActionType.USER_LOGOUT) {
    return {
      user: removeUserData,
    };
  }
  return state;
}
