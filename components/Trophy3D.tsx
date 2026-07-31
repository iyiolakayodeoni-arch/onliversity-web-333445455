"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* Cup profile revolved around the Y axis (x = radius, y = height) */
const CUP_POINTS = [
  new THREE.Vector2(0.18, -0.18),
  new THREE.Vector2(0.36, -0.02),
  new THREE.Vector2(0.54, 0.26),
  new THREE.Vector2(0.52, 0.56),
  new THREE.Vector2(0.5, 0.8),
  new THREE.Vector2(0.5, 0.95),
];

const GOLD = "#ffd23f";
const GOLD_DARK = "#b8860b";
const GREEN = "#39ff6a";
const VIOLET = "#a06bff";

function Trophy() {
  return (
    <group position={[0, -0.15, 0]}>
      {/* ── Base ── */}
      <mesh position={[0, -1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.98, 1.08, 0.3, 48]} />
        <meshStandardMaterial color={GOLD_DARK} metalness={0.9} roughness={0.28} />
      </mesh>
      <mesh position={[0, -1.02, 0]} castShadow>
        <cylinderGeometry args={[0.72, 0.98, 0.26, 48]} />
        <meshStandardMaterial color={GOLD} metalness={0.95} roughness={0.16} />
      </mesh>

      {/* ── Stem ── */}
      <mesh position={[0, -0.55, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.24, 0.72, 32]} />
        <meshStandardMaterial color={GOLD} metalness={0.95} roughness={0.16} />
      </mesh>

      {/* ── Cup bowl (revolved) ── */}
      <mesh castShadow>
        <latheGeometry args={[CUP_POINTS, 64]} />
        <meshStandardMaterial
          color={GOLD}
          metalness={1}
          roughness={0.12}
          side={THREE.DoubleSide}
          emissive={GREEN}
          emissiveIntensity={0.06}
        />
      </mesh>

      {/* ── Rim ── */}
      <mesh position={[0, 0.95, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 64]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.1} />
      </mesh>

      {/* ── Side handles ── */}
      <mesh position={[-0.62, 0.32, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.3, 0.055, 16, 48]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.12} />
      </mesh>
      <mesh position={[0.62, 0.32, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.3, 0.055, 16, 48]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.12} />
      </mesh>

      {/* ── Glowing finial orb on top ── */}
      <mesh position={[0, 1.32, 0]}>
        <sphereGeometry args={[0.17, 32, 32]} />
        <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 1.5, 0]} intensity={2} distance={3} decay={0} color={GREEN} />

      {/* ── Holographic wireframe shell ── */}
      <mesh>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color={GREEN} wireframe transparent opacity={0.07} />
      </mesh>
    </group>
  );
}

function TrophyScene() {
  return (
    <>
      {/* predictable key light + colored fills */}
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={2.6} castShadow />
      <pointLight position={[-4, 2, 3]} intensity={1.8} decay={0} color={VIOLET} />
      <pointLight position={[3, -1, -2]} intensity={1.4} decay={0} color={GREEN} />
      <spotLight position={[0, 7, 2]} angle={0.5} penumbra={1} intensity={2} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.35} floatIntensity={0.6}>
        <Trophy />
      </Float>

      <Sparkles count={36} scale={4.2} size={3.2} speed={0.35} color={GREEN} opacity={0.6} />

      <ContactShadows position={[0, -1.62, 0]} opacity={0.5} scale={6} blur={2.6} far={3} color={GREEN} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export function Trophy3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.4, 5], fov: 38 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        shadows
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <TrophyScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
