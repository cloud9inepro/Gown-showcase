import { Environment } from "@react-three/drei";

export const Chapter02 = () => {    
    return (
        <>
        <Environment
                files="/Environment/ferndale_studio_06_1k.hdr"
                intensity={1.3}
              />
                        <ambientLight 
  position={[0, 0, 0]} 
  color="#fff" 
  intensity={5} 
/>
<spotLight position={[0, -1, 1.5]} color="#fff"  intensity={200} angle={0.4} penumbra={0.1}/>

        <group position={[0, 0, -0.29]}>
            <mesh >
                <boxGeometry args={[0.3, 0.3, 0.3]}/>
                <meshStandardMaterial color="blue" metalness={0.6}/>
            </mesh>
        </group>
        </>
    )
}