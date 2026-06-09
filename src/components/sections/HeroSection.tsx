"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ABOUT_STATS, BRAND, PRODUCTS } from "@/lib/constants";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import MedicinePacketCard, { PacketIconType } from "@/components/ui/MedicinePacketCard";
import ParticleBackground from "@/components/ui/ParticleBackground";

const HERO_STATS = ABOUT_STATS.slice(0, 3);
const headlineWords = BRAND.headline.split(" ");

const HERO_PACKETS = PRODUCTS.map((product) => ({
  category: product.category,
  name: product.brandName,
  strength: product.strength,
  strengthUnit: product.strengthUnit,
  pack: product.dosage,
  packType: product.dosageForm,
  sku: product.sku,
  image: product.image,
  icon: product.icon as PacketIconType,
}));

function HeroIllustration({ onCardClick }: { onCardClick: () => void }) {
  return (
    <div className="relative flex h-[500px] w-full max-w-[430px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-primary/[0.04] blur-[80px]" />

      <div className="hero-card-swap-mask relative flex h-full w-full items-center justify-center overflow-hidden">
        <CardSwap
          width={310}
          height={400}
          cardDistance={32}
          verticalDistance={28}
          delay={4000}
          pauseOnHover
          skewAmount={3}
          easing="elastic"
          onCardClick={onCardClick}
        >
          {HERO_PACKETS.map((packet) => (
            <Card
              key={packet.sku}
              customClass="cursor-pointer overflow-hidden rounded-xl border border-primary/[0.1] !bg-white !shadow-[0_24px_56px_rgba(11,102,99,0.14),0_6px_16px_rgba(22,156,151,0.08)]"
            >
              <MedicinePacketCard {...packet} />
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-500, 500], [-14, 14]);
  const parallaxY = useTransform(mouseY, [-500, 500], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-light-bg hero-mesh"
    >
      <ParticleBackground count={38} />

      <div className="absolute top-1/4 -left-40 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-accent/[0.05] blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-title"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="mr-[0.2em] inline-block"
                >
                  {word === "Therapeutic" ? <span className="gradient-text">{word}</span> : word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="hero-subtitle mx-auto lg:mx-0 lg:border-l-2 lg:border-primary/20 lg:pl-5"
            >
              {BRAND.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#products")}
                className="btn-hero-primary inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white btn-text"
                data-cursor="hover"
              >
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#contact")}
                className="btn-hero-secondary inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-primary btn-text"
                data-cursor="hover"
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-12 border-t border-primary/10 pt-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start lg:gap-x-10">
                {HERO_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`text-center lg:text-left ${
                      i > 0 ? "sm:border-l sm:border-primary/10 sm:pl-8 lg:pl-10" : ""
                    }`}
                  >
                    <p className="hero-stat-value">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-0.5 text-xs font-body font-medium uppercase tracking-wider text-dark-teal/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden md:block"
          >
            <HeroIllustration onCardClick={() => scrollTo("#products")} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-primary/40">
            Scroll
          </span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-primary/20 p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-primary/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
