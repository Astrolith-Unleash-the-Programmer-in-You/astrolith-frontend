import React from "react";

import { Diamond, coin, magicPotion } from "../assets";
import DashbordNavbar from "../components/Dashboard/DashbordNavbar";

const Profile = () => {
  return (
    <div>
      {/* top */}
      <DashbordNavbar />

      {/* bottom */}
      <div className="m-20 w-[90%]">
        <div className="bg-[#232323] ">
          <div className="w-full h-[0.9rem] bg-[#2E2E2E]"></div>
          <div className="flex p-5 gap-5 items-center">
            <img
              src={Diamond}
              className="rounded-full object-cover w-[3rem] h-[3rem]"
              alt="prof"
            />
            <div>
              <h1 className="text-2xl font-semibold mb-3">Adam john</h1>
              <h1 className="flex border-[1px] rounded-2xl p-1 text-center">
                <img src={coin} alt="coin" className="w-[1.4rem] h-[1.4rem]" />
                <p>Golden level</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
