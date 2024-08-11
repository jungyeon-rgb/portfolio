"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 3,
        ease: "power3.out",
        delay: 0,
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="relative flex flex-col p-12 text-center text-white font-stardom"
    >
      <h1 className="text-9xl">
        <span>Front-end</span> <span>Developer</span>
      </h1>
      <h1 className="text-9xl">
        <span>Kim</span> <span>Jung</span> <span>Yeon</span>
      </h1>
    </div>
  );
};

export default AnimatedText;
