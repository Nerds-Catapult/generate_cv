import React from "react";

const Landingpage = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center">
        <h1 className="md:w-[50%] mt-40 text-slate-900 font-extrabold text-[60px] md:text-[40px] tracking-tight text-center dark:text-gray-800">
          Unleash Your Professional Potential{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-600">
            with US
          </span>
        </h1>
        <p className="text-slate-900 font-bold">
          Elevate Your Career Journey with Confidence!
        </p>
        <div className="w-screen flex justify-center items-center mt-10 space-x-2">
          <a
            href="/signup"
            className="cursor-pointer hover:bg-pink-400 rounded bg-pink-500 p-2 text-white font-bold text-sm h-10"
          >
            Get started
          </a>
          <button className="hover:border-cyan-800 active:bg-pink-500 active:text-white rounded border-2 border-cyan-300 p-2 text-cyan-500 font-bold text-sm h-10">
            View plans
          </button>
        </div>

        {/* place where where we will add our testimonials */}
        <h1 className="text-black font-bold mt-20">Our trusted clients</h1>
        <div className="xs:w-[80%] w-screen h-auto md:h-[20%] mt-4 bg-gray-100 transition duration-500 ease-in-out transform"></div>
      </div>
    </>
  );
};

export default Landingpage;
