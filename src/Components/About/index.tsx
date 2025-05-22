import React from 'react';
import Typewriter from '../TypeWritter';

const About = () => {
  return (
    <div className="bg-black text-[#ad00fe] min-h-screen flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="bg-[#ad00fe] w-full max-w-5xl mx-auto p-1 rounded-3xl shadow-xl">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center border-b-2 border-[#ad00fe] pb-4 mb-8">
            <Typewriter text="About Me" />
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mb-6 text-gray-300">
            Hello! I'm a passionate <span className="font-semibold text-white">Frontend Developer</span> currently working at
            <span className="font-semibold text-white"> Vithi IT Solutions</span> since <span className="text-white font-semibold">March 1st, 2024</span>.
            I specialize in creating responsive, user-friendly interfaces using modern web technologies.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-300">
            My tech stack includes:
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm sm:text-base font-medium text-white">
            {[
              "HTML", "CSS", "JavaScript", "React js", "Next js",
              "TypeScript", "Tailwind CSS", "GraphQL", "REST API", "Sharepoint Admin", "PowerApps",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-violet-400/20 px-4 py-2 rounded-full hover:bg-[#ad00fe] transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-300 mt-6">
            I'm always eager to learn and follow best practices to deliver clean, maintainable, and scalable frontend code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
