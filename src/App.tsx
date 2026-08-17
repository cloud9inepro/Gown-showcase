import { Canvas, useThree } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";
import { Suspense, useEffect } from "react";
// import { Leva } from "leva";
// import { Perf } from "r3f-perf";
import { ChapterArrows, ChapterBar } from "./components/ChapterArrows"
import { Loader, useGLTF } from "@react-three/drei";
import { ALL_MODELS } from "./hooks/assets.js"
import { PerspectiveCamera } from "@react-three/drei";

ALL_MODELS.forEach((path: string | string[]) => useGLTF.preload(path));

export default function App() {

  const ResponsiveCamera =() =>{
    const {camera, size} = useThree()

    useEffect(() =>{
      const isMobile = size.width < 768;
      camera.position.set(0, 0, isMobile ? 3.8 : 3.2);
      camera.fov = isMobile ? 55 : 55;
      camera.updateProjectionMatrix();
    }, [size, camera]);
    return null;
  };

  return (
    <>
      {/* <Leva collapsed={true} hidden={false} /> */}
      <Canvas
        // camera={{ position: [0, 0, 3.2], fov: 55 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ResponsiveCamera/>
         {/* <Perf position="top-left" /> */}
        <color attach={"background"} args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 60]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader
        // containerStyles={{
        //   background: "#a0a0a0a"
        // }}
        innerStyles={{
          background: "#2a2a2a",
          width: "300px",
          height: "4px",
        }}
        barStyles={{
          background: "linear-gradient(100deg, #f5e6c8, #e8b85d, #c9a876)",
          height: "100%"
        }}
        dataStyles={{
          color: "#f5e6c8",
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          marginTop: "12px"
        }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
      <ChapterArrows/>
      <ChapterBar/>
    </>
  );
}
