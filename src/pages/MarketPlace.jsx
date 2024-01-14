/* eslint-disable react/jsx-key */
import React from "react";

import { Navbar } from "../components";
import DashbordNavbar from "../components/Dashboard/DashbordNavbar";
import Navigator from "../components/Dashboard/Navigator";

const MarketPlace = () => {
  return (
    <div>
      {/* top */}
      <DashbordNavbar />

      <div className="md:hidden mb-[5rem]">
        <Navbar />
      </div>

      {/* bottom */}
      <Navigator />
    </div>
  );
};

export default MarketPlace;
