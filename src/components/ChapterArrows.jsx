import { useAtom } from "jotai";
import { targetChapterAtom } from "../hooks/store";
import { CHAPTERS } from "./Chapters";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const ChapterArrows = () => {
  const [activeChapter, setTargetChapter] = useAtom(targetChapterAtom);
  const goPrev = () => setTargetChapter((c) => Math.max(c - 1, 0));
  const goNext = () =>
    setTargetChapter((c) => Math.min(c + 1, CHAPTERS.length - 1));

  return (
    <>
      <button
        className="absolute text-2xl top-100 text-white opacity-50 hover:opacity-100 cursor-pointer transition z-10 left-2"
        onClick={goPrev}
        disabled={activeChapter === 0}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute text-2xl top-100 text-white opacity-50 hover:opacity-100 cursor-pointer transition z-10 right-2"
        onClick={goNext}
        disabled={activeChapter === CHAPTERS.length - 1}
      >
        <FaArrowRight />
      </button>
    </>
  );
};

export const ChapterBar = () =>{
    const [targetChapter, setTargetChapter] = useAtom(targetChapterAtom);
    return(
        <div style={{ display: "flex", gap: "15px", width: "full", position: "relative", bottom: "130px",
                       justifyContent: "center"
           }}>
            {CHAPTERS.map((ch) =>(
                <button
                    key={ch.ld}
                    // onClick={() => setTargetChapter(ch.id)}
                    style={{
                        fontWeight: targetChapter ===ch.id ? "bold" : "normal",
                        opacity: targetChapter === ch.id ? 1 : 0.5, backgroundColor: "#f5f0e8",
                        padding: "12px", borderRadius: "7%", color: "black", cursor: "pointer",
                        
                    }}
                 >
                    {ch.label}
                </button>
            ))}

        </div>
    )
}
