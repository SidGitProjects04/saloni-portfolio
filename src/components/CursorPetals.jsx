import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A simple SVG Petal component
const PetalIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    style={{ filter: 'drop-shadow(0px 2px 4px rgba(177, 156, 217, 0.4))' }}
  >
    <path d="M12 2C8 2 4 8 4 12C4 16 8 22 12 22C16 22 20 16 20 12C20 8 16 2 12 2Z" />
  </svg>
);

export default function CursorPetals() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [petals, setPetals] = useState([]);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // Update mouse position
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    // Petal spawning logic (throttled conceptually by random chance)
    if (Math.random() > 0.6) {
      const newPetal = {
        id: Math.random().toString(36).substr(2, 9),
        x: e.clientX,
        y: e.clientY,
        // Randomize slight offsets, scales, and rotations for natural look
        offsetX: (Math.random() - 0.5) * 40,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
        color: Math.random() > 0.5 ? 'text-[#B19CD9]' : 'text-[#CBBEEA]', // Mix of primary and lighter lavender
        createdAt: Date.now()
      };

      setPetals((prev) => [...prev, newPetal]);
    }

    // Check if hovering over clickable element
    const target = e.target;
    setIsHoveringClickable(
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.tagName.toLowerCase() === 'a' ||
      target.tagName.toLowerCase() === 'button'
    );
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Cleanup old petals automatically to prevent DOM bloat
  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => {
        const now = Date.now();
        // Remove petals older than 2 seconds
        return prev.filter((p) => now - p.createdAt < 2000);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Main cursor SVG (the one that strictly follows the mouse)
  const mainCursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1,
      rotate: 0,
      transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      rotate: 45, // Spin slightly when hovering over a link
      transition: { type: 'tween', ease: 'backOut', duration: 0.2 }
    }
  };

  return (
    <>
      {/* The main solid petal cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] text-[#8F76BE]"
        variants={mainCursorVariants}
        animate={isHoveringClickable ? 'hover' : 'default'}
      >
        <PetalIcon className="w-6 h-6" />
      </motion.div>

      {/* The trailing, falling petals */}
      <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
        <AnimatePresence>
          {petals.map((petal) => (
            <motion.div
              key={petal.id}
              initial={{
                x: petal.x,
                y: petal.y,
                opacity: 0.8,
                scale: petal.scale,
                rotate: petal.rotation,
              }}
              animate={{
                x: petal.x + petal.offsetX,
                y: petal.y + 150, // Drift downwards
                opacity: 0,
                rotate: petal.rotation + (Math.random() > 0.5 ? 90 : -90), // Spin while falling
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5 + Math.random() * 0.5, // 1.5s to 2.0s
                ease: 'easeOut',
              }}
              className={`absolute top-0 left-0 ${petal.color}`}
            >
              <PetalIcon className="w-5 h-5" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
