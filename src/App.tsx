import { Canvas } from '@react-three/fiber'
import {Experience } from './components/Experience.jsx'
import { Suspense, useEffect, useState } from 'react'
// import { UI } from "./components/UI.jsx"
import { LoadingScreen } from "./components/LoadingScreen"
import gsap from "gsap"
import {Leva} from "leva"
// import { CustomizationProvider } from "./context/Customization.jsx"
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() =>{
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, [])

  gsap.to(".loading-screen", {
    opacity: 0,
    duration: 5,
    onComplete: () => setLoading(false)
  })

  return (
    
    // <CustomizationProvider>
    <>
    {/* {loading && <LoadingScreen/>} */}
    <Leva collapsed={true} hidden={false} />
    <Canvas camera={{ position: [0, 0.4, 3.5], fov: 55 }}  style={{ width:'100vw', height:'100vh'}}>
    <color attach={"background"} args={["#213547"]}/>
    <fog attach="fog" args={["#213547", 10, 60]} />
    <Suspense fallback={null}>
      <Experience/>
    </Suspense>
      </Canvas>
      
      {/* <UI/> */}
      </>
// </CustomizationProvider>
      
     
  
      
     
  )
}