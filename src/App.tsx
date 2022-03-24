import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <SignUp /> */}

        <Routes>
          <Route path=":name" element={<ErrorPage />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
