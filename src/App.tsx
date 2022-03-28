import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
// import { useNavigate } from "react-router-dom";

function App() {
  // const [loginState, setLoginState] = useState<boolean>(false);
  const [localState, setLocalState] = useState(() => {
    const saved = window.localStorage.getItem("Logged-In-State");
    // if (saved !== null) {
    
    console.log(saved);
    // return JSON.parse(saved!);
    // }
  });

  useEffect(() => {
    window.localStorage.setItem("Logged-In-State", JSON.stringify(localState));
    console.log(localState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState, setLocalState]);

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

          <Route path="/" element={<SignUp LoggedInState={setLocalState} />} />
          {!localState! && (
            <>
              <Route path="/home" element={<Navigate replace to="/" />} />
            </>
          )}
          {localState! && (
            <>
              <Route
                path="/home"
                element={<Home LoggedInState={setLocalState} />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
