/* eslint-disable react/jsx-key */
import { marketItems } from "../constants";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const MarketPlaceContent = () => {
  return (
    <div className=" m-10 w-full">
      <h1 className="bg-[#232323] text p-3 rounded-lg lg:w-[100vh]  my-10">
        Weapons and potions (230){" "}
      </h1>

      <div className="marketplace__wapons-display w-full gap-5 grid">
        {marketItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl px-2 py-6 max-w-[16.2rem]  w-full border-[1px] bg-[#232323] flex flex-col justify-center items-center"
          >
            <div className="absolute inset-x-0 top-0 p-4 flex justify-between">
              <RiErrorWarningLine
                className="text-[#B8A59D] cursor-pointer"
                size={20}
              />

              <div className="text-[#B8A59D]">
                <p className="text-[0.6rem]">
                  Damage <span className="font-bold">3d6</span>
                </p>
                <p className="text-[0.6rem]">
                  Damage <span className="font-bold">3d6</span>
                </p>
              </div>
            </div>
            <div className="w-[9.4rem] h-[9.4rem]">
              <img className="w-full h-full object-contain " src={item.img} />
            </div>
            <div className="w-[85%] h-[0.1rem]  mb-3 bg-[#ffffff98]"></div>

            <h1 className="capitalize why_p font-semibold">{item.name}</h1>

            <div className="flex  justify-center items-center">
              <img
                className="w-[2rem] h-[2rem]"
                src={item.coinImg}
                alt="coin"
              />
              <h1 className="why_p"> {item.coinNo}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlaceContent;
