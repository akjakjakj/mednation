"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import BrandLogo from "@/components/ui/BrandLogo";
import ParticleBackground from "@/components/ui/ParticleBackground";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  twitter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-dark-teal text-white overflow-hidden">
      {/* Wave animation background */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <motion.path
            d="M0 30C360 60 720 0 1080 30C1260 45 1380 15 1440 30V0H0V30Z"
            fill="#0B6663"
            animate={{ d: [
              "M0 30C360 60 720 0 1080 30C1260 45 1380 15 1440 30V0H0V30Z",
              "M0 40C360 10 720 50 1080 20C1260 5 1380 35 1440 20V0H0V40Z",
              "M0 30C360 60 720 0 1080 30C1260 45 1380 15 1440 30V0H0V30Z",
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <ParticleBackground count={25} />

      {/* Floating medical icons */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 left-[5%] opacity-5"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <rect x="9" y="3" width="6" height="18" rx="1" />
          <rect x="3" y="9" width="18" height="6" rx="1" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-48 right-[8%] opacity-5"
      >
        <svg width="24" height="24" viewBox="0 0 50 24" fill="white">
          <rect x="0" y="4" width="50" height="16" rx="8" />
        </svg>
      </motion.div>

      <div className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <BrandLogo
                width={220}
                height={73}
                className="h-11 w-auto mb-6"
              />
              <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                {BRAND.tagline}
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                    data-cursor="hover"
                  >
                    {socialIcons[social.icon]}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 tracking-heading">Quick Links</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.quick.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white font-body text-sm transition-colors"
                      data-cursor="hover"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 tracking-heading">Products</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white font-body text-sm transition-colors"
                      data-cursor="hover"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 tracking-heading">Newsletter</h4>
              <p className="text-white/60 font-body text-sm mb-4">
                Subscribe for updates on new products and healthcare insights.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 font-body text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium"
                  data-cursor="hover"
                >
                  {subscribed ? "✓" : "→"}
                </motion.button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-body text-sm">
              &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white/60 font-body text-sm transition-colors" data-cursor="hover">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white/60 font-body text-sm transition-colors" data-cursor="hover">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
