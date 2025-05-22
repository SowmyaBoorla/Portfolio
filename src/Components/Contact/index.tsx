"use client";

import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const contactItems = [
  {
    icon: <FaPhoneAlt className="text-[#ad00fe] text-xl" />,
    label: "+91 9390653494",
  },
  {
    icon: <FaEnvelope className="text-[#ad00fe] text-xl" />,
    label: "sowmyaboorla5@gmail.com",
  },
  {
    icon: <FaGithub className="text-[#ad00fe] text-xl" />,
    label: "github.com/yourusername",
    link: "https://github.com/",
  },
  {
    icon: <FaLinkedin className="text-[#ad00fe] text-xl" />,
    label: "linkedin.com/in/yourprofile",
    link: "https://www.linkedin.com/in/sowmya-boorla-1756832b3/",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl text-white space-y-6 border border-[#ad00fe]/30"
      >
        <h2 className="text-4xl sm:text-4xl font-bold text-[#ad00fe] text-center drop-shadow-md">
          Contact Info
        </h2>

        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 justify-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg hover:underline hover:text-[#ad00fe]/90 transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-base sm:text-lg">{item.label}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
