import React from "react";
import HeroImage from "../../assets/hero_section.png";

const HerosectionView = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center mt-40">
        <img src={HeroImage} />
        <div className="rounded-full h-96 w-96 bg-[#42BDEF] absolute -ml-[80%] -bottom-2 blur-[140px]"></div>
        <div className="rounded-full h-60 w-60 bg-[#42BDEF] absolute -mr-[60%] top-20 blur-[150px]"></div>
        <h1 className="relative text-[70px] font-black text-[#3891B5] font-poppins">
          CV-EXPRESSO
        </h1>
        <p className="text-gray-800 text-light font-poppins text-sm">
          Propel your career with better curated CVs and resumes
        </p>
        <button className="bg-[#42BDEF] p-2 rounded h-12 hover:bg-opacity-0  hover:border-2 hover:border-[#42BDEF] hover:text-[#42BDEF] hover:shadow-xl w-40 text-white transition ease-in-out duration-300 mt-4">
          Get started
        </button>
      </div>
    </>
  );
};

export default HerosectionView;
