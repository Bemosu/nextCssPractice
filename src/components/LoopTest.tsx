import React from "react";
import { motion } from "framer-motion";

interface directionProps {
  firstx : string | undefined
  secondx : string | undefined
}

const LoopTest : React.FC<directionProps> = ({firstx, secondx}) => {

  return (
    <div className="overflow-hidden w-full relative flex flex-nowrap mt-6">
      <motion.div
        className="flex space-x-4 w-[200%]"
        animate = {{x:[firstx,secondx]}}
        transition={{ease:"linear", duration:6, repeat:Infinity}}
      >
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-red-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-blue-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-green-300 rounded-lg shadow-lg"></div>
        <div className="w-[150px] h-[150px] bg-yellow-300 rounded-lg shadow-lg"></div>
      </motion.div>
    </div>
  );
};

export default LoopTest;
