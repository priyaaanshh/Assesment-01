import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-start w-full text-[#B6BDC4] bg-[#212731] px-4 py-12">
      <div className="flex flex-col justify-center items-start w-40 gap-2 py-8">
        <div className="text-white text-xl">Categories</div>
        <div className="text-sm">Web Builder</div>
        <div className="text-sm">Hosting</div>
        <div className="text-sm">Data Center</div>
        <div className="text-sm">Robotic-Automation</div>
      </div>
      <div className="flex flex-col justify-center items-start  w-40 gap-2 py-8">
        <div className="text-white text-xl">Contact</div>
        <div className="text-sm">Contact</div>
        <div className="text-sm">Privacy Policy</div>
        <div className="text-sm">Terms Of Service</div>
        <div className="text-sm">Categories</div>
        <div className="text-sm">About</div>
      </div>
      <div className="flex justify-start items-center gap-2  w-40 py-12">
        <div>United States</div>
        <IoIosArrowDown className="text-lg" />
      </div>
    </div>
  );
};

export default Footer;
