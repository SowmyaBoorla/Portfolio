// components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-[#ad00fe] hover:bg-gray-900 transition"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={18} className="text-[#ad00fe]" />
      ) : (
        <Moon size={18} className="text-[#ad00fe]" />
      )}
    </button>
  );
};

export default ThemeToggle;
