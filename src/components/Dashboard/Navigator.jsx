import React, { useState } from "react";
import { dashLinks } from "../../constants";
import DashboardContent from "../DashboardContent";
import MarketPlaceContent from "../MarketPlaceContent";
import Certificate from "../Certificate";

const Navigator = () => {
  const [active, setActive] = useState("MarketPlace");

  return (
    <div className="flex items-start  justify-items-start">
      {/* left */}
      <ul className="bg-[#232323] hidden lg:flex h-[120vh] flex-col justify-center p-5 w-[35vh] list-none gap-10">
        {dashLinks.map((Link) => (
          <li
            className="w-[10.3rem] h-[2.2erm] cursor-pointer"
            key={Link.id}
            onClick={() => setActive(Link.title)}
          >
            {active === Link.title ? (
              <img className="w-full" src={Link.activeText} />
            ) : (
              <h1 className="w-full">{Link.title}</h1>
            )}
          </li>
        ))}
      </ul>

      {/* right */}
      {active === "Dashboard" && <DashboardContent />}
      {active === "MarketPlace" && <MarketPlaceContent />}
      {active === "Certificate" && <Certificate />}
    </div>
  );
};

export default Navigator;
