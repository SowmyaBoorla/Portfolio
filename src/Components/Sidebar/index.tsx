"use client";
import React, { useState, useEffect } from "react";
import { Home, User, Folder, Layers, Mail, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: Layers, label: "Skills", href: "/skills" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

const SidebarIcons = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const active = menuItems.find((item) => pathname === item.href);
    if (active) setActiveItem(active.label);
  }, [pathname]);

  return (
    <>
      {/* Hamburger icon for mobile - only show when menu is closed */}
      {!isMenuOpen && (
        <div className="fixed top-20 right-6 z-50 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white bg-gray-800 p-2 rounded-full"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar for large screens */}
      <div className="hidden lg:flex fixed top-[25%] right-6 flex-col gap-6 z-50">
        {menuItems.map((item, index) => {
          const isActive = activeItem === item.label;
          return (
            <Link
              key={index}
              href={item.href}
              className="group relative flex items-center justify-end cursor-pointer"
              onClick={() => setActiveItem(item.label)}
            >
<span className="absolute right-12 top-1/2 -translate-y-1/2 uppercase text-white text-sm font-medium px-3 py-1 rounded-full opacity-0 scale-95 translate-x-2 shadow-lg group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 ease-out bg-black">
  {item.label}
</span>

              <span
                className={`rounded-full p-3 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-110 ${
                  isActive
                    ? "bg-[#ad00fe] text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                <item.icon size={20} />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Slide-in mobile menu */}
      <div
        className={`fixed top-14 right-0 w-2/3 h-full bg-[#111111] z-40 shadow-2xl flex flex-col items-start p-6 space-y-6 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white bg-gray-800 p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 mt-6 w-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 text-white hover:text-[#ad00fe]"
              onClick={() => {
                setActiveItem(item.label);
                setIsMenuOpen(false);
              }}
            >
              <item.icon size={20} />
              <span className="text-lg font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarIcons;
