import { Environment } from "@react-three/drei";
import { CameraStand } from "./models/CameraStand"; 
import { StudioUmbrella } from "./models/StudioUmbrella";
import { Drone } from "./models/Drone";
import { Couch } from "./models/Couch";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
export const Chapter03 = () => {
    const groupRef = useRef()

    useFrame((_, delta) => {
          // groupRef.current.rotation.z += 0.2 * delta; 
      
      })

  return (
    <>
      {/* <Environment files="/Environment/ferndale_studio_04_1k.hdr" /> */}
      <directionalLight intensity={4} color="#fff" position={[5, 5, 5]}/>
      <ambientLight position={[0, 0, 0]} color="#fff" intensity={5} />
      {/* <spotLight position={[0, -1, 1.5]} color="#fff"  intensity={20} angle={0.4} penumbra={0.1}/> */}

      <group ref={groupRef} position={[0, 0, 0.03]}>

            <CameraStand scale={0.09} position={[0, -0.6, -0.18]} rotation={[1.57, 0, 0]}/>
            <StudioUmbrella scale={0.0005} position={[0.7, -0.2, -0.44]} rotation={[1.57, -1, 0]} />
       <Float>   
         <Drone position={[-0.7, -0.4, 0]} rotation={[1.57, 2.7, 0]}/>
         </Float>  
          <Couch scale={0.3} position={[0, 0.6, -0.45]} rotation={[1.57, 0, 0]}/>
      </group>
    </>
  );
};
