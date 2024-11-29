import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TechSetup } from './TechSetup';
import { Suspense } from 'react';

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={['#000']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Stars Background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Tech Setup with Suspense boundary */}
      <Suspense fallback={null}>
        <TechSetup />
      </Suspense>
      
      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}