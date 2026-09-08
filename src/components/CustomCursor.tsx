"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "interactive">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for specific interaction types
      if (target.closest("[data-interaction=''primary'']")) {
        setCursorState("interactive");
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hoverable]")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "var(--color-accent-primary)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      scale: 1.5,
      backgroundColor: "var(--color-text-primary)",
      mixBlendMode: "difference" as const,
    },
    interactive: {
      scale: 2,
      backgroundColor: "transparent",
      border: "1px solid var(--color-accent-primary)",
      mixBlendMode: "normal" as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorState}
      style={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 750,
        damping: 40,
        mass: 0.1,
      }}
    />
  );
}