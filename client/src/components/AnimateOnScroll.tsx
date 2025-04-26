import { motion, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "zoom" | "bounce";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.45
      }
    }
  }
};

export default function AnimateOnScroll({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          controls.start("hidden");
        }
      },
      { threshold }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, once]);
  
  const selectedAnimation = animations[animation];
  const transition = { 
    delay, 
    duration,
    ease: "easeOut"
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}