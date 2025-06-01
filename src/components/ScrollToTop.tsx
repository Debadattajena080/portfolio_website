import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* WhatsApp Button (Always Visible) */}
      <motion.a
        href="https://wa.me/6370029944" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="backdrop-blur-md bg-white/30 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-xl rounded-2xl p-3 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6 text-black dark:text-white" />
      </motion.a>

      {/* Scroll to Top Button (Visible on scroll) */}
      {showArrow && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="backdrop-blur-md bg-white/30 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-xl rounded-2xl p-3 transition-transform duration-300 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6 text-black dark:text-white" />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
