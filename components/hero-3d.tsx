"use client";

import { Component, useRef, useMemo, useState, useEffect, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* Prevents any 3D/WebGL failure from unmounting the whole page */
class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.error("[v0] Hero3D scene error:", error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* Wobbling monochrome wireframe blob */
function Blob({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // Slow idle rotation
    group.current.rotation.y = t * 0.12;
    group.current.rotation.z = t * 0.04;
    // Subtle parallax toward the pointer
    group.current.rotation.x += (pointer.current.y * 0.35 - group.current.rotation.x) * 0.03;
    group.current.position.x += (pointer.current.x * 0.6 - group.current.position.x) * 0.03;
  });

  return (
    <group ref={group}>
      {/* Outer wireframe shell */}
      <Icosahedron args={[2.1, 6]}>
        <MeshDistortMaterial
          color="#000000"
          wireframe
          distort={0.4}
          speed={1.6}
          transparent
          opacity={0.28}
        />
      </Icosahedron>
      {/* Inner solid core for depth */}
      <Icosahedron args={[1.35, 4]}>
        <MeshDistortMaterial
          color="#52525b"
          distort={0.5}
          speed={2.2}
          roughness={0.35}
          metalness={0.9}
          transparent
          opacity={0.18}
        />
      </Icosahedron>
    </group>
  );
}

/* Floating particle field */
function Particles({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a spherical shell for a nice depth field
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#18181b"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function Rig({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  useFrame(() => {
    // Gentle camera drift toward pointer
    camera.position.x += (pointer.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (-pointer.current.y * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  const pointer = useRef({ x: 0, y: 0 });
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    // Cap DPR for performance, especially on mobile
    setDpr(Math.min(window.devicePixelRatio, 1.5));

    const handleMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <SceneErrorBoundary>
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -3, -2]} intensity={0.6} color="#ffffff" />
        <Blob pointer={pointer} />
        <Particles />
        <Rig pointer={pointer} />
      </Canvas>
    </SceneErrorBoundary>
  );
}
