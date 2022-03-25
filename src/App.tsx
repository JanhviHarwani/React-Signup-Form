import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import { bool } from "yup";
import { replace } from "formik";

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);
  // const[state,setState]=useState(false)
  // if(window.localStorage.getItem("Logged-In-State")==="true"){
  //   setLoginState(true)
  // }
  useEffect(() => {
    window.localStorage.setItem("Logged-In-State", JSON.stringify(loginState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginState]);

  var state = window.localStorage.getItem("Logged-In-State");
  // var componentToBeRendered = <ErrorPage />;
  // if (state === "true") {
  //   componentToBeRendered = <Home LoggedInState={setLoginState} />;
  // } else {
  //   componentToBeRendered = <SignUp LoggedInState={setLoginState} />;
  // }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path=":name" element={<ErrorPage />} />

          <Route path="/" element={<SignUp LoggedInState={setLoginState} />} />
          <Route
            path="/home"
            element={
              state === "true" && (
                <Home LoggedInState={setLoginState} replace to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
