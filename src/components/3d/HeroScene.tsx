"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useScroll, useReducedMotion } from "framer-motion";
import { Environment } from "@react-three/drei";

function Architecture({ scrollProgress, reducedMotion }: { scrollProgress: any, reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  // Abstract geometry fragments
  const fragments = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 45; i++) {
      const isWireframe = Math.random() > 0.6;
      const isAccent = Math.random() > 0.9;
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 30 - 5
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        scale: Math.random() * 2 + 0.5,
        isWireframe,
        isAccent,
        // Individual rotation speeds
        rx: (Math.random() - 0.5) * 0.005,
        ry: (Math.random() - 0.5) * 0.005,
      });
    }
    return temp;
  }, []);

  const fragmentsRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current || !fragmentsRef.current) return;
    
    const scrollVal = scrollProgress.get();

    if (!reducedMotion) {
      // Damped pointer interpolation for camera
      const targetX = (state.pointer.x * Math.PI) / 30; // approx +- 6 degrees
      const targetY = (state.pointer.y * Math.PI) / 30;
      
      state.camera.rotation.x += (targetY - state.camera.rotation.x) * 3 * delta;
      state.camera.rotation.y += (-targetX - state.camera.rotation.y) * 3 * delta;

      // Independent fragment rotation
      fragmentsRef.current.children.forEach((child, i) => {
        child.rotation.x += fragments[i].rx;
        child.rotation.y += fragments[i].ry;
      });
    }

    // Scroll driven transformations
    // Camera travels deeper into the scene
    state.camera.position.z = THREE.MathUtils.lerp(18, 5, scrollVal);
    state.camera.position.y = THREE.MathUtils.lerp(0, -2, scrollVal);
    
    // Group rotates as we scroll down
    group.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 0.25, scrollVal);
    group.current.position.y = THREE.MathUtils.lerp(0, 5, scrollVal);
  });

  return (
    <group ref={group}>
      <group ref={fragmentsRef}>
        {fragments.map((frag, i) => (
          <mesh 
            key={i} 
            position={frag.position} 
            rotation={frag.rotation} 
            scale={frag.scale}
          >
            {/* Mix of thin architectural planes and structural lines */}
            <boxGeometry args={[1, 1, 0.02]} />
            {frag.isWireframe ? (
              <meshBasicMaterial 
                color={frag.isAccent ? "#FF3A00" : "#3F3F46"} 
                wireframe 
                transparent 
                opacity={frag.isAccent ? 0.6 : 0.2} 
              />
            ) : (
              <meshStandardMaterial 
                color={frag.isAccent ? "#FF3A00" : "#1A1A1A"} 
                transparent 
                opacity={frag.isAccent ? 0.9 : 0.7} 
                roughness={0.2}
                metalness={0.8}
              />
            )}
          </mesh>
        ))}
      </group>
      
      {/* Central technical core anchoring the composition */}
      <mesh position={[5, -2, -10]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <octahedronGeometry args={[8, 0]} />
        <meshBasicMaterial color="#27272A" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen bg-bg-base">
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 45 }} 
        dpr={[1, 1.5]} // Capped for performance
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={2} color="#FF3A00" />
          <Architecture scrollProgress={scrollYProgress} reducedMotion={reducedMotion} />
          <fog attach="fog" args={["#030303", 10, 40]} />
        </Suspense>
      </Canvas>
    </div>
  );
}