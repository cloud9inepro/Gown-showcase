import { Environment } from "@react-three/drei";


export const Chapter03 = () => {    
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
        <spotLight position={[0, -1, 1.5]} color="#fff"  intensity={20} angle={0.4} penumbra={0.1}/>
        
        <group>
            <mesh>
                <boxGeometry args={[1, 1]}/>
                <meshStandardMaterial color="orange" />
            </mesh>
        </group>
        </>
    )
}