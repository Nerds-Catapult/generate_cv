import "./App.css";
import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Signup from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Landingpage from "./pages/LandingPage/index";

const App = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  function loggedIn() {
    try {
      const accessToken = sessionStorage.getItem("authenticated");

      if (accessToken) return true
      return false 
    } catch (error) {
      // TODO: configure logging API call
      console.log(error)
      return false
    }
  }

  React.useEffect(() => {
    setShowNav(true)
  })

  return (
      <div className="bg-gradient-to-b from-pink-50 to-cyan-50">
        { showNav && (
          <Nav />
        )}
            <Landingpage />
      </div>
  );
}

export default App;