"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroScene from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => setMounted(true), []);

  // Scroll-driven animations for Hero Typography
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  if (!mounted) return (
    <div className="w-full h-screen bg-bg-base flex items-center justify-center font-mono text-xs text-text-secondary tracking-widest uppercase">
      INITIALIZING EXPERIENCE...
    </div>
  );

  return (
    <main className="relative w-full min-h-[200vh] flex flex-col bg-bg-base overflow-x-hidden">
      
      {/* 3D Environment - Persists and controls depth via scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      <nav className="fixed top-0 left-0 w-full p-8 md:px-16 flex justify-between items-center z-50 pointer-events-none mix-blend-difference">
        <div className="font-display font-bold text-xl tracking-tighter pointer-events-auto text-text-primary">
          SANDEEP<span className="text-accent-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm text-text-muted pointer-events-auto">
          <a href="#work" className="hover:text-text-primary transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-text-primary transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-text-primary transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Interactive Hero Layer */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center px-8 md:px-16 max-w-[1320px] mx-auto z-10">
        <motion.div 
          style={prefersReducedMotion ? {} : { y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="pointer-events-none"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold tracking-[-0.05em] leading-[0.85] text-text-primary"
              style={{ fontSize: "clamp(4.5rem, 8.5vw, 9rem)" }}
            >
              BUILDING
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-bold tracking-[-0.05em] leading-[0.85] text-text-muted"
              style={{ fontSize: "clamp(4.5rem, 8.5vw, 9rem)" }}
            >
              UNUSUALLY
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display font-bold tracking-[-0.05em] leading-[0.85] text-text-primary"
              style={{ fontSize: "clamp(4.5rem, 8.5vw, 9rem)" }}
            >
              POLISHED
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display font-bold tracking-[-0.05em] leading-[0.85] text-accent-primary"
              style={{ fontSize: "clamp(4.5rem, 8.5vw, 9rem)" }}
            >
              EXPERIENCES.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-auto"
          >
            <div className="font-mono text-xs md:text-sm text-text-secondary tracking-widest max-w-sm flex flex-col justify-end">
              <p className="uppercase text-text-muted mb-2">[JOB TITLE / CREATIVE DEVELOPER]</p>
              <p className="leading-relaxed">Bridging the gap between high-end design and robust technical architecture.</p>
            </div>
            
            <div className="flex gap-4 items-end md:justify-end">
              <Button size="lg" className="w-full md:w-auto hover:scale-105" data-interaction="primary">
                VIEW WORK
              </Button>
              <Button variant="secondary" size="lg" className="w-full md:w-auto" data-interaction="secondary">
                LET'S TALK
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Temporary spacing to demonstrate scroll translation */}
      <section className="relative w-full h-screen flex flex-col justify-center px-8 md:px-16 max-w-[1320px] mx-auto z-10 pointer-events-none">
        <h2 className="font-display text-text-primary" style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 0.9 }}>
          ENTERING<br/><span className="text-text-muted">THE DIGITAL ENVIRONMENT</span>
        </h2>
      </section>

    </main>
  );
}