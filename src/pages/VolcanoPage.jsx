/* eslint-disable react/no-unknown-property */
// import { OrbitControls } from "@react-three/drei";
// import VolcanoCanvas from "../canvas/VolcanoCanvas";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import VolcanoCanvas from "../canvas/VolcanoCanvas";
import { JanetCanvas, StarsCanvas } from "../canvas";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VolcanoPage = () => {
  const [environmentPosition, setEnvironmentPosition] = useState([
    5.229, -15.2, 40.545,
  ]);

  const [janet, setJenet] = useState(true);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJenet(false);
    }, 14000);

    return () => clearTimeout(timer);
  }, []);

  const handleCharacterMove = () => {
    // setEnvironmentPosition([5.229, -15, -5.545]);
  };

  return (
    <div>
      <div className="w-full h-screen absolute">
        <VolcanoCanvas position={environmentPosition} />
      </div>

      {/* <div className="relative h-[20vh]">
        <StarsCanvas />
      </div> */}

      {janet ? (
        <div className="  h-[100vh] bg-red">
          <JanetCanvas handleCharacterMove={handleCharacterMove} />
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.001 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.001 }}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 1.8,
          }}
          className="rounded-3xl shadow-2xl h-[80vh] lg:w-[90vh] w-[75vh]
       m-auto top-[6vh] relative bg-white border-x-4 border-orange-600 "
        >
          <div
            className=" text-black my-10 mx-5 flex flex-col justify-center 
        items-center"
          >
            <div className="flex my-2 gap-3 items-center">
              <div
                className="po poi cursor-pointer"
                onClick={() => setInfo(!info)}
              >
                <FaInfoCircle />
              </div>

              <h1 className="lg:text-3xl text-2xl popup capitalize font-bold">
                welcome to planet volxtron
              </h1>
            </div>

            {info && (
              <p className="rounded-2xl p-4 capitalize popup_body z-20  bg-orange-600 text-white">
                a firey volcano planet inhabitted by the crux clan, a dangerous
                and wild specie. to advance on your journey, you have to defeat
                their boss, megacrux. But dont worry, we will equip you with the
                skills needed to obtain victory over your enemy.
              </p>
            )}

            <p className="capitalize p-5 text-center lg:bottom-[15rem] bottom-[12rem] mt-20 absolute">
              in this module, you will be introduced to the fundamentals of
              coding. you will learn about loops, arrays and data types. at the
              end of the module, you will be given a tasks. Successfull
              completion of the task will give you the skills needed to defeat
              megacruz, the overlord of volxtron
            </p>

            <Link
              to="/volcano"
              className="rounded-2xl py-3 absolute top-[18rem] bg-orange-600 text-white gap-2 capitalize mt-20 text-center border-2 px-5 my-4 w-[12.1rem]"
            >
              {/* <img src={play} alt="play" /> */}
              <p className=" ">Begin</p>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VolcanoPage;
