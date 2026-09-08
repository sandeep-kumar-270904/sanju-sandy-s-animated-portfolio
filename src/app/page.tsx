"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroScene from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/Button";
import ScrollRevealText from "@/components/ScrollRevealText";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => setMounted(true), []);

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  if (!mounted) return (
    <div className="w-full h-screen bg-bg-base flex items-center justify-center font-mono text-xs text-text-secondary tracking-widest uppercase">
      INITIALIZING EXPERIENCE...
    </div>
  );

  return (
    <main className="relative w-full flex flex-col bg-bg-base overflow-x-hidden">
      
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

      {/* Intro / About */}
      <section id="about" className="w-full bg-bg-base flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 relative">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-8 font-mono text-xs text-accent-primary uppercase tracking-widest">(01) &mdash; Identity</div>
          <ScrollRevealText text="I DON'T JUST WRITE CODE. I CRAFT DIGITAL PRODUCTS THAT FEEL PHYSICAL, RESPONSIVE, AND ALIVE. EVERY INTERACTION IS AN OPPORTUNITY TO BUILD TRUST AND DELIGHT THE USER." />
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="lg:col-start-2">
              <h4 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">Background</h4>
              <p className="text-text-secondary text-lg leading-relaxed font-sans">I approach development with the mindset of a product designer and the precision of an engineer. Whether it's building complex WebGL environments or robust scalable backends, my focus is always on the final user experience.</p>
            </div>
            <div>
              <h4 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">Philosophy</h4>
              <p className="text-text-secondary text-lg leading-relaxed font-sans">Restraint is the ultimate sophistication. I believe in using advanced technology only when it serves the story and enhances usability. Flashy effects without substance fade quickly; a perfectly executed core interaction lasts forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full bg-bg-secondary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-border relative">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-24 font-mono text-xs text-accent-primary uppercase tracking-widest">(02) &mdash; Capabilities</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">AN ENGINEERING FOUNDATION BUILT FOR CREATIVE EXECUTION.</h2>
            <div className="flex flex-col gap-12">
              <div className="group border-b border-border pb-8 hover:border-accent-primary transition-colors duration-500">
                <h3 className="font-display text-3xl mb-4 group-hover:text-accent-primary transition-colors duration-500">Frontend Engineering</h3>
                <p className="text-text-secondary mb-6">Building robust, accessible, and highly performant user interfaces using modern React architectures.</p>
                <div className="flex flex-wrap gap-2">{["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (<span key={tech} className="px-3 py-1 rounded-full border border-border text-xs font-mono text-text-secondary">{tech}</span>))}</div>
              </div>
              <div className="group border-b border-border pb-8 hover:border-accent-primary transition-colors duration-500">
                <h3 className="font-display text-3xl mb-4 group-hover:text-accent-primary transition-colors duration-500">Creative Development</h3>
                <p className="text-text-secondary mb-6">Crafting immersive experiences with custom shaders, 3D environments, and complex motion systems.</p>
                <div className="flex flex-wrap gap-2">{["WebGL", "Three.js", "Framer Motion", "GSAP"].map((tech) => (<span key={tech} className="px-3 py-1 rounded-full border border-border text-xs font-mono text-text-secondary">{tech}</span>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="w-full bg-bg-base flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-border relative">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-24 flex justify-between items-end">
            <div>
              <div className="mb-8 font-mono text-xs text-accent-primary uppercase tracking-widest">(03) &mdash; Selected Work</div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">PROVING IT.</h2>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-24">
            <ProjectCard index="01" category="Product Design & Engineering" title="[YOUR PROJECT 1]" description="A full-stack AI workflow platform designed with an impossibly smooth drag-and-drop interface." technologies={["Next.js", "Python", "WebGL", "PostgreSQL"]} />
            <ProjectCard index="02" category="Creative Development" title="[YOUR PROJECT 2]" description="An interactive e-commerce experience using physics-based 3D interactions to explore products." technologies={["React Three Fiber", "Framer Motion", "Shopify Plus"]} />
            <ProjectCard index="03" category="Systems Architecture" title="[YOUR PROJECT 3]" description="A high-performance real-time dashboard tracking millions of data points with zero layout shift." technologies={["TypeScript", "WebSockets", "D3.js"]} />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="w-full bg-bg-secondary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-border relative">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-24 font-mono text-xs text-accent-primary uppercase tracking-widest">(04) &mdash; Experience</div>
          
          <div className="flex flex-col gap-12 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 group">
              <div className="md:w-32 font-mono text-xs text-text-secondary uppercase tracking-widest pt-2 flex-shrink-0 group-hover:text-accent-primary transition-colors duration-300">
                2023 &mdash; Present
              </div>
              <div>
                <h3 className="font-display text-3xl mb-2 group-hover:text-accent-primary transition-colors duration-300">[COMPANY NAME]</h3>
                <h4 className="font-sans text-text-primary font-medium mb-4">[Job Title]</h4>
                <p className="text-text-secondary font-sans">Lead the development of core interactive experiences. Architected the main frontend framework reducing load times by 40%. Implemented complex WebGL features for the flagship product.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-16 group">
              <div className="md:w-32 font-mono text-xs text-text-secondary uppercase tracking-widest pt-2 flex-shrink-0 group-hover:text-accent-primary transition-colors duration-300">
                2021 &mdash; 2023
              </div>
              <div>
                <h3 className="font-display text-3xl mb-2 group-hover:text-accent-primary transition-colors duration-300">[PREVIOUS COMPANY]</h3>
                <h4 className="font-sans text-text-primary font-medium mb-4">[Job Title]</h4>
                <p className="text-text-secondary font-sans">Developed and shipped scalable UI components used across 5 different products. Mentored junior engineers and led the migration to Next.js.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full bg-bg-base flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-border relative">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center text-center">
          <div className="mb-12 font-mono text-xs text-accent-primary uppercase tracking-widest">(05) &mdash; Contact</div>
          <a href="mailto:your@email.com" className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12 hover:text-accent-primary transition-colors duration-500" data-hoverable>
            LET'S BUILD.
          </a>
          <div className="flex gap-8 font-mono text-sm">
            <a href="mailto:your@email.com" className="hover:text-accent-primary transition-colors" data-hoverable>EMAIL</a>
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-accent-primary transition-colors" data-hoverable>GITHUB</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-accent-primary transition-colors" data-hoverable>LINKEDIN</a>
          </div>
        </div>
      </section>
      
      <footer className="w-full py-8 px-8 md:px-16 lg:px-24 border-t border-border bg-bg-secondary flex justify-between items-center text-xs font-mono text-text-secondary z-10 relative">
        <div>&copy; {new Date().getFullYear()} SANDEEP.</div>
        <div>ALL RIGHTS RESERVED.</div>
      </footer>
    </main>
  );
}