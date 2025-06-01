import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import { useInView } from "react-intersection-observer";
import Testimonials from "./components/Testimonials";

import BlogPost from "./components/BlogPost";
import ScrollToTop from "./components/ScrollToTop";

import "react-multi-carousel/lib/styles.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Setup preloader
  useEffect(() => {
    document.body.classList.add("no-scroll");

    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("no-scroll");
    }, 2000);

    // Check for user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle theme toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  // Animation for sections
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: projectsRef, inView: projectsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: skillsRef, inView: skillsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: experienceRef, inView: experienceVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: testimonalsRef, inView: testimonailVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: blogpostRef, inView: blogpostVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      {isLoading ? <Preloader /> : null}
      <CustomCursor />

      <div className="min-h-screen flex flex-col overflow-hidden">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <Hero />

          <div
            ref={aboutRef}
            className={`animate-in ${aboutVisible ? "visible" : ""}`}
          >
            <About />
          </div>

          <div
            ref={experienceRef}
            className={`animate-in ${experienceVisible ? "visible" : ""}`}
          >
            <Experience />
          </div>

          <div
            ref={skillsRef}
            className={`animate-in ${skillsVisible ? "visible" : ""}`}
          >
            <Skills />
          </div>

          <div
            ref={projectsRef}
            className={`animate-in ${projectsVisible ? "visible" : ""}`}
          >
            <Projects />
          </div>

          <div
            ref={testimonalsRef}
            className={`animate-in ${testimonailVisible ? "visible" : ""}`}
          >
            <Testimonials />
          </div>

          <div
            ref={blogpostRef}
            className={`animate-in ${blogpostVisible ? "visible" : ""}`}
          >
            <BlogPost />
          </div>

          <div
            ref={contactRef}
            className={`animate-in ${contactVisible ? "visible" : ""}`}
          >
            <Contact />
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
