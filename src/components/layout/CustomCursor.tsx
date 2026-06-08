"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const trailX = useSpring(mouseX, { damping: 35, stiffness: 200 });
  const trailY = useSpring(mouseY, { damping: 35, stiffness: 200 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [mouseX, mouseY, isVisible]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-cursor='hover'], input, textarea, select")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [handleMouseMove]);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Trailing glow */}
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-normal"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="h-10 w-10 rounded-full bg-primary/20 blur-md" />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.8 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {isHovering ? (
            /* Capsule icon on hover */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="12" height="16" rx="6" fill="#169C97" opacity="0.9" />
              <rect x="6" y="4" width="12" height="8" rx="6" fill="#8CCB7E" opacity="0.9" />
              <rect x="6" y="4" width="12" height="16" rx="6" stroke="#0B6663" strokeWidth="1.5" fill="none" />
            </svg>
          ) : (
            /* Medical cross */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <motion.rect
                x="9"
                y="3"
                width="6"
                height="18"
                rx="1"
                fill="#169C97"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.rect
                x="3"
                y="9"
                width="18"
                height="6"
                rx="1"
                fill="#169C97"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          )}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovering
                ? "0 0 20px rgba(22, 156, 151, 0.6)"
                : "0 0 12px rgba(22, 156, 151, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
