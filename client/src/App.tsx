import "./App.css";
import Nav from "./components/Nav/Nav";
import Signup from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Landingpage from "./pages/LandingPage/index";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-pink-50 to-cyan-50 bg-[url]">
        <Nav />
        <Landingpage />
      </div>
    </>
  );
}
