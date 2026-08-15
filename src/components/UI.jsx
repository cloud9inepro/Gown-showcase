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
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "10px",
        color: "transparent",
        textAlign: "center",
        // display: "inline-block",
        background:
          "linear-gradient(100deg, #f5e6c8, #e8b86d, #c9a876, #f5e6c8)",
        backgroundClip: "text",
        animation: "flow 4s linear infinite",
        backgroundSize: "250% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      description: { fontSize: 13, textAlign: "left", color: "gray" },
    },
  },
  1: {
    title: "Tailored To Command",
    description: "Precision tailoring for the man who won't be overlooked.",
    style: {
      // container: { width: 320, color: "#1e293b", padding: "24px", borderRadius: "16px" },
       title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "10px",
        color: "transparent",
        textAlign: "center",
        background:
          "linear-gradient(100deg, #ff6b5c, #b91c4a, #4a1942, #ff6b5c )",
        backgroundClip: "text",
        animation: "flow 4s linear infinite",
        backgroundSize: "250% 100%",
                WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      description: { fontSize: 14, lineHeight: 1.5, color: "gray" },
    },
  },
  2: {
    title: "The Shoot",
    description: "From studio to spotlight,  every detail captured.",
    style: {
      // container: { width: 320, color: "#1e293b", padding: "24px", borderRadius: "16px" },
       title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "10px",
        color: "transparent",
        textAlign: "center",
        background:
          "linear-gradient(100deg, #7dd3fc, #3b82f6, #1e3a8a, #7dd3fc)",
        backgroundClip: "text",
        animation: "flow 4s linear infinite",
        backgroundSize: "250% auto",
                WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
      description: {
        fontSize: 14,
        color: "gray",
        lineHeight: 1.5,
        textAlign: "center",
      },
    },
  },
  3: {
    title: "Timeless Accessories",
    description: "find whats best for you with our unique collections.",
    description2:
      "•Wedding Bonds •Necklaces •Shoes •Bracelets and lots more... ",
    style: {
      description3: {
        width: 320,
        color: "blue",
        padding: "24px",
        borderRadius: "16px",
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "10px",
        color: "transparent",
        textAlign: "center",
        background:
          "linear-gradient(100deg, #f472b6, #c026d3, #6b21a8, #f472b6)",
        backgroundClip: "text",
        animation: "flow 4s linear infinite",
        backgroundSize: "250% 100%",
                WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      },
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
        <h2 key={activeChapter} style={chapter.style.title}>{chapter.title}</h2>
        <p style={chapter.style.description}>{chapter.description}</p>
        <p style={chapter.style.description}>{chapter.description2}</p>
      </div>
    </Html>
  );
};
