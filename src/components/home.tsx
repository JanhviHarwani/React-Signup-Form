import { useSelector, useDispatch } from "react-redux";
import { userActionLogOut } from "../redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import css from "./home.module.css";
import UserState from "../interface/UserState";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { useState } from "react";
import User from "../interface/User";

const resetValues = {
  user: {
    photo: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  },
};
function Home() {
  const userData = useSelector((state: UserState) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getItem, setItem, removeItem } = useLocalStorageState();
  const clickHandler = () => {
    dispatch(userActionLogOut({ isSubmitting: true, user: resetValues }));
    console.log(userData);
    navigate("/");

    removeItem("UserProfile");
  };

  return (
    <>
      <h3>Welcome to Home page!</h3>
      <div className={css["home-container"]}>
        <div className={css["user-data"]}>
          <img
            height={"100px"}
            width={"100px"}
            src={userData.user.photo ? userData.user.photo.toString() : ""}
            alt="No preview available"
          />
          <p>
            Hello {userData.user.name ? userData.user.name : ""}
            {/* {userData.user!.name} */}
          </p>
          <p>
            You are registered with E-mail id:{" "}
            {userData.user.email ? userData.user.email : ""}
          </p>
          <p>
            And Phone number: {userData.user.phone ? userData.user.phone : ""}
          </p>
        </div>
      </div>
      <div className={css["logout-btn-div"]}>
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
