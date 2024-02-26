import React from "react";
import { FaChevronRight } from "react-icons/fa";
const PageTree = () => {
  return (
    <div className="flex flex-wrap justify-start items-center w-full py-2 gap-2 text-[#5C6874]">
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">Home</div>
        <FaChevronRight className="text-sm" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">Hosting for all</div>
        <FaChevronRight className="text-sm" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">Hosting</div>
        <FaChevronRight className="text-sm" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer">Hosting6</div>
        <FaChevronRight className="text-sm" />
      </div>
      <div className="cursor-pointer">Hosting5</div>
    </div>
  );
};

export default PageTree;
