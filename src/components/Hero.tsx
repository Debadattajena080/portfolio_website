import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail } from "lucide-react";
import myImage from "../assets/myImage.jpg";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  // Generate random stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        opacity: Math.random() * 0.5 + 0.5,
        animationDelay: `${Math.random() * 5}s`,
      };
      return (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={style}
        />
      );
    });
  };

  // Generate shooting stars
  const generateShootingStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const style = {
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
      };
      return (
        <div
          key={`shooting-${i}`}
          className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-white to-transparent animate-shootingStar"
          style={style}
        />
      );
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-dark-900 to-dark-950"
      id="home"
    >
      {/* Starry background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {generateStars(100)}
        {generateShootingStars(3)}
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-6 p-1 bg-gray-200/50 dark:bg-dark-100/50 rounded-full overflow-hidden bg-gradient-to-br from-primary-300 to-accent-300 dark:from-primary-700 dark:to-accent-700"
            variants={itemVariants}
          >
            <img
              src={myImage}
              alt="Debadatta Jena"
              className="w-44 h-44 rounded-full object-contain"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">DEBADATTA JENA</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-14 md:h-16 mb-6">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Full Stack Developer",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-300"
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
            variants={itemVariants}
          >
            With a sharp eye for design and the power of AI in my toolkit, I
            transform ideas into polished, high-impact web solutions — built
            faster, smarter, and tailored for tomorrow's users.
          </motion.p>

          <motion.div className="flex gap-4 mb-12" variants={itemVariants}>
            <a
              href="#contact"
              className="button-primary flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
              <Mail size={18} />
            </a>
            <a
              href="#projects"
              className="button-secondary flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
          </motion.div>

          <motion.div className="flex gap-4 md:gap-6" variants={itemVariants}>
            {[
              {
                href: "https://github.com",
                label: "GitHub Profile",
                icon: <Github size={20} />,
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn Profile",
                icon: <Linkedin size={20} />,
              },
              {
                href: "mailto:contact@example.com",
                label: "Email Me",
                icon: <Mail size={20} />,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group relative p-3 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-lg hover:shadow-2l transition-all duration-300 hover:scale-110 "
              >
                <div className="text-gray-800 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
                  {item.icon}
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
