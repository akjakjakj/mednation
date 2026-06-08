"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import WaveDivider from "@/components/ui/WaveDivider";

export default function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="relative bg-light-bg overflow-hidden">
      <WaveDivider className="text-white" />

      <div className="section-padding" ref={ref}>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            inView={inView}
            label="Our Process"
            title={
              <>
                How We <span className="gradient-text">Deliver</span>
              </>
            }
            description="Our go-to-market strategy connects specialists with evidence-based support, clinical feedback, and strategic territory coverage."
            className="mb-10 sm:mb-16"
          />

          <div className="relative">
            {/* Desktop timeline line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-px bg-gradient-to-b from-primary via-secondary to-accent md:block"
              aria-hidden="true"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="w-full gradient-bg origin-top"
              />
            </div>

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * i + 0.3 }}
                className={`relative mb-8 last:mb-0 md:mb-12 md:flex md:items-center md:gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop timeline dot */}
                <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 * i + 0.5 }}
                    className="h-5 w-5 rounded-full gradient-bg ring-4 ring-light-bg"
                  />
                </div>

                {/* Content card */}
                <div
                  className={`min-w-0 w-full flex-1 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="glass w-full rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 md:block">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full gradient-bg text-sm font-bold text-white md:hidden">
                        {i + 1}
                      </span>
                      <span className="section-label text-xs">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="card-title mt-2 text-lg sm:text-xl md:mt-1">{step.title}</h3>
                    <p className="body-text mt-2 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating desktop layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
