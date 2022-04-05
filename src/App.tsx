import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path=":name" element={<ErrorPage />} />
          <Route path="/" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
