import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";
import { Suspense } from "react";
// import { Leva } from "leva";
// import { Perf } from "r3f-perf";
import { ChapterArrows, ChapterBar } from "./components/ChapterArrows"
import { Loader } from "@react-three/drei";


export default function App() {


  return (
    <>
      {/* <Leva collapsed={true} hidden={false} /> */}
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 55 }}
        style={{ width: "100vw", height: "100vh" }}
      >
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
