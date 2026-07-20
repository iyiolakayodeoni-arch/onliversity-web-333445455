"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-pulse text-primary text-sm">Loading...</div>
    </div>
  );
}

/**
 * Chinedu - Yoruba from Ibadan
 * Simple Naija animation style: relaxed stance, minimal movement
 */
function ChineduCharacter() {
  const groupRef = useRef<THREE.Group>(null);

  const skinColor = "#8B6239";

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Very subtle breathing - Naija style is calm, not over-animated
    groupRef.current.position.y = Math.sin(time * 1) * 0.01;
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* LEGS - Relaxed stance, feet slightly apart */}
      <group position={[-0.2, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.13, 0.11, 1, 8]} />
          <meshStandardMaterial color="#2c2c2c" roughness={0.8} />
        </mesh>
        {/* White sneaker */}
        <mesh position={[0, -0.05, 0.05]} castShadow>
          <boxGeometry args={[0.2, 0.1, 0.28]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
      </group>
      <group position={[0.2, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.13, 0.11, 1, 8]} />
          <meshStandardMaterial color="#2c2c2c" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.05, 0.05]} castShadow>
          <boxGeometry args={[0.2, 0.1, 0.28]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
      </group>

      {/* TORSO - Upright, confident */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.65, 0.85, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </mesh>

      {/* Gold trim */}
      <mesh position={[0, 1.58, 0.1]}>
        <boxGeometry args={[0.5, 0.05, 0.02]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Number */}
      <mesh position={[0, 1.15, 0.16]}>
        <planeGeometry args={[0.2, 0.15]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* ARMS - Relaxed at sides, slight bend */}
      <group position={[-0.42, 1.35, 0]} rotation={[0.1, 0, 0.05]}>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.08, 0.5, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.5, 0]} castShadow>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.7} />
        </mesh>
      </group>
      <group position={[0.42, 1.35, 0]} rotation={[0.1, 0, -0.05]}>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.08, 0.5, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.5, 0]} castShadow>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.7} />
        </mesh>
      </group>

      {/* NECK */}
      <mesh position={[0, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.15, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* HEAD - Slight tilt, confident */}
      <mesh position={[0, 1.95, 0]} castShadow rotation={[0, 0, 0.02]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* HAIR - Low taper fade */}
      <mesh position={[0, 2.1, -0.02]} castShadow>
        <sphereGeometry args={[0.29, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* FACE FEATURES - Simple, clean */}
      {/* Eyes */}
      <mesh position={[-0.09, 1.97, 0.24]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.09, 1.97, 0.24]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.09, 1.97, 0.26]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#2d1810" />
      </mesh>
      <mesh position={[0.09, 1.97, 0.26]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#2d1810" />
      </mesh>

      {/* Nose - broader */}
      <mesh position={[0, 1.92, 0.25]}>
        <boxGeometry args={[0.1, 0.06, 0.05]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      {/* Mouth - slight smile */}
      <mesh position={[0, 1.85, 0.26]}>
        <boxGeometry args={[0.08, 0.025, 0.02]} />
        <meshStandardMaterial color="#6B4423" roughness={0.6} />
      </mesh>

      {/* Gold chain */}
      <mesh position={[0, 1.68, 0.18]} rotation={[0.2, 0, 0]}>
        <torusGeometry args={[0.15, 0.018, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} />
      </mesh>
    </group>
  );
}

/**
 * Obinna - Igbo from Port Harcourt
 * Simple Naija style: energetic but controlled stance
 */
function ObinnaCharacter() {
  const groupRef = useRef<THREE.Group>(null);

  const skinColor = "#6B4423";

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Slight bounce - more energy but still simple
    groupRef.current.position.y = Math.sin(time * 1.5) * 0.015;
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.03;
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* LEGS - Narrower stance, ready to move */}
      <group position={[-0.18, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.1, 1, 8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
        {/* Sneaker with orange accent */}
        <mesh position={[0, -0.05, 0.05]} castShadow>
          <boxGeometry args={[0.19, 0.11, 0.27]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.08]} castShadow>
          <boxGeometry args={[0.17, 0.05, 0.06]} />
          <meshStandardMaterial color="#ff6b35" roughness={0.5} />
        </mesh>
      </group>
      <group position={[0.18, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.1, 1, 8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.05, 0.05]} castShadow>
          <boxGeometry args={[0.19, 0.11, 0.27]} />
          <meshStandardMaterial color="#ffffff" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.08]} castShadow>
          <boxGeometry args={[0.17, 0.05, 0.06]} />
          <meshStandardMaterial color="#ff6b35" roughness={0.5} />
        </mesh>
      </group>

      {/* TORSO - Slight lean forward, energetic */}
      <mesh position={[0, 1.2, 0]} castShadow rotation={[0.05, 0, 0]}>
        <boxGeometry args={[0.6, 0.82, 0.28]} />
        <meshStandardMaterial color="#ff6b35" roughness={0.7} />
      </mesh>

      {/* Flame design */}
      <mesh position={[0, 1.15, 0.15]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#ffd700" emissive="#ff6b35" emissiveIntensity={0.3} />
      </mesh>

      {/* ARMS - One hand slightly forward, ready */}
      <group position={[-0.4, 1.35, 0]} rotation={[0.15, 0, 0.08]}>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.48, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
        <mesh position={[0, -0.49, 0]} castShadow>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
      </group>
      <group position={[0.4, 1.35, 0.05]} rotation={[0.2, 0, -0.05]}>
        <mesh position={[0, -0.25, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.48, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
        <mesh position={[0, -0.49, 0]} castShadow>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} />
        </mesh>
      </group>

      {/* NECK */}
      <mesh position={[0, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 0.14, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>

      {/* HEAD - Slight tilt, alert */}
      <mesh position={[0, 1.95, 0]} castShadow rotation={[0, 0.05, 0.03]}>
        <sphereGeometry args={[0.26, 16, 16]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>

      {/* HAIR - 360 waves */}
      <mesh position={[0, 2.08, -0.02]} castShadow>
        <sphereGeometry args={[0.27, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.95} />
      </mesh>

      {/* CAP - Backwards */}
      <mesh position={[0, 2.08, 0]} castShadow>
        <cylinderGeometry args={[0.27, 0.27, 0.08, 16]} />
        <meshStandardMaterial color="#ff6b35" roughness={0.6} />
      </mesh>
      <mesh position={[0, 2.08, -0.2]} rotation={[0.15, 0, 0]} castShadow>
        <boxGeometry args={[0.28, 0.02, 0.16]} />
        <meshStandardMaterial color="#ff6b35" roughness={0.6} />
      </mesh>

      {/* FACE FEATURES - Simpler, cleaner */}
      {/* Eyes */}
      <mesh position={[-0.08, 1.97, 0.23]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.08, 1.97, 0.23]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.08, 1.97, 0.25]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color="#1a0f0a" />
      </mesh>
      <mesh position={[0.08, 1.97, 0.25]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color="#1a0f0a" />
      </mesh>

      {/* Nose - narrower */}
      <mesh position={[0, 1.93, 0.24]}>
        <boxGeometry args={[0.07, 0.08, 0.04]} />
        <meshStandardMaterial color={skinColor} roughness={0.65} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 1.86, 0.25]}>
        <boxGeometry args={[0.07, 0.02, 0.02]} />
        <meshStandardMaterial color="#5a3520" roughness={0.6} />
      </mesh>

      {/* Wristband */}
      <mesh position={[0.4, 0.95, 0.05]}>
        <cylinderGeometry args={[0.085, 0.085, 0.035, 8]} />
        <meshStandardMaterial color="#ff6b35" roughness={0.7} />
      </mesh>
    </group>
  );
}

interface Coach3DProps {
  coachId: string;
  size?: number;
}

export function Coach3D({ coachId, size = 200 }: Coach3DProps) {
  const isChinedu = coachId === "king-of-the-pitch";

  return (
    <div style={{ width: size, height: size * 1.3 }}>
      <Canvas
        camera={{ position: [0, 0.2, 4.5], fov: 45 }}
        shadows
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Simple lighting - Naija style is clean, not dramatic */}
          <ambientLight intensity={0.7} color="#ffffff" />
          <directionalLight
            position={[3, 5, 3]}
            intensity={1}
            castShadow
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
          />

          {/* Character */}
          {isChinedu ? (
            <ChineduCharacter />
          ) : (
            <ObinnaCharacter />
          )}

          {/* Simple shadow */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={8}
            blur={2}
            far={3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
