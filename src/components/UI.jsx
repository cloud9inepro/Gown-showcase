import { Html } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { activeChapterAtom } from "../hooks/store";

export const UI = () => {
    const activeChapter = useAtomValue(activeChapterAtom);
    const CHAPTER_CONTENT = {
  0: { title: "Bridal", description: "Timeless silhouettes for your walk down the aisle." },
  1: { title: "Reception", description: "Effortless elegance for the celebration after." },
};
  return (
    <>  
 <Html
  transform
  position={[0, 0, 0.06]}
  rotation={[0, 0, 0]}
  distanceFactor={2}
  occlude
>
  <div style={{ width: 260, color: "#fff", textAlign: "center" }}>
    <h2 style={{ fontSize: 24, margin: 0 }}>{CHAPTER_CONTENT[activeChapter]?.title}</h2>
    <p style={{ fontSize: 13, opacity: 0.8 }}>{CHAPTER_CONTENT[activeChapter]?.description}</p>
  </div>
</Html>
    </>
    )}