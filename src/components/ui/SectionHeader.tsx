"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  inView?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  inView = true,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 1, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`max-w-3xl mb-16 ${alignClass} ${className}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title mt-3">{title}</h2>
      {description && (
        <p className={`section-desc ${align === "center" ? "mx-auto" : ""}`}>{description}</p>
      )}
    </motion.div>
  );
}
