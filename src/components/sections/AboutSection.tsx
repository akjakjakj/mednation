"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_STATS, WHY_CHOOSE } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import StatCard from "@/components/ui/StatCard";
import SectionHeader from "@/components/ui/SectionHeader";
import WaveDivider from "@/components/ui/WaveDivider";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  chain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
};

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative bg-white">
      <WaveDivider className="text-light-bg -mt-1" />

      <div className="section-padding" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            inView={inView}
            label="About Us"
            title={
              <>
                Bridging the Quality Gap in{" "}
                <span className="gradient-text">Indian Pharmaceuticals</span>
              </>
            }
            description="Mednations Remedies Pvt Ltd is a Kerala-based pharmaceutical company delivering premium-quality branded medicines across key therapeutic segments. Backed by WHO-GMP certified manufacturing partnerships, we ensure globally benchmarked production standards with a doctor-centric, prescription-driven approach."
          />

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard glow>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="card-title text-xl">Our Mission</h3>
                </div>
                <p className="body-text">
                  Uphold stringent WHO-GMP manufacturing standards and deliver consistent,
                  high-quality therapeutic solutions. We are committed to improving patient
                  outcomes through affordable medicines grounded in trust, integrity, and
                  regulatory excellence.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard glow>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="card-title text-xl">Our Vision</h3>
                </div>
                <p className="body-text">
                  To be a trusted pharmaceutical company delivering safe, effective, and
                  globally compliant medicines that enhance patient care and strengthen
                  healthcare outcomes across Tier 1 and Tier 2 cities.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Why Choose Us cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {icons[item.icon]}
                  </div>
                  <h4 className="card-title mb-2">{item.title}</h4>
                  <p className="body-text text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="relative rounded-3xl border border-primary/[0.06] bg-gradient-to-br from-light-bg via-white to-primary/[0.03] p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="section-label">Our Impact</span>
                <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-dark-teal tracking-tight">
                  Operational Footprint
                </h3>
              </div>
              <p className="max-w-xs font-body text-sm text-dark-teal/50 leading-relaxed">
                A lean team driving strong performance, high margins, and repeat prescription momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {ABOUT_STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                  icon={stat.icon}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
