import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import UserState from "./interface/UserState";
import User from "./interface/User";
import { useLocalStorageState } from "./hooks/useLocalStorage";
import { userActionCreator } from "./redux/ActionCreator";

function App() {
  // const loginState = useSelector<UserState>((state) => state.isSubmitting);
  // const LOCAL_STORAGE_KEY = "customLocalStorageKey";
  // const userData = useSelector<UserState, User>((state) => state.user);

  // const INITIAL_VALUES = userData;
  // const { getItem, setItem } = useLocalStorageState();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("localStorage got value here");
  //   if (window.localStorage.getItem("UserProfile") != null) {
  //     var userData = JSON.parse(localStorage.getItem("UserProfile")!);
  //     userData && dispatch(userActionCreator(userData));
  //   }

  //   // console.log(userData)

  //   // setItem("Logged-In-State", JSON.stringify(loginState));
  // }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path=":name" element={<ErrorPage />} />
          <Route path="/" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
