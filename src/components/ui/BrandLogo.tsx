import Image from "next/image";

/** Central logo asset — update path here when the brand file changes. */
export const BRAND_LOGO_SRC = "/mednations-logo.png";

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function BrandLogo({
  className = "",
  width = 220,
  height = 73,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt="MEDNATIONS"
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
