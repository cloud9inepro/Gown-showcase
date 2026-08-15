import { Environment } from "@react-three/drei";
import { Pillar } from "./models/Pillar";
import { Heels } from "./models/Heels";
import { VaseStand } from "./models/VaseStand";
import { Necklaces } from "./models/Necklaces";
import { Bracelet } from "./models/Bracelet";
import { AntiqueTable } from "./models/AntiqueTable";
import { Ring } from "./models/Ring";

export const Chapter04 = () => {
  return (
    <>
      <Environment files="/Environment/ferndale_studio_05_1k.hdr" />
      <directionalLight intensity={4} color="#fff" position={[0, 0, 1]} />
      <ambientLight  color="#fff" intensity={0.5} />
      {/* <spotLight
        position={[-0.1, -1.4, 1.8]}
        color="#fdfafc"
        intensity={80}
        angle={0.4}
        penumbra={0.1}
      /> */}

      <group position={[0, 0, -0.17]}>
        <Pillar
          scale={0.3}
          position={[0, -0.6, 0.05]}
          rotation={[1.57, 0, 0]}
        />
        <Heels position={[0, -0.58, 0.35]} rotation={[1.57, 0, 0]} />

        <group>
          <VaseStand
            scale={0.5}
            position={[0.7, 0.2, -0.25]}
            rotation={[1.57, 0, 0]}
          />
          <Ring
            scale={0.5}
            position={[0.7, 0.2, 0.2]}
            rotation={[1.57, 0.9, 0]}
          />
        </group>
        <group position={[0, 0.5, 0]}>
          <Necklaces
            scale={0.5}
            position={[-0.9, -0.8, 0.01]}
            rotation={[1.57, 0, 0]}
          />
          <AntiqueTable
            scale={0.012}
            position={[-0.9, -0.8, -0.25]}
            rotation={[1.57, 0, 0]}
          />
        </group>
      </group>
    </>
  );
};
