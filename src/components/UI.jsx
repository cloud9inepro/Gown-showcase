import { Html } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { activeChapterAtom } from "../hooks/store";

const CHAPTER_CONTENT = {
  0: {
    title: "Bridal",
    description: "Timeless silhouettes for your walk down the aisle.",
    style: {
      container: { width: 260, color: "#fff", padding: "16px", borderRadius: "8px" },
      title: { fontSize: 24, fontWeight: "bold", margin: 0, color: "#f8fafc", textAlign: "center" },
      description: { fontSize: 13, opacity: 0.8 },
    },
  },
  1: {
    title: "Reception",
    description: "Effortless elegance for the celebration after.",
    style: {
      container: { width: 320, color: "#1e293b", background: "#ffffff", padding: "24px", borderRadius: "16px" },
      title: { fontSize: 28, fontWeight: "600", margin: 0, color: "#0f172a" },
      description: { fontSize: 14, opacity: 0.9, lineHeight: 1.5 },
    },
  },
};

export const UI = () => {
  const activeChapter = useAtomValue(activeChapterAtom);
  const chapter = CHAPTER_CONTENT[activeChapter];

  if (!chapter) return null;

  return (
    <Html
      transform
      position={[0, 0.5, 0.06]}
      rotation={[0, 0, 0]}
      distanceFactor={2}
      occlude
    >
      <div style={chapter.style.container}>
        <h2 style={chapter.style.title}>{chapter.title}</h2>
        <p style={chapter.style.description}>{chapter.description}</p>
      </div>
    </Html>
  );
};