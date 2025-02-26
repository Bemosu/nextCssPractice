"use client"; // Next.js 13+에서는 클라이언트 컴포넌트로 설정

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedText = () => {
  const textRef = useRef(null); // 애니메이션 적용할 요소 참조

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 등록

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 }, // 시작 상태 (아래에서 투명하게 등장)
      {
        y: 0, opacity: 1, // 최종 상태 (원래 위치 + 불투명)
        duration: 1, // 애니메이션 지속 시간 (1초)
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current, // 트리거 요소
          start: "top 80%", // 화면의 80% 위치에서 애니메이션 시작
          toggleActions: "play none none none", // 한 번만 실행
        },
      }
    );
  }, []);

  return (
    <div ref={textRef} className="text-4xl font-bold opacity-0">
      Scroll Down to See Me!
    </div>
  );
};

export default AnimatedText;