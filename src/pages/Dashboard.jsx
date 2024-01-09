/* eslint-disable react/jsx-key */
import React from "react";
import { useState } from "react";
import { Diamond, coin, magicPotion } from "../assets";
import { dashLinks } from "../constants";
import DashboardContent from "../components/DashboardContent";
import MarketPlace from "../components/MarketPlaceContent";
import Certificate from "../components/Certificate";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import DashbordNavbar from "../components/Dashboard/DashbordNavbar";
import Navigator from "../components/Dashboard/Navigator";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div>
      {/* top */}
      <DashbordNavbar />

      <div className="lg:hidden mb-[5rem]">
        <Navbar />
      </div>

      {/* bottom */}
      <Navigator />
    </div>
  );
};

export default Dashboard;
