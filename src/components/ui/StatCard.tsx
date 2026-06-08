"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const statIcons: Record<string, React.ReactNode> = {
  doctors: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  cities: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  repeat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  ),
  experience: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  quality: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
  index: number;
  inView: boolean;
}

export default function StatCard({
  value,
  suffix,
  label,
  description,
  icon,
  index,
  inView,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(22,156,151,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(22,156,151,0.12)]">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-[3px] gradient-bg opacity-80" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:bg-primary/10" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            {statIcons[icon]}
          </div>
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-6">
          <p className="font-heading text-4xl sm:text-[2.75rem] font-bold leading-none tracking-tight text-dark-teal tabular-nums">
            <AnimatedCounter value={value} suffix={suffix} />
          </p>
          <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.1em] text-dark-teal/55">
            {label}
          </p>
        </div>

        <div className="relative mt-5 h-px w-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />

        <p className="relative mt-4 font-body text-sm leading-relaxed text-dark-teal/50">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
