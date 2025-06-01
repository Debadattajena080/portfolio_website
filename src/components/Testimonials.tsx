import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Praveen Kumar Burra",
    role: "@Co-Founder & CIO, AiSPRY",
    company: "Aispry",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Working with Debadatta was an absolute pleasure. His attention to detail and technical expertise transformed our website into something truly special. The results exceeded our expectations!",
    rating: 5,
  },
  {
    id: 2,
    name: "Monish Kumar",
    role: "Team Lead, Fullstack Developer",
    company: "@Elite Concept Pvt. Ltd",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Debadatta's ability to understand our requirements and translate them into a beautiful, functional website was impressive. His technical skills and creativity made our project a huge success.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bijay Kumar Sahoo",
    role: "Fullstack Developer",
    company: "@Deloitte USI",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Having known Debadatta since our college days, I've always admired his approach to development. He combines technical precision with thoughtful design, delivering solutions that are both robust and user-friendly. His work consistently demonstrates clean architecture and attention to detail.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
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
    <section className="section " id="testimonials">
      <div className="container-wrapper">
        <h2 className="section-title">
          <span className="gradient-text">Testimonials</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-lg relative"
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Quote size={16} className="text-white" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                /> */}
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
