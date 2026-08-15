import {
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
import { Statue } from "./models/Statue";
import { useAtomValue } from "jotai";
import { activeChapterAtom } from "../hooks/store";
import { UI } from "./UI";



export const Experience = () => {
  const activeChapter = useAtomValue(activeChapterAtom);

  return (
    <>
      <OrbitControls
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 3}
      minDistance={2}
      maxDistance={5}
      makeDefault
      />

      <Suspense fallback={null}>
        <group position={[0, -0.7, -3]}>

          {/* vertical stage */}
          <group position={[0, 1, 0]}>
                {/* bar */}
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
                  {/* black board */}
            <mesh position={[0, 0, -0.03]}>
              <planeGeometry args={[3.5, 4.5]} />
              <meshBasicMaterial color="#000" toneMapped={false} />
            </mesh>
          </group>

                {/* 3D models around the stage */}
          <Speaker scale={0.1} position={[-1.8, 0, 2.8]} rotation={[0, 0.6, 0]} />
          <Wardrobe
            scale={0.07}
            position={[2.1, 0.36, 1.5]}
            rotation={[0, -1.1, 0]}
          />
          <People scale={0.29} position={[0.5, 0, 4.3]} rotation={[0, Math.PI, 0]} />
          <DjBooth
            scale={0.2}
            position={[2, 0, 4.9]}
            rotation={[0, -0.9, 0]}
          />
          <Statue 
            scale={5}
            position={[-1.8, 0, 2]}
            rotation={[0, -0.9, 0]}
          />

                     {/* flipping stage */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 3]}>
            <FlipPanel chapter={activeChapter} />
          </mesh>
        </group>
      </Suspense>

               {/* Floor  */}
      <mesh position={[0, -0.71, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.4}
        />
      </mesh>
    </>
  );
};
