import {
  Environment,
  ContactShadows,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { Wardrobe } from "./models/Wardrobe";
import { Speaker } from "./models/Speaker";
import { FlipPanel } from "./FlipPanel";
import { People } from "./models/People";
import { DjBooth } from "./models/DjBooth";
import { Vanity } from "./models/Vanity";
import { useAtomValue } from "jotai";
import { activeChapterAtom } from "../hooks/store";
import { UI } from "./UI";



export const Experience = () => {
  const activeChapter = useAtomValue(activeChapterAtom);

  return (
    <>
      <OrbitControls
      // minPolarAngle={Math.PI / 4}
      // maxPolarAngle={Math.PI / 2}
      // minAzimuthAngle={-Math.PI / 4}
      // maxAzimuthAngle={Math.PI / 4}
      // minDistance={2}
      // maxDistance={5}
      // makeDefault
      />

                   {/* Lighting  */}
      <ambientLight intensity={0.5} />
      {/* <spotLight
        intensity={100}
        position={[0, 1, 0.4]}
        // distance={8}
        angle={0.5}
        penumbra={0.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      /> */}
      <Environment
        files="/Environment/ferndale_studio_12_1k.hdr"
        intensity={0.6}
      />

      <Suspense fallback={null}>
        <group position={[0, -0.7, -3]}>
          {/* vertical stage */}
          <group position={[0, 1, 0]}>
            <mesh position={[0, 0, -0.02]}>
              <planeGeometry args={[2.7, 2.2]} />
              <meshStandardMaterial
                color="#c9a876"
                metalness={0.6}
                roughness={0.3}
              />
            </mesh>

                  {/* info board */}
            <mesh rotation={[0, 0, 0]}>
              <planeGeometry args={[2.5, 2]} />
              <meshStandardMaterial
                color="#15151c"
                roughness={0.5}
                metalness={0.5}
              />
              <UI/>
            </mesh>

            <mesh position={[0, 0, -0.03]}>
              <planeGeometry args={[3.5, 4.5]} />
              <meshBasicMaterial color="#000" toneMapped={false} />
            </mesh>
          </group>

          <Speaker scale={0.1} position={[-2, 0, 2]} rotation={[0, 0.6, 0]} />
          <Wardrobe
            scale={0.07}
            position={[2.2, 0.36, 2]}
            rotation={[0, -1.5, 0]}
          />
          <People scale={0.2} position={[0.3, 0, 4.3]} rotation={[0, 10, 0]} />
          <DjBooth
            scale={0.2}
            position={[2.5, 0, 2.3]}
            rotation={[0, -0.9, 0]}
          />
          {/* <Vanity scale={30} position={[0, 2, 0]} /> */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 3]}>
            <FlipPanel chapter={activeChapter} />
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
{/* 
      <ContactShadows
        position={[0, -0.7, 0]}
        opacity={0.6}
        scale={10}
        blur={2.5}
        far={2}
      /> */}
    </>
  );
};
