"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BUSINESS_PARTNERS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";
import GlassCard from "@/components/ui/GlassCard";
import WaveDivider from "@/components/ui/WaveDivider";

const highlightIcons: Record<string, React.ReactNode> = {
  supply: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  reach: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  growth: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  ),
};

export default function BusinessPartnersSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="partners" className="relative bg-light-bg overflow-hidden">
      <WaveDivider className="text-white -mt-1" flip />

      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-padding relative" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            inView={inView}
            label="Business Partners"
            title={
              <>
                A Trusted Network Across{" "}
                <span className="gradient-text">Kerala</span>
              </>
            }
            description={BUSINESS_PARTNERS.description}
          />

          <div className="relative rounded-3xl border border-primary/[0.06] bg-gradient-to-br from-white via-light-bg to-primary/[0.04] p-6 sm:p-8 lg:p-10 mb-16">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="section-label">Our Network</span>
                <h3 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-dark-teal tracking-tight">
                  {BUSINESS_PARTNERS.headline}
                </h3>
              </div>
              <p className="max-w-sm font-body text-sm text-dark-teal/50 leading-relaxed">
                Authorised partners across every district — connecting manufacturing excellence
                to hospitals and pharmacies statewide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {BUSINESS_PARTNERS.stats.map((stat, i) => (
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

          <div className="grid sm:grid-cols-3 gap-6">
            {BUSINESS_PARTNERS.highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
              >
                <GlassCard className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    {highlightIcons[item.icon]}
                  </div>
                  <h4 className="card-title mb-2">{item.title}</h4>
                  <p className="body-text text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
