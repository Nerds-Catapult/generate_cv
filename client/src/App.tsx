import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Signup from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Landingpage from "./pages/LandingPage/index";

export default function App() {
  return (
      <div className="bg-gradient-to-b from-pink-50 to-cyan-50">
        {/* <Nav /> */}
            <Login />
      </div>
  );
}
