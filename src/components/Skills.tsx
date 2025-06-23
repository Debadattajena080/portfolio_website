import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import HtmlLogo from "../assets/skills/html.png";
import CssLogo from "../assets/skills/css3.png";
import JsLogo from "../assets/skills/js.png";
import ReactLogo from "../assets/skills/react.png";
import TsLogo from "../assets/skills/typescript.png";
import TailwindLogo from "../assets/skills/tailwind.png";
import ReduxLogo from "../assets/skills/redux.png";
import NodeLogo from "../assets/skills/nodejs.png";
import ExpressLogo from "../assets/skills/express.png";
import MongoLogo from "../assets/skills/mongodb.png";
import PostgreLogo from "../assets/skills/pgsql.png";
import FigmaLogo from "../assets/skills/figma.png";
import XdLogo from "../assets/skills/canva.png";
import GitLogo from "../assets/skills/github.png";
import bootstrap from "../assets/skills/bootstrap.png";

interface Skill {
  name: string;
  logo: string;
  category: "frontend" | "backend" | "design" | "other";
}

const skills: Skill[] = [
  { name: "HTML5", logo: HtmlLogo, category: "frontend" },
  { name: "CSS3", logo: CssLogo, category: "frontend" },
  { name: "Bootstrap", logo: bootstrap, category: "frontend" },
  { name: "Tailwind CSS", logo: TailwindLogo, category: "frontend" },
  { name: "JavaScript", logo: JsLogo, category: "frontend" },
  { name: "React", logo: ReactLogo, category: "frontend" },
  { name: "TypeScript", logo: TsLogo, category: "frontend" },
  { name: "Redux", logo: ReduxLogo, category: "frontend" },
  { name: "Node.js", logo: NodeLogo, category: "backend" },
  { name: "Express", logo: ExpressLogo, category: "backend" },
  { name: "MongoDB", logo: MongoLogo, category: "backend" },
  { name: "PostgreSQL", logo: PostgreLogo, category: "backend" },
  { name: "Figma", logo: FigmaLogo, category: "design" },
  { name: "Adobe XD", logo: XdLogo, category: "design" },
  { name: "Git", logo: GitLogo, category: "other" },
];

const SkillsCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Duplicate skills for infinite loop effect
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, isInView]);

  return (
    <section
      className="relative overflow-hidden  dark:from-dark-800 dark:to-dark-900"
      id="skills"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/10 dark:bg-primary-800/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary-300/10 dark:bg-secondary-800/5 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-wrapper relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered to create exceptional digital experiences
          </p>
        </div>

        {/* Continuous carousel container */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r  before:to-transparent dark:before:from-dark-800 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l  after:to-transparent dark:after:from-dark-800"
        >
          <motion.div className="flex w-max gap-8" animate={controls}>
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center dark:bg-dark-700/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-dark-600/30 shadow-lg hover:shadow-xl transition-all"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-xl  dark:bg-dark-900 p-3 shadow-inner ">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-md font-semibold text-center text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

    
      </div>
    </section>
  );
};

export default SkillsCarousel;
