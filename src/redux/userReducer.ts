import { Action, ActionType } from "./userActionType";

export interface User {
  photo: string|File |Blob| null;
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
}

export interface UserState {
  user: User;
  
}
const initialValue: UserState = {
  user: {
    photo: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  },
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
      user: initialValue.user,
    };
  }
  return state;
}
