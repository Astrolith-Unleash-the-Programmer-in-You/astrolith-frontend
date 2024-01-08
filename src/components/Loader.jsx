import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
// import { slideIn } from '../utils/motion'
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <div>
      <span className="canvas-load">
        <motion.div
          // variants={slideIn('right', 'tween', 0.2, 1)}

          // y: 0,
          initial={{ scale: 0.001 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.001 }}
          transition={{ duration: 1.6, repeatType: "loop", repeat: Infinity }}

          // animate={{
          //   x:[-200, 100, -200]
          // }}
          // transition={{duration:1.5, repeatType:'loop', repeat:Infinity, }}
        >
          <p
            className="flex items-center justify-center text-center m-auto w-20 h-20 loader rounded-full p-1"
            style={{
              fontSize: 14,
              color: "#f1f1f1",
              fontWeight: 800,
              marginTop: 40,
              // transform: 'rotate(20%)',
              transition: "10s ease-in-out",
            }}
          >
            {/* {progress.toFixed(2)}% */}
          </p>
        </motion.div>
      </span>
    </div>
  );
};

export default Loader;
