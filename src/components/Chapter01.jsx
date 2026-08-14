import { Gown } from "./models/Gown";
import { Mannequin } from "./models/Mannequin";
import { VintageCamera } from "./models/VintageCamera";
import { Mirror } from "./models/ModernMirror";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Flower } from "./models/Flower";
import { Environment } from "@react-three/drei";

export const Chapter01 = () => {    
    return (
        <>
        <Environment
        files="/Environment/ferndale_studio_12_1k.hdr"
        intensity={0.1}
      />
        <group position={[0, 0, 0.026]}>
            <ambientLight 
  position={[0, 0, 0]} 
  color="#8207d8" 
  intensity={5} 
/>



            <spotLight position={[0, -1, 1.5]} color="#fff4e6"  intensity={20} angle={0.4} penumbra={0.1}/>
            <Gown scale={0.45} position={[0, 0, -0.47]}/>
            <Mannequin scale={0.4} position={[0, 0, -0.1]}/>
            <Mirror scale={0.08} position={[0, 1, -0.45]} rotation={[0, Math.PI/2, 1.5]}/>
            {/* <VintageCamera scale={0.05} position={[-0.8, -0.4, 0]} rotation={[0, Math.PI/2, Math.PI/2]}/> */}
            <Flower scale={0.009} position={[-0.8, -0.6, -0.44]} rotation={[1.57, Math.PI, 0]}     />
            <mesh position={[0, 0, -0.44]} rotation={[-Math.PI / 10000, 0, 0]}>
                    <planeGeometry args={[2.5, 2.5]} />
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
                    //   metalness={0.4}
                    />
                  </mesh>
        </group>
        
            </>
    )
}