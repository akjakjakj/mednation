"use client";

import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";

export type PacketIconType = "capsule" | "tablet" | "gel" | "multivitamin";

export interface MedicinePacketCardProps {
  category: string;
  name: string;
  strength: string;
  strengthUnit: string;
  pack: string;
  packType: string;
  sku: string;
  image?: string;
  icon?: PacketIconType;
}

const CITAMINZ_SKU = "MN-CIT-100";
const CORVION_SKU = "MN-CRV-100";
const CITAMINZ_TAGLINE = "Complete bone & mineral support in one daily tablet.";

function ProductIcon({ type }: { type: PacketIconType }) {
  if (type === "tablet") {
    return (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <circle cx="24" cy="24" r="16" fill="#E8F6F4" stroke="#0B6663" strokeWidth="1.4" />
        <line x1="14" y1="24" x2="34" y2="24" stroke="#169C97" strokeWidth="1.2" />
        <line x1="24" y1="14" x2="24" y2="34" stroke="#169C97" strokeWidth="0.9" opacity="0.6" />
      </svg>
    );
  }

  if (type === "gel") {
    return (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <rect x="16" y="10" width="16" height="28" rx="4" fill="#E8F6F4" stroke="#0B6663" strokeWidth="1.4" />
        <rect x="18" y="18" width="12" height="14" rx="2" fill="#8CCB7E" fillOpacity="0.5" />
        <text x="24" y="27" textAnchor="middle" fill="#0B6663" fontSize="7" fontWeight="700">GEL</text>
      </svg>
    );
  }

  if (type === "multivitamin") {
    return (
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
        <ellipse cx="24" cy="24" rx="14" ry="9" fill="#E8F6F4" stroke="#0B6663" strokeWidth="1.2" />
        <ellipse cx="24" cy="24" rx="9" ry="14" fill="#D4F0E8" stroke="#169C97" strokeWidth="1.1" />
        <circle cx="24" cy="24" r="4" fill="#169C97" fillOpacity="0.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none">
      <rect x="17" y="9" width="14" height="30" rx="7" fill="#E8F6F4" stroke="#0B6663" strokeWidth="1.4" />
      <rect x="17" y="9" width="14" height="15" rx="7" fill="#8CCB7E" fillOpacity="0.55" />
    </svg>
  );
}

function Barcode() {
  const bars = [3, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2];

  return (
    <div className="flex items-end gap-[2px]">
      {bars.map((w, i) => (
        <div
          key={i}
          className="rounded-[0.5px] bg-dark-teal"
          style={{ width: w, height: 12 + (i % 3) * 3 }}
        />
      ))}
    </div>
  );
}

export default function MedicinePacketCard({
  category,
  name,
  strength,
  strengthUnit,
  pack,
  packType,
  sku,
  image,
  icon = "capsule",
}: MedicinePacketCardProps) {
  const isCitaminz = sku === CITAMINZ_SKU;
  const isCorvion = sku === CORVION_SKU;

  return (
    <div className="medicine-packet-card relative flex h-full w-full flex-col bg-white antialiased">
      <div className="h-[3px] bg-gradient-to-r from-dark-teal via-primary to-secondary" />

      {/* Header */}
      <div className="border-b border-primary/10 bg-[#F4FAF9] px-5 py-3.5">
        <div className="flex items-center justify-center rounded-lg border border-primary/10 bg-white px-4 py-2.5 shadow-sm">
          <BrandLogo width={140} height={46} />
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-dark-teal">
          <span>WHO-GMP</span>
          <span>Rx Only</span>
        </div>
      </div>

      {/* Product body */}
      <div className="relative flex flex-1 flex-col px-5 py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
          {category}
        </p>

        <div className="mt-2.5 flex min-h-[7.5rem] items-stretch gap-2.5">
          <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
            {isCitaminz ? (
              <>
                <div>
                  <h3 className="font-heading text-base font-bold leading-snug text-dark-teal">
                    {name}
                  </h3>
                  {strength ? (
                    <div className="mt-1 flex flex-wrap items-baseline gap-1">
                      <span className="font-heading text-2xl font-bold leading-none text-dark-teal">
                        {strength}
                      </span>
                      {strengthUnit && (
                        <span className="text-xs font-bold uppercase tracking-wide text-primary">
                          {strengthUnit}
                        </span>
                      )}
                    </div>
                  ) : (
                    strengthUnit && (
                      <p className="mt-1 font-heading text-2xl font-bold uppercase leading-none text-primary">
                        {strengthUnit}
                      </p>
                    )
                  )}
                  <p className="mt-2.5 text-[9px] font-medium tracking-wide text-dark-teal/45">
                    Ca · Mg · D3 · Zn
                  </p>
                </div>

                <p className="text-[9px] leading-relaxed text-dark-teal/50 line-clamp-2">
                  {CITAMINZ_TAGLINE}
                </p>

                <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/15 bg-[#E8F6F4] px-2.5 py-1">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-primary" fill="currentColor">
                    <path d="M12 2l2.4 4.8 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.6l5.4-.8L12 2z" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wide text-dark-teal">
                    GMP Certified
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="font-heading text-base font-bold leading-snug text-dark-teal">
                    {name}
                  </h3>
                  {strength ? (
                    <div className="mt-1.5 flex flex-wrap items-baseline gap-1.5">
                      <span className="font-heading text-[26px] font-bold leading-none text-dark-teal">
                        {strength}
                      </span>
                      {strengthUnit && (
                        <span className="text-sm font-bold uppercase tracking-wide text-primary">
                          {strengthUnit}
                        </span>
                      )}
                    </div>
                  ) : (
                    isCorvion &&
                    strengthUnit && (
                      <p className="mt-1.5 font-heading text-[26px] font-bold uppercase leading-none text-primary">
                        {strengthUnit}
                      </p>
                    )
                  )}
                </div>

                <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/15 bg-[#E8F6F4] px-2.5 py-1">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-primary" fill="currentColor">
                    <path d="M12 2l2.4 4.8 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.6l5.4-.8L12 2z" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wide text-dark-teal">
                    GMP Certified
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="flex min-h-full w-[48%] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/12 bg-gradient-to-b from-white to-[#F4FAF9] p-0.5 shadow-[0_1px_6px_rgba(11,102,99,0.06)]">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={140}
                height={160}
                className="h-full min-h-[6.75rem] w-full object-contain object-center scale-[1.02]"
                sizes="140px"
              />
            ) : (
              <div className="h-14 w-14">
                <ProductIcon type={icon} />
              </div>
            )}
          </div>
        </div>

        {/* Pack details */}
        <div className="mt-4 border-t border-primary/10 pt-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-dark-teal">
              {pack}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-dark-teal/70">
              {packType}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto rounded-lg border border-primary/12 bg-[#F8FCFB] p-3">
          <div className="flex items-end justify-between gap-3">
            <Barcode />
            <div className="text-right">
              <p className="text-[8px] font-bold uppercase tracking-wider text-dark-teal/60">
                Product Code
              </p>
              <p className="font-mono text-[11px] font-bold text-dark-teal">
                {sku}
              </p>
            </div>
          </div>
          <p className="mt-2 border-t border-primary/8 pt-2 text-center text-[8px] font-semibold uppercase tracking-wide text-dark-teal/55">
            Mfd. by Mednations Pharmaceuticals
          </p>
        </div>
      </div>
    </div>
  );
}
