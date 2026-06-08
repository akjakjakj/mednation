"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-light-bg"
        >
          <BrandLogo
            width={300}
            height={99}
            priority
            className="h-16 w-auto md:h-20"
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mt-8 h-1 rounded-full gradient-bg"
          />

          <p className="mt-6 font-body text-xs text-dark-teal/55 uppercase tracking-[0.08em]">
            Loading Therapeutic Excellence
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
