import { Action, ActionType } from "./userActionType";
import UserState from "../interface/UserState";

const loginState = localStorage.getItem("Logged-In") === "true" ? true : false;
const userName = localStorage.getItem("Name");
const email = localStorage.getItem("Email");
const phone = localStorage.getItem("Phone");
const password = localStorage.getItem("Password");
const confirmPassword = localStorage.getItem("Confirm-Password");
const profilePic = localStorage.getItem("Profile-Pic");
const initialValue: UserState = {
  user: {
    photo: profilePic,
    name: userName ? userName : "",
    email: email? email:"",
    phone: phone?phone:"",
    password: password?password:"",
    confirmpassword: confirmPassword?confirmPassword:"",
  },
  isSubmitting: loginState,
};
const resetValues = {
  photo: null,
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: "",
};
export default function userReducer(
  state: UserState = initialValue,
  action: Action
) {
  if (action.type === ActionType.FETCH_USER) {
    return {
      user: action.payload,
      isSubmitting: true,
    };
  }
  if (action.type === ActionType.USER_LOGOUT) {
    return {
      user: resetValues,
      isSubmitting: false,
    };
  }
  return state;
}
