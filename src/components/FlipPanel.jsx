import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Just X rotation targets per chapter — position never moves
const CHAPTER_ROTATION_X = {
  0: 0,
  1: 0.5,
  2: 1.1, // steep diagonal, like ch.4
  3: 0.3,
};

export const FlipPanel = ({ activeChapter }) => {
  const panelRef = useRef();

  useGSAP(() => {
    gsap.to(panelRef.current.rotation, {
      x: CHAPTER_ROTATION_X[activeChapter],
      duration: 1.4,
      ease: "power3.inOut",
    });
  }, [activeChapter]);

  return (
    <mesh ref={panelRef} position={[0, 0.5, -0.5]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial color="#e8e0d5" side={2} />
    </mesh>
  );
};