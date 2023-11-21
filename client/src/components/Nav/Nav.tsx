import React, { useState } from "react";
import logo from "../../assets/logo1.png";
import NavLink from "./NavLink";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row items-center px-4 py-4 sm:px-6 lg:px-8 justify-between">
      <a href="#" className="flex-shrink-0 shadow-lg rounded">
        <img
          className="h-12 w-12 rounded-lg"
          src={logo}
          alt="CV Expresson Logo"
        />
      </a>
      <div className="hidden sm:flex flex-row space-x-6 w-3/5 items-center justify-center">
        <NavLink style="hover:text-cyan-400 active:pink-500 p-2 rounded" href="#" text="Blog" />
        <NavLink style="hover:text-cyan-400 active:pink-500 p-2 rounded" href="#" text="FAQs" />
      </div>
      <div className="flex flex-row space-x-4 sm:hidden">
        {
          !isMenuOpen && (
            <button className="p-2 rounded-xl transition duration-600 ease-in-out hover:bg-gray-200" onClick={toggleMenu}>
              <div className="cursor-pointer flex flex-col items-end">
                <span className="bg-gray-500 h-1 w-6 rounded-full block"></span>
                <span className="bg-gray-500 h-1 w-4 rounded-full block mt-1"></span>
                <span className="bg-gray-500 h-1 w-8 rounded-full block mt-1"></span>
              </div>
            </button>
          )
        }
        {
          isMenuOpen && (
            <button className="p-2 h-12 rounded-xl transition duration-600 ease-in-out hover:bg-gray-200" onClick={toggleMenu}>
              <div className="cursor-pointer flex flex-col items-end">
                <span className="bg-gray-500 h-1 w-8 rounded-full block -rotate-45 transition-transform"></span>
                <span className="bg-gray-500 h-1 w-8 rounded-full block mt-1 rotate-45 transition-transform"></span>
              </div>
            </button>
          )
        }
        {isMenuOpen && (
          <div className="w-[60%] px-4 space-y-2 flex flex-col absolute top-16 right-4 bg-white p-4 shadow-xl shadow-gray-600">
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="Resumes" />
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="CV" />
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="Cover Letter" />
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="Career" />
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="Blog" />
            <NavLink style="hover:shadow-lg p-2 bg-gray-100 duration-300 ease-in-out transition rounded" href="#" text="FAQs" />
            <NavLink style="hover:shadow-lg p-2 w-full border border-pink-400 text-center text-pink-400 font-bold rounded-lg duration-300 ease-in-out transition rounded" href="#" text="Log in" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
