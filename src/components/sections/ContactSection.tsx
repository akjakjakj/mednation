"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import WaveDivider from "@/components/ui/WaveDivider";

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-white border border-primary/10 text-dark-teal font-body placeholder:text-dark-teal/30 shadow-sm shadow-primary/[0.03] transition-all duration-200 focus:border-primary/35 focus:outline-none focus:ring-4 focus:ring-primary/8";

const labelClass = "block text-xs font-semibold uppercase tracking-wider text-dark-teal/55 mb-2 font-body";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Telephone",
      value: BRAND.phoneSecondary,
      href: `tel:${BRAND.phoneSecondary.replace(/\s/g, "")}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Address",
      value: BRAND.address,
      href: BRAND.mapsUrl,
      external: true,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h6" />
        </svg>
      ),
      label: "GSTIN",
      value: BRAND.gstin,
    },
  ];

  return (
    <section id="contact" className="relative bg-light-bg">
      <WaveDivider className="text-white" />

      <div className="section-padding" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            inView={inView}
            label="Contact Us"
            title={
              <>
                Get In <span className="gradient-text">Touch</span>
              </>
            }
            description="Connect with our team for product inquiries, hospital and pharmacy partnerships, or authorised distribution opportunities across Kerala."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="relative h-full glass rounded-3xl overflow-hidden shadow-xl shadow-primary/[0.06] border border-white/60">
                <div className="absolute inset-x-0 top-0 h-1 gradient-bg" />

                <form onSubmit={handleSubmit} className="flex h-full flex-col p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="card-title text-xl">Send a Message</h3>
                    <p className="mt-2 text-sm font-body text-dark-teal/55 leading-relaxed">
                      Fill in the form and our team will respond within 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          placeholder={BRAND.email}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          placeholder={BRAND.phoneSecondary}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} flex-1 min-h-[120px] resize-none`}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, boxShadow: "0 12px 40px rgba(22, 156, 151, 0.28)" }}
                    whileTap={{ scale: 0.99 }}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 py-4 rounded-xl gradient-bg text-white btn-text shadow-lg shadow-primary/20 transition-all"
                    data-cursor="hover"
                  >
                    {submitted ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map — unified panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full"
            >
              <div className="relative flex h-full flex-col glass rounded-3xl overflow-hidden shadow-xl shadow-primary/[0.06] border border-white/60">
                <div className="absolute inset-x-0 top-0 h-1 gradient-bg" />

                <div className="p-8 lg:p-10 pb-0">
                  <h3 className="card-title text-xl">Contact Information</h3>
                  <p className="mt-2 text-sm font-body font-medium text-dark-teal/70 leading-relaxed">
                    {BRAND.legalName}
                  </p>
                  <p className="mt-1 text-sm font-body text-dark-teal/55 leading-relaxed">
                    Reach us directly through any of the channels below.
                  </p>
                </div>

                <div className="flex-1 flex flex-col px-8 lg:px-10 py-6">
                  <div className="divide-y divide-primary/8 rounded-2xl border border-primary/8 bg-white/50 overflow-hidden">
                    {contactInfo.map((info, index) => {
                      const rowClass =
                        "flex items-center gap-4 px-5 py-4 hover:bg-primary/[0.03] transition-colors group";
                      const content = (
                        <>
                          <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-primary/10 group-hover:gradient-bg group-hover:text-white group-hover:ring-transparent transition-all duration-300">
                            {info.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-dark-teal/45 font-body">
                              {info.label}
                            </p>
                            <p className="text-sm text-dark-teal font-body font-medium mt-0.5 leading-snug break-words">
                              {info.value}
                            </p>
                          </div>
                          {info.href && (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="flex-shrink-0 text-primary/25 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          )}
                        </>
                      );

                      if (!info.href) {
                        return (
                          <div key={`${info.label}-${index}`} className={rowClass}>
                            {content}
                          </div>
                        );
                      }

                      return (
                        <a
                          key={`${info.label}-${index}`}
                          href={info.href}
                          target={info.external ? "_blank" : undefined}
                          rel={info.external ? "noopener noreferrer" : undefined}
                          className={rowClass}
                          data-cursor="hover"
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>

                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex-1 min-h-[180px] rounded-2xl overflow-hidden border border-primary/10 bg-white/40 relative block transition-all hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 group/map"
                    data-cursor="hover"
                    aria-label="Open Mednations location in Google Maps"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-secondary/[0.06] to-accent/[0.04]" />

                    <div className="absolute inset-0 opacity-[0.35]">
                      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="contact-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <path d="M32 0H0V32" fill="none" stroke="#169C97" strokeWidth="0.5" opacity="0.3" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contact-grid)" />
                      </svg>
                    </div>

                    <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-md shadow-primary/10 ring-1 ring-primary/10 mb-4 transition-transform group-hover/map:scale-105">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#169C97" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <p className="text-sm font-body font-medium text-dark-teal/70">
                        {BRAND.locationLabel}
                      </p>
                      <p className="mt-1 text-xs font-body text-dark-teal/40">Tap to open in Google Maps</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        {BRAND.locationArea}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
