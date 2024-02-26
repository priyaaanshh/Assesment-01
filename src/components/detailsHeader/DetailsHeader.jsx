import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { IoInformationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const DetailsHeader = ({ lastUpdate, info }) => {
  return (
    <div>
      <div className="border-b-2 my-2"></div>
      <div className="flex flex-wrap items-center justify-between py-2 gap-3 text-[#4B5665] text-[14px]">
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <div className="border-[#626E79] border-2 rounded-full p-[2px] text-[#626E79]">
              <MdOutlineDone />
            </div>
            <div>Last Updated - {lastUpdate}</div>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#4B5665] cursor-pointer">
            <div className="border-[#626E79] border-2 rounded-full p-[2px] text-[#626E79] ">
              <IoInformationOutline />
            </div>
            <div>{info}</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <div>Top relevant</div>
          <IoIosArrowDown className="text-[#626E79] text-lg" />
        </div>
      </div>
      <div className="border-b-2 my-2"></div>
    </div>
  );
};

export default DetailsHeader;
