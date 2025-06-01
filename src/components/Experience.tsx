import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "work" | "education";
  link: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Web Developer",
    organization: "Elite Concept Pvt. Ltd.",
    date: "2025 - Present",
    description: `
  Led the frontend development team to build scalable and responsive web applications with modern UI/UX principles. 
  Integrated Zoho CRM for lead tracking and automation, boosting client acquisition workflow. 
  Implemented multilingual support including Arabic, ensuring global reach and accessibility. 
  Added gamification elements to increase user engagement and retention. 
  Enhanced SEO to achieve a 92+ Lighthouse score and optimized performance for fast load times and seamless experience across devices.
`,
    type: "work",
    link: "https://www.elitebodyhome.com/",
  },
  {
    id: 2,
    title: "Web Developer",
    organization: "360DigiTMG",
    date: "2024 - 2025",
    description: `
  Developed responsive web applications using React, Redux, and TypeScript with a focus on clean architecture and maintainability. 
  Integrated backend services with PostgreSQL and Node.js to deliver dynamic, data-driven features. 
  Collaborated closely with UI/UX designers to implement interactive animations using Framer Motion, enhancing user engagement. 
  Improved performance and accessibility while ensuring cross-browser compatibility across all major devices.
`,
    type: "work",
    link: "https://aispry.ai/",
  },
  {
    id: 3,
    title: "Web Developer",
    organization: "Kreeti Technology Pvt. Ltd.",
    date: "2021 - 2024",
    description: `
  Built custom websites and business platforms for clients across multiple industries using React and its ecosystem, including React Router, Context API, and Redux. 
  Delivered responsive, accessible, and high-performance solutions with modern HTML, Tailwind CSS, and JavaScript. 
  Collaborated in agile sprints, implemented reusable components, and followed best practices for code quality, scalability, and UI consistency. 
  Optimized for SEO and performance across devices and browsers.
`,
    type: "work",
    link: "https://www.joballey.in/",
  },
];

const stats = [
  { value: "6000+", label: "Working Hours" },
  { value: "15+", label: "Total projects" },
  { value: "3+", label: "Years Journey" },
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const beforeChange = (nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <section className="section" id="experience">
      <div className="container-wrapper">
        <h2 className="section-title">
          My <span className="gradient-text">Experience</span>
        </h2>
        <motion.div
          className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Bio Details (slides from left) */}
          <motion.div
            className="bg-white/30 dark:bg-dark-100 p-6 lg:p-8 rounded-xl shadow-lg "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <motion.h2
                    className="text-3xl font-bold mb-2 text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    3+ Years of Experience
                  </motion.h2>
                  <motion.h4
                    className="text-xl text-gray-500 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Do you have any project?
                  </motion.h4>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  Debadatta Jena
                </h3>
                <p className="text-primary-600  italic">
                  Design is not only art but also science and commerce as well
                </p>
              </motion.div>

              <motion.p
                className="text-gray-600 dark:text-gray-300 my-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                With a deep passion for design and innovation, I leverage the
                power of AI to deliver creative, high-quality solutions with
                speed and precision. My work blends aesthetics with intelligent
                systems to produce results that not only meet expectations but
                exceed them—on time, every time.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <span className="block text-primary-600  font-medium">
                    debadattajena080@gmail.com
                  </span>
                </div>
                <div>
                  <span className="block text-primary-600  font-medium">
                    +91 6370 029944
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="mt-6 md:mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-600 dark:to-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats (slides from right) */}
          <motion.div
            className="flex flex-col"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/30 dark:bg-dark-100 p-4 md:p-4 rounded-xl shadow-lg border border-gray-100 dark:border-dark-100 "
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-600 -400 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative overflow-hidden"
            >
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                beforeChange={beforeChange}
                additionalTransfrom={0}
                showDots={true}
                arrows={false}
              >
                {timelineItems.map((item, index) => (
                  <div key={item.id} className="py-8 ">
                    <AnimatePresence custom={currentSlide - index}>
                      <motion.div
                        custom={currentSlide - index}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative "
                      >
                        {/* Floating icon */}

                        {/* Card content */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className={`bg-white/30 dark:bg-dark-100 backdrop-blur-lg p-6 rounded-2xl shadow-md border
                        border-white/20 dark:border-dark-100/20 transition-all duration-300 hover:shadow-lg
                        min-h-[300px] mx-auto max-w-3xl
                      `}
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 tracking-wide uppercase
                          ${
                            item.type === "work"
                              ? "bg-primary-100/40 dark:bg-primary-800/20 text-primary-700 dark:text-primary-300"
                              : "bg-secondary-100/40 dark:bg-secondary-800/20 text-secondary-700 dark:text-secondary-300"
                          }
                        `}
                          >
                            {item.date}
                          </motion.span>

                          <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl font-semibold text-gray-800 dark:text-white mb-1"
                          >
                            {item.title}
                          </motion.h3>

                          <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-3"
                          >
                            {item.organization}
                          </motion.h4>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-line"
                          >
                            {item.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-4"
                          >
                            <a
                              href={item.link}
                              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300
             bg-primary-600 hover:primary-700 
             text-white dark:text-white/90
             shadow-sm hover:shadow-md
             border border-teal-600/20 dark:border-teal-700/30
             focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                            >
                              View details
                              <svg
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
