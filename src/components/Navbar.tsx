import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <motion.div
        className="container-wrapper flex justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <a href="#" className="text-4xl font-bold gradient-text">
          D<span className="text-primary-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experienceF")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
         className={`absolute top-0 right-0 w-64 min-h-full bg-dark-100 !important shadow-xl p-8 flex flex-col md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-8">
          <a
            href="#about"
            className="nav-link text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-link text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="nav-link text-lg"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </nav>
      </motion.div>

      {/* Scroll to top button */}
    </header>
  );
};

export default Navbar;
