"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "@/lib/constants";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const DETAIL_ROWS: { key: keyof Product; label: string }[] = [
  { key: "composition", label: "Composition" },
  { key: "dosageForm", label: "Dosage Form" },
  { key: "dosage", label: "Strength / Pack" },
  { key: "indication", label: "Indication" },
  { key: "storage", label: "Storage" },
  { key: "sku", label: "Product Code" },
];

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-detail-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark-teal/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-gray-100 bg-white px-6 py-4">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {product.category}
                </span>
                <h2 id="product-detail-title" className="mt-2 font-heading text-xl font-bold text-dark-teal sm:text-2xl">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm text-dark-teal/60">Brand: {product.brandName}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/15 text-dark-teal/70 transition-colors hover:bg-primary/5 hover:text-primary"
                aria-label="Close details"
                data-cursor="hover"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto bg-white">
              {product.image && (
                <div className="flex items-center justify-center border-b border-gray-100 bg-white px-6 py-8 sm:py-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={320}
                    className="h-48 w-auto object-contain sm:h-56"
                  />
                </div>
              )}

              <div className="bg-white px-6 py-6">
                <p className="body-text text-center text-sm leading-relaxed sm:text-left">
                  {product.description}
                </p>

                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DETAIL_ROWS.map(({ key, label }) => (
                    <div key={key} className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm shadow-black/[0.03]">
                      <dt className="text-xs font-semibold uppercase tracking-label text-primary/80">{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-dark-teal/80">{product[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 bg-white px-6 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                data-cursor="hover"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-dark-teal"
                data-cursor="hover"
              >
                Enquire About This Product
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
