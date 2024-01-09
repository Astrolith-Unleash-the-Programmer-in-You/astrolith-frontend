/* eslint-disable react/jsx-key */
import { marketItems } from "../constants";
import React from "react";

const MarketPlaceContent = () => {
  return (
    <div className=" m-10">
      <h1 className="bg-[#232323] text p-3 rounded-lg lg:w-[100vh]  my-10">
        Weapons and potions (230){" "}
      </h1>

      <div className="flex gap-3 justify-center flex-wrap">
        {marketItems.map((item, index) => (
          <div key={index} className="rounded-xl p-[1.7rem] border-[1px] bg-[#232323] lg:w-[15%] w-[46%] flex flex-col justify-center items-center">
            <img
              className="w-[5rem] h-[5rem] mb-3 object-contain "
              src={item.img}
            />

            <h1 className="w-[5.9rem] h-[0.1rem]  mb-3 bg-[#ffffff98]"></h1>

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
