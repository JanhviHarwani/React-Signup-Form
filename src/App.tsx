import { useEffect, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [localState, setLocalState] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("Logged-In-State")) {
      setLocalState(JSON.parse(localStorage.getItem("Logged-In-State")!));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Logged-In-State", JSON.stringify(localState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localState]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path=":name" element={<ErrorPage />} />
          <Route path="/" element={<SignUp LoggedInState={setLocalState} />} />
          <Route element={<PrivateRoute loginState={localState} />}>
            <Route
              path="/home"
              element={<Home LoggedInState={setLocalState} />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
