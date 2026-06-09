// src/components/ui/CatalogueProductCard.tsx
"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";

const CATEGORY_ACCENT: Record<string, string> = {
  Psychiatry: "border-l-violet-500",
  Gastrointestinal: "border-l-orange-400",
  Nutraceutical: "border-l-primary",
  Supplements: "border-l-accent",
  Vitamins: "border-l-amber-500",
  Cardiology: "border-l-rose-500",
  Respiratory: "border-l-sky-500",
  Hematology: "border-l-pink-500",
};

interface CatalogueProductCardProps {
  product: Product;
  index: number;
  inView: boolean;
  onViewDetails: (product: Product) => void;
}

export default function CatalogueProductCard({
  product,
  index,
  inView,
  onViewDetails,
}: CatalogueProductCardProps) {
  const accent = CATEGORY_ACCENT[product.category] ?? "border-l-primary";

  return (
    <motion.div
      className="flex h-full"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.05 * index }}
    >
      <GlassCard
        glow
        className={`group flex h-full w-full flex-col border-l-4 ${accent} transition-all duration-300 hover:-translate-y-1`}
      >
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="font-heading text-base font-bold uppercase tracking-wide text-dark-teal transition-colors group-hover:text-primary sm:text-lg">
              {product.brandName}
            </h3>
            <span className="shrink-0 rounded-md bg-primary/[0.08] px-2 py-0.5 font-mono text-[10px] font-semibold text-primary/70">
              {product.sku}
            </span>
          </div>

          <p className="body-text flex-1 text-sm leading-relaxed text-dark-teal/75">
            {product.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-primary/10 pt-4">
            <span className="inline-flex rounded-full border border-primary/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-dark-teal">
              {product.dosageForm}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">
              {product.category}
            </span>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.01 }}
            onClick={() => onViewDetails(product)}
            className="mt-4 w-full rounded-xl border border-primary/15 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
            data-cursor="hover"
          >
            View Details
          </motion.button>
        </div>
      </GlassCard>
    </motion.div>
  );
}
