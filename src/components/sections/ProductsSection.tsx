"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CATALOGUE_PRODUCTS, Product, PRODUCTS } from "@/lib/constants";
import CatalogueProductCard from "@/components/ui/CatalogueProductCard";
import GlassCard from "@/components/ui/GlassCard";
import ImagePreviewModal from "@/components/ui/ImagePreviewModal";
import ProductDetailModal from "@/components/ui/ProductDetailModal";
import SectionHeader from "@/components/ui/SectionHeader";
import WaveDivider from "@/components/ui/WaveDivider";

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="products" className="relative bg-light-bg">
      <WaveDivider className="text-white" />

      <div className="section-padding" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            inView={inView}
            label="Our Products"
            title={
              <>
                Premium Medicine <span className="gradient-text">Catalogue</span>
              </>
            }
            description="Discover our range of certified pharmaceutical products crafted for quality, safety, and efficacy."
          />

          <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                className="flex h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
              >
                <GlassCard glow className="group relative flex h-full w-full flex-col overflow-hidden">
                  <div className="relative z-10 flex flex-1 flex-col">
                    <button
                      type="button"
                      onClick={() => setPreviewImage({ src: product.image, alt: product.name })}
                      className="mb-6 flex h-52 w-full items-center justify-center rounded-xl outline-none focus:outline-none focus-visible:outline-none"
                      aria-label={`Preview ${product.name} image`}
                      data-cursor="hover"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={240}
                        height={240}
                        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>

                    <div className="mb-3 w-fit max-w-full">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="card-title mb-2 w-full group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="body-text w-full flex-1 text-sm">{product.description}</p>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setDetailProduct(product)}
                      className="mt-6 w-full shrink-0 rounded-xl border border-primary/20 py-2.5 text-sm font-medium text-primary transition-colors outline-none hover:bg-primary/5 focus:outline-none focus-visible:outline-none"
                      data-cursor="hover"
                    >
                      View Details
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 lg:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 text-center"
            >
              <span className="section-label">Extended Range</span>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-dark-teal sm:text-3xl">
                Full Product Portfolio
              </h3>
              <p className="mx-auto mt-3 max-w-2xl font-body text-sm leading-relaxed text-dark-teal/55 sm:text-base">
                Additional WHO-GMP certified formulations across psychiatry, cardiology, respiratory,
                and hematology segments.
              </p>
            </motion.div>

            <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
              {CATALOGUE_PRODUCTS.map((product, i) => (
                <CatalogueProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  inView={inView}
                  onViewDetails={setDetailProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal product={detailProduct} onClose={() => setDetailProduct(null)} />
      <ImagePreviewModal
        src={previewImage?.src ?? null}
        alt={previewImage?.alt ?? ""}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}
