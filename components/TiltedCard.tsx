'use client';

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string | number;
  containerWidth?: string | number;
  imageHeight?: string | number;
  imageWidth?: string | number;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  onClick?: () => void;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  onClick,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [rotateAmplitude, -rotateAmplitude]), {
    stiffness: 280,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-rotateAmplitude, rotateAmplitude]), {
    stiffness: 280,
    damping: 20,
  });

  const scale = useSpring(1, {
    stiffness: 280,
    damping: 20,
  });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(offsetX);
    y.set(offsetY);

    scale.set(scaleOnHover);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center cursor-pointer group"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
        whileHover={{ z: 50 }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[20px] will-change-transform shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute top-0 left-0 z-[2] will-change-transform rounded-[20px] overflow-hidden"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-[3] hidden items-center justify-center sm:flex"
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
        >
          <div className="rounded-[15px] bg-black/80 backdrop-blur-md px-4 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
            {captionText}
          </div>
        </motion.figcaption>
      )}
    </figure>
  );
}
