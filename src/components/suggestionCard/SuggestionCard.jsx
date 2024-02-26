import React from "react";
import PC from "../../assets/pc.png";

const SuggestionCard = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[300px] text-[#626E79] bg-white px-6 py-3 rounded-lg hover:shadow">
      <img src={PC} alt="" className="w-[150px]" />
      <div className="flex justify-start items-center w-full my-2 gap-2 text-[#074786]">
        <div className="flex justify-center items-center px-2 py-1 bg-[#F2F4F7] rounded-xl">
          20% Off
        </div>
        <div className="flex justify-center items-center px-2 py-1 bg-[#F2F4F7] rounded-xl">
          Limited time
        </div>
      </div>
      <div className="flex font-bold my-1">Webbuilder 1</div>
      <div className="flex my-1">Computer Modern clasic with wix support</div>
      <div className="flex justify-start items-center w-full">
        <div className="flex text-lg text-[#5C6874]">$39.96</div>
        <s className="flex text-sm mx-2 text-[#9FA9B3]">$49.96</s>
        <p className="flex text-sm text-[#EF4C5D]">(20% Off)</p>
      </div>
      <div className="flex justify-center items-center w-full my-2 py-2 text-white cursor-pointer bg-[#1B88F4] hover:bg-blue-600 duration-300 rounded-lg">
        View Deal
      </div>
    </div>
  );
};

export default SuggestionCard;
