"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Typewriter from "../TypeWritter";
import Image from "next/image";

const Header = () => {



  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#111111] px-6 sm:px-8 text-white gap-10 overflow-hidden">


<div className="flex-shrink-0 bg-[#ad00fe] p-1 rounded-full shadow-xl mt-12 lg:mt-0">
<Image
  src="/image2.jpeg"
  alt="Profile"
  width={400}
  height={400}
  className="object-cover rounded-full"
/>
</div>

      {/* Text Content */}
      <div className="text-center lg:text-left lg:ml-10 max-w-2xl lg:mr-[10%]">
        <h2 className="text-[#ad00fe] text-3xl sm:text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3">
          <span className="w-10 h-[2px] bg-[#ad00fe] inline-block "></span>
          <Typewriter text="IM SOWMYA." />
        </h2>
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6">
          <Typewriter text="UI DEVELOPER" />
        </h1>
        <p className="text-gray-300 mb-6 px-2 lg:px-0">
          Im a frontend developer passionate about creating clean and
          user-friendly experiences. I love building intuitive interfaces and
          responsive designs that solve real problems.
        </p>

<Link href="/about">
  <button className="group flex items-center justify-center mx-auto lg:mx-0 px-6 py-3 border border-[#ad00fe] text-[#ad00fe] rounded-full transition duration-300 hover:bg-[#ad00fe] hover:text-black">
    MORE ABOUT ME
    <span className="ml-4 p-2 rounded-full transition duration-300 group-hover:bg-black group-hover:text-[#ad00fe]">
      <ArrowRight size={16} />
    </span>
  </button>
</Link>

        <div className="mt-8 italic text-gray-400 text-sm sm:text-base">
  Design is not just what it looks like and feels like. Design is how it works. <span className="text-[#ad00fe]">– Steve Jobs</span>
</div>


      </div>
    </div>
  );
};

export default Header;
