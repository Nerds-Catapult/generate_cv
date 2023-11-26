import React from "react";
import bg from "../../assets/authPagesBG.png"


const Signup = () => {

  const AuthFormt = () => (
    <>
    <div className=" h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-white font-extrabold">Sign up to CV-Expresso</h1>
      <div className="flex flex-col space-y-4 mt-10">
        <input className="hover:bordern-none active:border-none p-2 rounded-xl bg-white/0 border-2 border-white text-white placeholder-cyan-200" placeholder="First Name" type="text" />
        <input className="hover:bordern-none active:border-none p-2 rounded-xl bg-white/0 border-2 border-white text-white placeholder-cyan-200" placeholder="Second Name" type="text" />
        <input className="hover:bordern-none active:border-none p-2 rounded-xl bg-white/0 border-2 border-white text-white placeholder-cyan-200" placeholder="email" type="text" />
        <div className="border-2 border-white rounded-xl h-12 p-2 w-80 flex items-center justify-between">
        <input className="hover:bordern-none active:border-none bg-white/0 text-white placeholder-cyan-200" placeholder="password" type="text" />
        </div>
        <div className="border-2 border-white rounded-xl h-12 p-2 w-80 flex items-center justify-between">
        <input className="hover:bordern-none active:border-none bg-white/0 text-white placeholder-cyan-200" placeholder="confirm password" type="text" />
        </div>
        <div className="flex flex-row items-center space-x-2">
        <input className="h-4 w-4 rounded" type="checkbox" name="" id="" />
        <p className="text-white font-sans tracking-wide">Remember me</p>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="bg-gray-200 p-2 w-40 rounded-xl text-cyan-600 font-bold hover:bg-white hover:shadow hover:shadow-cyan-600 active:bg-pink-500 active:text-white transition ease-linear duration-200">
            sign up
          </button>
        </div>  

        <div className="w-full h-[0.5px] bg-cyan-200"></div>
        {/* Signup in with third parties */}
        <div className="w-full flex flex-col items-center space-y-2">
          <button className="active:border-none hover:border-none transition ease-in-out duration-200 hover:bg-white hover:text-cyan-600 active:bg-pink-500 active:text-white w-40 text-sm text-white border border-white p-2 rounded-full  " >sign up with google</button>
          <button className="active:border-none hover:border-none transition ease-in-out duration-200 hover:bg-white hover:text-cyan-600 active:bg-pink-500 active:text-white w-40 text-sm text-white border border-white p-2 rounded-full  " >sign up with facebook</button>
          <button className="active:border-none hover:border-none transition ease-in-out duration-200 hover:bg-white hover:text-cyan-600 active:bg-pink-500 active:text-white w-40 text-sm text-white border border-white p-2 rounded-full  " >sign up with github</button>
        </div>
      </div>
    </div>
    </>
  )

  return (
    <>
      <div className="flex flex-row">
        <div className="h-screen w-[50%] rounded bg-cyan-600">
          <AuthFormt />
        </div>
        <div className="h-screen w-[50%] rounded bg-gray-600 bg-opacity-20 backdrop-blur">
        </div>
      </div>
    </>
  );
};

export default Signup;
