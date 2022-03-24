import { Action, ActionType } from "./userActionType";
// interface User {
//   name: string;
//   phone: number;
//   password: string;
//   confirmPassword: string;
//   email: string;
// }
export interface UserState {
  user:any;
}
const initialValue = {
  user: { name: "", email: "", phone: "", password: "", confirmpassword: "" },
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
  return state;
}
