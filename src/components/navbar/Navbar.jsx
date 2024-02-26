import React from "react";

import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div
      className="
      flex justify-center items-center
      w-full text-white bg-[#212731] px-12 py-4
      "
    >
      <ul className="flex flex-wrap w-full items-center justify-center gap-7">
        <li className="flex justify-center items-center gap-1 bg-white rounded-xl w-max text-black px-4 py-1">
          <IoIosSearch className="text-3xl text-slate-500" />
          <input type="text" className="outline-none border-none" />
        </li>
        <li className="flex cursor-pointer text-lg">Categories</li>
        <li className="flex cursor-pointer text-lg">Website Builders</li>
        <li className="flex cursor-pointer text-lg">Today's deals</li>
      </ul>
    </div>
  );
};

export default Navbar;
