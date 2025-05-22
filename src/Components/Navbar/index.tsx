"use client";
import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const githubLink = "https://github.com/";
const linkedinLink = "https://www.linkedin.com/in/sowmya-boorla-1756832b3/";
const cvLink = "/SowmyaResumeBlack.pdf";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-lg flex items-center justify-between px-3 sm:px-6 h-16">
      {/* Left: Portfolio */}
      <div className="flex items-center">
        <h1
          className="text-[#ad00fe] text-lg sm:text-2xl font-extrabold tracking-wide animate-pulse"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <Link href="/">Portfolio</Link>
        </h1>
      </div>

      {/* Right: Icons + Button */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Social Icons */}
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 sm:p-2 rounded-full border-2 border-[#ad00fe] bg-transparent hover:bg-gray-900 transition flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github size={16} className="text-[#ad00fe] sm:text-[#ad00fe]" />
        </Link>
        <Link
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 sm:p-2 rounded-full border-2 border-[#ad00fe] bg-transparent hover:bg-gray-900 transition flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} className="text-[#ad00fe] sm:text-[#ad00fe]" />
        </Link>
{/* <div> <ThemeToggle /></div> */}
        {/* Download CV Button */}
        <Link
          href={cvLink}
          download
          className="px-2 py-1 sm:px-3 sm:py-2 border-2 border-[#ad00fe] text-[#ad00fe] hover:bg-[#ad00fe] hover:text-black transition rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap"
        >
          Download CV
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
