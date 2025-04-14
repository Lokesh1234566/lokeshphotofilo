import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Profile",
  "Contact",
  "Courses",
  "Education",
  "Projects",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Photofilo</div>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col bg-gray-100 dark:bg-gray-800 p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
