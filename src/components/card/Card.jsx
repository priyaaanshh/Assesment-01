import React from "react";
import PC from "../../assets/pc.png";
import { IoDiamondOutline, IoInformationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
const Card = ({ index, cardData }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full rounded-xl py-2 my-4 bg-white border-transparent border-1 hover:shadow-sm hover:border-slate-500/3">
      <div className="absolute top-2 z-10 flex justify-normal items-center w-full">
        {cardData.bestChoice && (
          <div className="flex justify-center items-center gap-2 bg-[#FF7724] text-white px-2 py-1 rounded-r-lg">
            <IoDiamondOutline />
            <div>Best Value</div>
          </div>
        )}
      </div>
      <div className="relative flex w-full bg-white">
        <div
          className="
                absolute -left-5 top-12
                flex justify-center items-center
                border border-[#E1E4E6] rounded-full size-10 text-xl text-[#626E79] bg-white shadow
                "
        >
          {index + 1}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full px-6 py-4 my-2">
        <div className="flex flex-col justify-center items-center w-max gap-1 mt-4">
          <img src={PC} alt="" className="w-full md:w-56" />
          <div className="text-sm text-[#626E79]">{cardData.imageLabel}</div>
        </div>
        <div className="flex flex-col justify-start items-center w-full  md:max-w-[502px] gap-2">
          <p className="text-start w-full ">
            <span className="font-semibold">{cardData.descriptionLabel}</span>{" "}
            {cardData.description}
          </p>
          <div className="flex justify-start items-center w-full">
            {cardData.discount && (
              <div className="flex justify-center items-center bg-[#F2F4F7] rounded-md px-2 py-1 text-sm text-[#074786] cursor-pointer">
                26% Off
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-start text-start w-full">
            <div className="font-semibold">Main highlights</div>
            {cardData?.mainHighlight && (
              <div className="pl-6 my-2">{cardData?.mainHighlight}</div>
            )}
            {cardData?.mainHighlightPoints && (
              <div className="w-full pl-6 my-2">
                <div className="flex flex-col justify-center items-start gap-2 w-full px-4 py-2 bg-[#FFF4ED] shadow-sm rounded-xl">
                  {cardData?.mainHighlightPoints.map((point, index) => (
                    <div
                      className="flex justify-center items-center gap-2"
                      key={index}
                    >
                      <div className="flex justify-center items-center px-2 py-1 text-[#1B88F4] bg-white rounded-lg">
                        {point.value}
                      </div>
                      <div className="text-[#4B5665]">{point.key}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {cardData?.additionalPoints && (
            <div className="flex flex-col justify-center items-start text-start w-full mb-2 max-w-[502px]">
              <div className="mb-2">Why we love it</div>
              <div className="flex flex-col justify-center items-start w-full gap-2">
                {cardData?.additionalPoints.map((point, index) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={index}
                  >
                    <div className="rounded-full p-[2px] bg-[#EBF5FF] text-[#0855A1]">
                      <MdOutlineDone />
                    </div>
                    <div>{point}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-start items-center w-full gap-2 text-[#1B88F4] cursor-pointer">
            <p>Show More</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex md:flex-col mt-2 md:mt-0 justify-between items-center w-full md:w-max gap-10 md:gap-5">
          <div className="flex flex-col justify-between items-center px-4 py-2 shadow rounded-xl md:rounded-t-none text-[#074786] bg-[#F3F9FF] cursor-pointer">
            <div className="flex justify-end items-start w-full text-[6px]">
              <div className="border-[#074786] border rounded-full p-[2px]">
                <IoInformationOutline />
              </div>
            </div>
            <div className="text-[28px] pb-2">{cardData.rating}</div>
            <div className="text-sm mb-1">{cardData.review}</div>
            <div className="flex text-[#FFB80F]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex justify-center items-center w-full text-white bg-[#1B88F4] px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-blue-600 duration-300">
            View
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
