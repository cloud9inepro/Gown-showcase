import { Environment } from "@react-three/drei";
import { Suit } from "./models/Suit";
import { Bottle } from "./models/Bottle";
import { Flute } from "./models/Flute";
import { Ztable } from "./models/Ztable";
import { Car } from "./models/Car";

export const Chapter02 = () => {
  return (
    <>
      <Environment
        files="/Environment/ferndale_studio_06_1k.hdr"/>
      <directionalLight intensity={4} color="#fff" position={[5, 5, 5]}/>
      <ambientLight position={[0, 0, 0]} color="#fff" intensity={1} />
     
      {/* <ambientLight position={[0, -1, 1.5]} color="#fff" intensity={3} /> */}
      <spotLight
        position={[0, -1, 1.5]}
        color="#fff"
        intensity={100}
        angle={0.5}
        penumbra={0.1}
      />

      <group position={[0, 0, -0.42]}>
        <group position={[0, -0.9, 0]}>
          <Bottle
            scale={0.3}
            position={[-0.5, 0.3, 0.4]}
            rotation={[1.57, 0, 0]}
          />
          <Flute
            scale={0.01}
            position={[-0.6, 0.3, 0.38]}
            rotation={[1.57, 0, 0]}
          />
          <Ztable
            scale={0.9}
            position={[-0.5, 0.3, 0]}
            rotation={[1.57, 0, 0]}
          />
        </group>
        <Suit scale={0.4} position={[0, -0.3, 0.01]} rotation={[1.57, 0, 0]} />
        <Car scale={0.3} position={[0.1, 0.5, 0.3]} rotation={[1.57, -1.57, 0]}/>
      </group>
    </>
  );
};
