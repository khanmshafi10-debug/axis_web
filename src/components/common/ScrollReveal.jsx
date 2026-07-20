import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedPage({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, delay = 0, direction = 'up', distance = 30, duration = 0.5, className = "", style = {} }) {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case 'zoom':
        return { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } };
      case 'up':
      default:
        return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={getVariants()}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, staggerDelay = 0.1, delay = 0, className = "", style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.98 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
