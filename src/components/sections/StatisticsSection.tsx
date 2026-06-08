"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

function FloatingIcon({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute opacity-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function StatisticsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative overflow-hidden gradient-bg py-20 lg:py-28">
      {/* Floating healthcare icons */}
      <FloatingIcon className="top-10 left-[10%]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          <rect x="9" y="3" width="6" height="18" rx="1" />
          <rect x="3" y="9" width="18" height="6" rx="1" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="top-20 right-[15%]">
        <svg width="36" height="36" viewBox="0 0 50 24" fill="white">
          <rect x="0" y="4" width="50" height="16" rx="8" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="bottom-16 left-[20%]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="bottom-10 right-[10%]">
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </FloatingIcon>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-heading">
            Numbers That Speak
          </h2>
          <p className="mt-4 text-white/75 font-body text-base sm:text-lg leading-relaxed">
            Operational scale and commercial performance validating product quality and go-to-market efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center"
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-heading">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-white/70 font-body font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
