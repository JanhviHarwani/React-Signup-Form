import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../redux/userReducer";
import { userActionLogOut } from "../redux/ActionCreator";
import { useNavigate } from "react-router-dom";

import css from "./home.module.css";
function Home({ LoggedInState }: any) {
  const userData = useSelector((state: UserState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(userActionLogOut());
    navigate("/");
    LoggedInState(false);
  };
  console.log(userData);
  return (
    <>
      <h3>Welcome to Home page!</h3>
      <div className={css["home-container"]}>
        <div className={css["user-data"]}>
          <img src={userData.user.photo} alt="No preview available" />
          <p>Hello {userData.user.name}</p>
          <p>You are registered with E-mail id: {userData.user.email}</p>
          <p>And Phone number: {userData.user.phone}</p>
        </div>
      </div>
      <div className={css["logout-btn-div"]}>
        {" "}
        <button
          type="button"
          className={`${css["custom-css-logout"]} btn btn-info`}
          onClick={clickHandler}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
