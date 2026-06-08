"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              boxShadow: glow
                ? "0 20px 60px rgba(22, 156, 151, 0.25)"
                : "0 20px 40px rgba(22, 156, 151, 0.12)",
            }
          : undefined
      }
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`glass rounded-2xl p-6 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
