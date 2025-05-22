"use client";
import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [index, setIndex] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setAnimationDone(true);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      className={`typewriter-wrapper ${
        animationDone ? "scale-out" : "scale-in"
      }`}
    >
      <div className="typewriter">
        {text.substring(0, index)}
      </div>
    </div>
  );
};

export default Typewriter;
