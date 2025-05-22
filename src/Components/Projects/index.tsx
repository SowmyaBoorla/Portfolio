"use client";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Shatavahana Website",
      description:
        "A website for Shatavahana - a restaurant specializing in traditional cuisine.",
      link: "https://www.sathavahanakitchen.com/",
      image: "shathavahana.png",
      tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 2,
      name: "VithiIT",
      description:
        "The official website of Vithi IT, showcasing tech services and solutions.",
      link: "https://vithiit.com",
      image: "vithi.png",
      tools: ["Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 3,
      name: "Kotrike HRMS Application",
      description:
        "An HRMS application for Kotrike to manage employees and attendance.",
      link: "https://kotrike-hrms.vercel.app/",
      image: "kotrike.png",
      tools: ["React", "Typescript", "REST API", "Tailwind CSS"],
    },
    {
      id: 4,
      name: "Amaiya Site",
      description: "The website for Amaiya - a modern lifestyle brand.",
      link: "https://amaiya.vercel.app/",
      image: "amaiya.png",
      tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 5,
      name: "Slay Coffee",
      description:
        "A website for Slay Coffee - showcasing their premium coffee products.",
      link: "https://slaycoffee.in/",
      image: "slaycofee.png",
      tools: ["Next.js", "CSS", "TailwindCSS", "Graphql"],
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-14 md:px-14 mb-6">
      <div className="text-[#ad00fe] text-3xl sm:text-4xl mt-8 font-semibold mb-4 text-center">
        My Projects
      </div>

      <div className="flex flex-col gap-12 max-w-7xl w-full">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col-reverse md:flex-row max-w-4xl mx-auto
              transform transition duration-500 ease-in-out
              hover:scale-[1.03] hover:shadow-2xl
              opacity-0 translate-y-8
              animate-fadeInUp
              animation-delay-${index}
            `}
            style={{
              animationFillMode: "forwards",
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#ad00fe] mb-3">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-5">
                {project.description}
              </p>
              <h3 className="text-base font-semibold text-[#ad00fe] mb-2">
                Tools Used:
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                {project.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 w-full max-h-[300px] md:max-h-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;
