import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RoundedBox } from "@react-three/drei";
import { useControls } from "leva";
import { Chapter01 } from "./Chapter01";
import { Chapter02 } from "./Chapter02";
import { Chapter03 } from "./Chapter03";
import { Chapter04 } from "./Chapter04";
import { useAtom } from "jotai";
import { activeChapterAtom } from "../hooks/store";

const CHAPTERS = {
  0: Chapter01,
  1: Chapter02,
  2: Chapter03,
  3: Chapter04,
};

export const FlipPanel = () => {
  const panelRef = useRef();
  const activeChapterRef = useRef(0);

  const { chapter } = useControls({
    chapter: { value: 0, min: 0, max: 4, step: 1 },
  });

  const [activeChapter, setActiveChapter] = useAtom(activeChapterAtom);
  const ActiveChapterComponent = CHAPTERS[activeChapter] ?? Chapter01;


  useGSAP(() => {
  const tl = gsap.timeline();

  tl.to(panelRef.current.rotation, {
    y: chapter * Math.PI,
    duration: 4,
    ease: "power3.inOut",
  }, 0);

  tl.to(activeChapterRef.current.scale, {
    x: 0, y: 0, z: 0,
    duration: 2,
    ease: "power2.in",
  }, 0);

  tl.call(() => setActiveChapter(chapter), null, 2);

  tl.to(activeChapterRef.current.scale, {
    x: 1, y: 1, z: 1,
    duration: 2,
    ease: "back.out(1.6)",
  }, 2.2);

}, [chapter]);

  return (
    <group position={[0, 0.5, -0.45]}>
      <mesh>
        <boxGeometry args={[2.7, 2.7, 0.1]} />
        <meshStandardMaterial color="#000" metalness={0.6} />
      </mesh>

      <RoundedBox
        ref={panelRef}
        args={[2.5, 2.5, 0.11]}
        position={[0, 0, 0]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color="#594e40" roughness={0.4} />
      </RoundedBox>

      <group ref={activeChapterRef} position={[0, 0, 0.5]}>
        <ActiveChapterComponent />
      </group>
      
    </group>
  );
};
