import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Improve website performance with javascript optimization techniques",
    excerpt:
      "Discover powerful JavaScript optimization methods to boost your website's speed and responsiveness, from minimizing DOM operations to efficient event handling.",
    image:
      "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7204049285632466944/",
  },
  {
    id: 2,
    title: "Web Storage",
    excerpt:
      "Master the use of web storage APIs including localStorage and sessionStorage to enhance user experience with client-side data persistence.",
    image:
      "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Web Development",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7202780383556378625/",
  },
  {
    id: 3,
    title: "Creating Engaging User Experiences with Modern UI Design",
    excerpt:
      "Discover how to create compelling user experiences through modern UI design principles and best practices.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "UI/UX Design",
    link: "#",
  },
];

const BlogPost: React.FC = () => {
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
    <section className="section" id="blog">
      <div className="container-wrapper">
        <h2 className="section-title">
          Latest <span className="gradient-text">Blog Posts</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="button-secondary inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
