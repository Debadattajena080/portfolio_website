import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Palette,
  BookOpen,
  Users,
  Download,
  Sparkles,
} from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const skills = [
  {
    icon: <Code2 size={24} />,
    title: "Web Development",
    description:
      "Crafting blazing-fast, SEO-optimized web apps with React, Next.js, and cutting-edge frameworks for seamless user experiences.",
    color: "gradient",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description:
      "Designing pixel-perfect interfaces with intuitive workflows that delight users and boost conversion rates.",
    color: "gradient",
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI Integration",
    description:
      "Supercharging development with AI tools to automate workflows and deliver intelligent features faster.",
    color: "gradient",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Continuous Learning",
    description:
      "Mastering emerging technologies to build future-proof solutions with modern best practices.",
    color: "gradient",
  },
  {
    icon: <Users size={24} />,
    title: "Team Collaboration",
    description:
      "Leading cross-functional teams to transform ideas into high-impact digital products efficiently.",
    color: "gradient",
  },
];
const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  return (
    <section className="section " id="about">
      <div className="container-wrapper">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          <motion.div
            className="md:col-span-5 relative"
            variants={itemVariants}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Golam Morsed"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary-500/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-secondary-500/20 rounded-full blur-xl z-0"></div>
          </motion.div>

          <motion.div className="md:col-span-7" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">
              Web Developer & UI/UX Designer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hello! I'm Debadatta Jena, a passionate Web Developer and UI/UX
              Designer with 3+ years of experience creating beautiful,
              functional websites and applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in building modern web applications using React,
              Next.js, and TypeScript. My approach combines technical expertise
              with creative design thinking to deliver exceptional user
              experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open source projects, or sharing my knowledge
              through blog posts and mentoring.
            </p>

            <a
              href="https://drive.google.com/file/d/176HbWvOEZrlAXO0hmQNpBswg32niuE5k/view?usp=sharing"
              className="button-primary flex items-center gap-2 w-fit"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mt-10 lg:px-8">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            itemClass=" md:px-4 py-8"
            arrows={false}
            renderButtonGroupOutside={true}
            showDots={true}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full bg-white/30 dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group
                ${
                  skill.color === "gradient"
                    ? "border border-transparent"
                    : "border border-gray-100 dark:border-dark-200"
                }`}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient overlay for special card */}
                  {skill.color === "gradient" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-transparent to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  <div className="relative z-10">
                    {/* Icon container with different styles based on color */}
                    <div
                      className={`
                  w-14 h-14 flex items-center justify-center rounded-xl mb-5
                  ${
                    skill.color === "primary"
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      : ""
                  }
                  ${
                    skill.color === "secondary"
                      ? "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400"
                      : ""
                  }
                  ${
                    skill.color === "accent"
                      ? "bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400"
                      : ""
                  }
                  ${
                    skill.color === "gradient"
                      ? "bg-gradient-to-br from-primary-400/20 to-accent-400/20 text-primary-600 dark:text-primary-300"
                      : ""
                  }
                `}
                    >
                      {skill.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>

                    {/* Animated hover element */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
