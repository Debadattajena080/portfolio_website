import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 15);
    
    return () => clearInterval(interval);
  }, []);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <div className={`preloader ${isLoaded ? 'loaded' : ''}`}>
      <motion.div 
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="text-4xl font-bold mb-6 gradient-text"
          variants={item}
        >
          D<span className="text-primary-500">.</span>
        </motion.div>
        
        <motion.div 
          className="w-64 h-1 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden mb-4"
          variants={item}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
        
        <motion.div 
          className="text-gray-600 dark:text-gray-400"
          variants={item}
        >
          {progress}%
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Preloader;