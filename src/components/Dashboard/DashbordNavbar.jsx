import React from "react";
import { Diamond, coin, dashboardLogo, magicPotion } from "../../assets";
import { Link } from "react-router-dom";

const DashbordNavbar = () => {
  return (
    <div className="lg:flex hidden w-full  border-b-[0.1px] p-3 items-center gap-10">
      <Link to="/" className="max-w-[9.9rem] max-h-[2.2rem]">
        <img className="" src={dashboardLogo} />
      </Link>

      <div className="flex justify-between w-full">
        <ul className="hidden lg:flex gap-2">
          <li className="flex px-3 justify-center items-center rounded-lg shadow-sm bg-[#434343]">
            <img className="w-[1.8rem] h-[1.8rem]" src={coin} />
            <p>34,678</p>
          </li>

          <li className="flex gap-2 px-3  justify-center items-center rounded-lg shadow-sm bg-[#434343]">
            <p>EXP</p>
            <p>34,678</p>
          </li>

          <li className="flex px-3  justify-center items-center rounded-lg shadow-sm bg-[#434343]">
            <img className="w-[1.8rem] h-[1.8rem]" src={magicPotion} />
            <p>34,678</p>
          </li>

          <li className="flex px-3  gap-2 justify-center items-center rounded-lg shadow-sm bg-[#434343]">
            <p>Enemies: </p>
            <p> 3</p>
          </li>
        </ul>

        <Link to="/profile" className="bg-[#434343] p-2 rounded-3xl">
          <img className="w-[1.8rem] h-[1.8rem] " src={Diamond} />
        </Link>
      </div>
    </div>
  );
};

export default DashbordNavbar;
