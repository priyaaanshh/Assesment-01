import React from "react";

const Tabbar = () => {
  return (
    <ul className="flex flex-wrap justify-start items-center gap-3 w-full my-2 text-[#4B5665]">
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        Tools
      </li>
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        AWS Builder
      </li>
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        Start Build
      </li>
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        Build Supplies
      </li>
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        Tooling
      </li>
      <li className="flex justify-center items-center px-4 py-2 border-transparent border-2 hover:border-black/2 hover:bg-slate-200 duration-300 hover:shadow-sm rounded-2xl cursor-pointer">
        BlueHosting
      </li>
    </ul>
  );
};

export default Tabbar;
