'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'GraphQL',
  'REST APIs',
  'Git',
  'SharePoint Admin',
  'Power Apps',
  'Microsoft 365',
];

const containerVariants = {
  visible: (reverse: boolean) => ({
    transition: {
      staggerChildren: 0.15,
      staggerDirection: reverse ? -1 : 1,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, skills.length * 150 + 1000); // delay before reversing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] px-4 sm:px-6 md:px-10 lg:px-20 py-16">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      <motion.div
        className="z-10 w-full max-w-6xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        custom={reverse}
        key={reverse ? 'reverse' : 'forward'}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ad00fe] mb-6 drop-shadow-lg leading-tight">
          My Skills
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 font-medium max-w-2xl mx-auto">
          The tools and technologies I use to craft responsive, dynamic web experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill) => (
            <motion.div
              key={`${skill}-${reverse ? 'rev' : 'fwd'}`}
              className="bg-[#1f1f1f] border border-yellow-400/20 text-[#ad00fe] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md hover:bg-[#ad00fe] hover:text-black transition duration-300 cursor-pointer text-sm sm:text-base md:text-lg font-semibold backdrop-blur-sm"
              variants={itemVariants}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
