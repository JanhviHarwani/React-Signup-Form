import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import UserState from "./interface/UserState";

function App() {

  const loginState = useSelector<UserState,boolean>((state) => state.isSubmitting);
 
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path=":name" element={<ErrorPage />} />
          <Route element={<PrivateRoute loginState={!loginState} path="/home" />}>
            <Route path="/" element={<SignUp />} />
          </Route>
         
          <Route element={<PrivateRoute loginState={loginState} path="/" />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
