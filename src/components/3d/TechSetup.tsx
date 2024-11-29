import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Torus } from '@react-three/drei';
import { Group } from 'three';

export function TechSetup() {
  const groupRef = useRef<Group>(null);
  const [orbitRotation, setOrbitRotation] = useState(0);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
      setOrbitRotation(state.clock.getElapsedTime() * 0.5);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Monitor */}
      <group position={[0, 0, 0]}>
        <Box args={[4, 2.5, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[3.8, 2.3, 0.05]} position={[0, 0, 0.1]}>
          <meshStandardMaterial color="#000000" emissive="#4870df" emissiveIntensity={0.2} />
        </Box>
      </group>

      {/* Monitor Stand */}
      <Cylinder args={[0.1, 0.2, 1]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Keyboard */}
      <Box args={[2, 0.1, 0.8]} position={[0, -1.8, 0.5]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.5} />
      </Box>

      {/* Orbiting Elements (representing different tech stacks) */}
      <group rotation={[0, orbitRotation, 0]}>
        {/* Frontend Ring */}
        <Torus args={[3, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.5} />
        </Torus>
        <Box args={[0.3, 0.3, 0.3]} position={[3, 0, 0]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.2} />
        </Box>

        {/* Backend Ring */}
        <Torus args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#68a063" emissive="#68a063" emissiveIntensity={0.5} />
        </Torus>
        <Box args={[0.3, 0.3, 0.3]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#68a063" emissive="#68a063" emissiveIntensity={0.2} />
        </Box>

        {/* Database Ring */}
        <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
          <meshStandardMaterial color="#f29111" emissive="#f29111" emissiveIntensity={0.5} />
        </Torus>
        <Box args={[0.3, 0.3, 0.3]} position={[0, -2, 0]}>
          <meshStandardMaterial color="#f29111" emissive="#f29111" emissiveIntensity={0.2} />
        </Box>
      </group>
    </group>
  );
}