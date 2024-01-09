import React, { Suspense } from "react";
import Loader from "../Loader";
import { aboutImg, aboutMobile } from "../../assets";

const About = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="max-w-[85rem] mx-auto w-full mb-32 mt-5 p-4">
        <img src={aboutImg} className="w-full  hidden md:block" />
        <img className="w-full md:hidden" src={aboutMobile} />
      </div>
    </Suspense>
  );
};

export default About;
