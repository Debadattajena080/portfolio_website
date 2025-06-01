import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://ecommerceapp-7k0s.onrender.com/",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for managing tasks and projects. Built with React and Firebase, featuring real-time updates, task categorization, and team collaboration.",
    image: "https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://lively-gyizertodolist-37ab21.netlify.app/",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A web application for tracking fitness activities and goals. Features include workout logging, progress visualization, and personalized recommendations.",
    image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://fabulous-hotteok-e0abc9.netlify.app/",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application providing current conditions and forecasts. Utilizes OpenWeatherMap API and features location-based search, dynamic backgrounds, and detailed metrics.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "API Integration", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Features a modern design, animations, and contact form integration.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing platform. Features include user profiles, recipe submission, searching, and favoriting functionality.",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "MongoDB", "Cloudinary"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  // Get unique tags from all projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section className="section" id="projects">
      <div className="container-wrapper">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === tag 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-200 dark:bg-dark-100 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-200'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-200 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            View More on GitHub
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;