"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ index, title, category, description, technologies }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] cursor-none group"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      data-hoverable
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-[#0a0a0a] border border-border overflow-hidden">
        <motion.div 
          className="w-full h-full bg-[#111] bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
      </div>

      <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex justify-between items-start">
          <motion.div 
            className="font-mono text-xs text-accent-primary uppercase tracking-widest"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {index} &mdash; {category}
          </motion.div>
          <div className="flex gap-2">
            {technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-bg-base/50 backdrop-blur-md rounded-full border border-border text-[10px] font-mono text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl">
          <motion.h3 
            className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4"
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-text-secondary text-sm md:text-base font-sans max-w-lg"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

