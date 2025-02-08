"use client";

import { FaArrowCircleDown } from "react-icons/fa";
import "animate.css";
import { useEffect, useRef } from "react";

const Separator = () => {
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const target = separatorRef.current
          ? separatorRef.current.querySelectorAll(".animate__flash")
          : [];
        target.forEach((el) => {
          const htmlElement = el as HTMLElement;
          if (entry.isIntersecting) {
            htmlElement.style.animationPlayState = "running";
          } else {
            htmlElement.style.animationPlayState = "paused";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (separatorRef.current) {
      observer.observe(separatorRef.current);
    }

    return () => {
      if (separatorRef.current) {
        observer.unobserve(separatorRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={separatorRef}
      className="flex flex-row bg-blue-500 py-20 justify-around text-white">
      <FaArrowCircleDown className="text-3xl md:text-6xl animate__animated animate__flash" />
      <h1 className="text-3xl md:text-4xl font-bold">Veja Outros Clones</h1>
      <FaArrowCircleDown className="text-3xl md:text-6xl animate__animated animate__flash" />
    </div>
  );
};

export default Separator;
