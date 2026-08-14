import { Html } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { activeChapterAtom } from "../hooks/store";

const CHAPTER_CONTENT = {
  0: {
    title: "Bridal Gown Has Never Been This Perfect",
    description: "Timeless silhouettes for your walk down the aisle.",
    description2: "Gowns tailored to fit perfectly.",
    style: {
      // container: { width: 260, color: "#fff", padding: "16px", borderRadius: "8px" },
      title: { fontSize: 20, fontWeight: "bold", marginBottom: "10px", color: "#f8fafc", textAlign: "center" },
      description: { fontSize: 13, textAlign: "left", color: "gray" },
    },
  },
  1: {
    title: "The Perfect Suit",
    description: "Effortless elegance for the celebration after.",
    style: {
      // container: { width: 320, color: "#1e293b", padding: "24px", borderRadius: "16px" },
      title: { fontSize: 28, fontWeight: "600", margin: 0, color: "#fff", textAlign: "center" },
      description: { fontSize: 14, lineHeight: 1.5, color: "gray"  },
    },
  },
  2: {
    title: "The Shoot",
    description: "From studio to spotlight,  every detail captured.",
    style: {
      // container: { width: 320, color: "#1e293b", padding: "24px", borderRadius: "16px" },
      title: { fontSize: 28, fontWeight: "600", margin: 0, color: "blue", textAlign: "center",   },
      description: { fontSize: 14, color: "gray", lineHeight: 1.5, textAlign: "center",  },
    },
  },
   3: {
    title: "Timeless Accessories",
    description: "find whats best for you with our unique collections.",
    description2: "•Wedding Bonds •Necklaces •Shoes •Bracelets and lots more... ",
    style: {
      description3: { width: 320, color: "blue", padding: "24px", borderRadius: "16px" },
      title: { fontSize: 28, fontWeight: "600", margin: 0, color: "#fff", textAlign: "left",  },
      description: { fontSize: 14, color: "gray", lineHeight: 1.5 },
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
        <p style={chapter.style.description}>{chapter.description2}</p>
      </div>
    </Html>
  );
};