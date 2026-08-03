import { Environment, ContactShadows, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Wardrobe } from "./models/Wardrobe";
import { Speaker } from "./models/Speaker";
import { FlipPanel } from "./FlipPanel";


export const Experience = () => {
  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minDistance={2}
        maxDistance={10}
        makeDefault
      />

      {/* Lighting  */}
      <ambientLight intensity={0.3} />
      <spotLight
        position={[2, 4, 2]}
        angle={0.4}
        penumbra={0.6}
        intensity={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Environment files="/Environment/ferndale_studio_12_1k.hdr" intensity={0.6} />

      <Suspense fallback={null}>
        <group position={[0, -0.7, -1]}>

          <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
            <planeGeometry args={[2.5, 2]} />
            <meshStandardMaterial color="#f1f" side={2} />
          </mesh>

          <Speaker scale={0.1} position={[-5, 0, 0]} rotation={[0, 0.6, 0]} />
          <Wardrobe scale={0.1} position={[3, 0.47, 1.3]} rotation={[0, -0.9, 0]} />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 3]}>
            <FlipPanel activeChapter={0} />
          </mesh>
          
        </group>
      </Suspense>

      {/* Floor  */}
      <mesh position={[0, -0.71, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          roughness={0.8}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.2}
          color="#0a0a0a"
          metalness={0.4}
        />
      </mesh>

      <ContactShadows position={[0, -0.7, 0]} opacity={0.6} scale={10} blur={2.5} far={2} />
    </>
  );
};