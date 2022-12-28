import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<Dashboard foto={localStorage.getItem("foto")} />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}
