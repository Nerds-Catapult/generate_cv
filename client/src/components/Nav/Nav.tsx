import React, { useState, useMemo } from "react";

const Nav = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-4 px-4 backdrop-blur bg-opacity-40 w-screen">
      <a href="#"></a>
      <img
        className="shadow-xl h-16 w-16 rounded-lg items-center justify-center"
        src="../../assets/logo1.png"
      />
      <div className="flex flex-row space-x-6 w-[60%] items-center justify-center">
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          Resumes
        </a>
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          CV
        </a>
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          Cover Letter
        </a>
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          Career
        </a>
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          Blog
        </a>
        <a
          className="text-sm hover:text-blue-500 active:text-purple-500"
          href="#"
        >
          FAQs
        </a>
      </div>
      <div className="flex flex-row space-x-4">
        <button className="text-[#42BDEF] hover:text-gray-800 ">log in</button>
        <button className="bg-[#42BDEF] p-2 font-light rounded text-sm text-white hover:shadow-lg hover:animate-bounce transition ease-in-out duration-300">
          start building
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
