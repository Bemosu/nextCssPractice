"use client";

import React from "react";
import { motion } from "framer-motion";


const FramerMotion = () => {
  return (
    <div className="h-[200vh] flex items-center justify-center">
      {/* 애니메이션이 적용될 motion.div */}
      <motion.div
        className="p-10 bg-red-700 text-white text-2xl rounded-md"
        animate={{ rotate:360 }} // 360도 회전 애니메이션
        transition={{ duration: 1 ,repeat:Infinity, ease: "linear"}} // 1초 동안 애니메이션 실행
      >
        프레이머를 이용한 박스
      </motion.div>
    </div>
  );
};

export default FramerMotion;