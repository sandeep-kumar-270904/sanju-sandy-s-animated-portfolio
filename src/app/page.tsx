"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import AmbientWebGL from "@/components/AmbientWebGL";
import ScrollRevealText from "@/components/ScrollRevealText";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const textVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  if (!mounted) return null;

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center overflow-hidden">
      <AmbientWebGL />

      <nav className="fixed top-0 left-0 w-full p-8 md:px-16 flex justify-between items-center z-50 mix-blend-difference pointer-events-none">
        <div className="font-display font-bold text-xl tracking-tighter pointer-events-auto">
          SANDEEP<span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-sm text-[#999] pointer-events-auto">
          <a href="#work" className="hover:text-text-primary transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-text-primary transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-text-primary transition-colors duration-300">Contact</a>
        </div>
      </nav>

      <section className="relative w-full h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-[1440px]">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="z-10 mix-blend-difference pointer-events-none">
          <div className="overflow-hidden"><motion.h1 variants={textVariants} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary">BUILDING</motion.h1></div>
          <div className="overflow-hidden"><motion.h1 variants={textVariants} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-[#555]">UNUSUALLY</motion.h1></div>
          <div className="overflow-hidden"><motion.h1 variants={textVariants} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-text-primary">POLISHED</motion.h1></div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 mt-2"><motion.h1 variants={textVariants} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-accent">EXPERIENCES.</motion.h1></div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 pointer-events-auto">
            <motion.div variants={textVariants} className="font-mono text-xs md:text-sm text-[#777] uppercase tracking-widest max-w-sm">
              <p>[JOB TITLE / CREATIVE DEVELOPER]</p>
              <p className="mt-2 text-text-primary normal-case tracking-normal">Bridging the gap between high-end design and robust technical architecture.</p>
            </motion.div>
            <motion.div variants={textVariants} className="flex gap-6 items-start">
              <button className="px-8 py-4 border border-[#444] text-text-primary rounded-full hover:border-text-primary hover:bg-text-primary hover:text-bg-primary transition-all duration-500 font-sans text-sm font-medium">View Work</button>
              <button className="px-8 py-4 bg-accent text-bg-primary rounded-full hover:opacity-80 transition-all duration-500 font-sans text-sm font-medium">Let's Talk</button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="w-full bg-bg-primary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-8 font-mono text-xs text-accent uppercase tracking-widest">(01) &mdash; Identity</div>
          <ScrollRevealText text="I DON'T JUST WRITE CODE. I CRAFT DIGITAL PRODUCTS THAT FEEL PHYSICAL, RESPONSIVE, AND ALIVE. EVERY INTERACTION IS AN OPPORTUNITY TO BUILD TRUST AND DELIGHT THE USER." />
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="lg:col-start-2">
              <h4 className="font-mono text-xs text-[#777] uppercase tracking-widest mb-4">Background</h4>
              <p className="text-[#bbb] text-lg leading-relaxed font-sans">I approach development with the mindset of a product designer and the precision of an engineer. Whether it's building complex WebGL environments or robust scalable backends, my focus is always on the final user experience.</p>
            </div>
            <div>
              <h4 className="font-mono text-xs text-[#777] uppercase tracking-widest mb-4">Philosophy</h4>
              <p className="text-[#bbb] text-lg leading-relaxed font-sans">Restraint is the ultimate sophistication. I believe in using advanced technology only when it serves the story and enhances usability. Flashy effects without substance fade quickly; a perfectly executed core interaction lasts forever.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-secondary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-[#111]">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-24 font-mono text-xs text-accent uppercase tracking-widest">(02) &mdash; Capabilities</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">AN ENGINEERING FOUNDATION BUILT FOR CREATIVE EXECUTION.</h2>
            <div className="flex flex-col gap-12">
              <div className="group border-b border-[#222] pb-8 hover:border-accent transition-colors duration-500">
                <h3 className="font-display text-3xl mb-4 group-hover:text-accent transition-colors duration-500">Frontend Engineering</h3>
                <p className="text-[#888] mb-6">Building robust, accessible, and highly performant user interfaces using modern React architectures.</p>
                <div className="flex flex-wrap gap-2">{["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (<span key={tech} className="px-3 py-1 rounded-full border border-[#333] text-xs font-mono text-[#aaa]">{tech}</span>))}</div>
              </div>
              <div className="group border-b border-[#222] pb-8 hover:border-accent transition-colors duration-500">
                <h3 className="font-display text-3xl mb-4 group-hover:text-accent transition-colors duration-500">Creative Development</h3>
                <p className="text-[#888] mb-6">Crafting immersive experiences with custom shaders, 3D environments, and complex motion systems.</p>
                <div className="flex flex-wrap gap-2">{["WebGL", "Three.js", "Framer Motion", "GSAP"].map((tech) => (<span key={tech} className="px-3 py-1 rounded-full border border-[#333] text-xs font-mono text-[#aaa]">{tech}</span>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="w-full bg-bg-primary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-[#111]">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="mb-24 flex justify-between items-end">
            <div>
              <div className="mb-8 font-mono text-xs text-accent uppercase tracking-widest">(03) &mdash; Selected Work</div>
              <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">PROVING IT.</h2>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-24">
            <ProjectCard index="01" category="Product Design & Engineering" title="[PROJECT ALPHA]" description="A full-stack AI workflow platform designed with an impossibly smooth drag-and-drop interface." technologies={["Next.js", "Python", "WebGL", "PostgreSQL"]} />
            <ProjectCard index="02" category="Creative Development" title="[PROJECT BETA]" description="An interactive e-commerce experience using physics-based 3D interactions to explore products." technologies={["React Three Fiber", "Framer Motion", "Shopify Plus"]} />
            <ProjectCard index="03" category="Systems Architecture" title="[PROJECT GAMMA]" description="A high-performance real-time dashboard tracking millions of data points with zero layout shift." technologies={["TypeScript", "WebSockets", "D3.js"]} />
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-bg-secondary flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-48 z-10 border-t border-[#111]">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center text-center">
          <div className="mb-12 font-mono text-xs text-accent uppercase tracking-widest">(04) &mdash; Contact</div>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12 hover:text-accent transition-colors duration-500 cursor-pointer" data-hoverable>
            LET'S BUILD.
          </h2>
          <div className="flex gap-8 font-mono text-sm">
            <a href="mailto:hello@example.com" className="hover:text-accent transition-colors" data-hoverable>EMAIL</a>
            <a href="https://github.com/placeholder" target="_blank" className="hover:text-accent transition-colors" data-hoverable>GITHUB</a>
            <a href="https://linkedin.com/in/placeholder" target="_blank" className="hover:text-accent transition-colors" data-hoverable>LINKEDIN</a>
          </div>
        </div>
      </section>
      
      <footer className="w-full py-8 px-8 md:px-16 lg:px-24 border-t border-[#111] bg-bg-secondary flex justify-between items-center text-xs font-mono text-[#555] z-10">
        <div>&copy; {new Date().getFullYear()} SANDEEP.</div>
        <div>ALL RIGHTS RESERVED.</div>
      </footer>
    </main>
  );
}

