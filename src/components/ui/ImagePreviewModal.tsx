"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImagePreviewModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.35;

export default function ImagePreviewModal({ src, alt, onClose }: ImagePreviewModalProps) {
  const [scale, setScale] = useState(MIN_SCALE);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  const resetView = useCallback(() => {
    setScale(MIN_SCALE);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(MAX_SCALE, s + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => {
      const next = Math.max(MIN_SCALE, s - ZOOM_STEP);
      if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    if (!src) resetView();
  }, [src, resetView]);

  useEffect(() => {
    if (!src) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetView();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [src, onClose, zoomIn, zoomOut, resetView]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale((s) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s + delta));
      if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= MIN_SCALE) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, posX: position.x, posY: position.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      x: dragStart.current.posX + (e.clientX - dragStart.current.x),
      y: dragStart.current.posY + (e.clientY - dragStart.current.y),
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleDoubleClick = () => {
    if (scale > MIN_SCALE) {
      resetView();
    } else {
      setScale(2.5);
    }
  };

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex flex-col bg-white"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${alt}`}
        >
          <div className="relative z-10 flex items-center justify-between border-b border-primary/10 px-4 py-4 sm:px-6">
            <p className="truncate text-sm font-medium text-dark-teal">{alt}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5"
                aria-label="Zoom out"
                data-cursor="hover"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
              <span className="min-w-[3rem] text-center text-xs text-dark-teal/60">{Math.round(scale * 100)}%</span>
              <button
                type="button"
                onClick={zoomIn}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5"
                aria-label="Zoom in"
                data-cursor="hover"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={resetView}
                className="hidden rounded-full border border-primary/15 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/5 sm:block"
                data-cursor="hover"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5"
                aria-label="Close preview"
                data-cursor="hover"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="relative z-10 flex flex-1 items-center justify-center overflow-hidden bg-white px-4 pb-6"
            onWheel={handleWheel}
          >
            <div
              className={`relative max-h-full max-w-full touch-none select-none ${scale > MIN_SCALE ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"}`}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.2s ease",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onDoubleClick={handleDoubleClick}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className="max-h-[70vh] w-auto object-contain"
                draggable={false}
                priority
              />
            </div>
          </div>

          <p className="relative z-10 border-t border-primary/10 pb-4 pt-3 text-center text-xs text-dark-teal/50">
            Scroll or use +/- to zoom · Double-click to toggle · Drag when zoomed
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
