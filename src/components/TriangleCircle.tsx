import React from "react";

const RotatingTriangle = () => {
  return (
    <div className="w-[340px] h-[340px] flex justify-center items-center bg-gray-200 relative">
      {/* 정삼각형 */}
      <div
        className="w-0 h-0 border-l-[119px] border-l-transparent border-r-[119px] border-r-transparent border-b-[206.3px] border-b-red-500 absolute"
        style={{
          top: "29%",
          left: "50%",
          transform: "translate(-50%, -33%) rotate(0deg)", // 정중앙으로 이동 및 회전 적용
          transformOrigin: "50% 66%", // 무게중심을 기준으로 회전
          animation: "spin 3s linear infinite",
        }}
      ></div>

      {/* CSS 애니메이션 추가 */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -33%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -33%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingTriangle;