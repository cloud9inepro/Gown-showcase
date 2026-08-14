import { Html } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter"
import { useState, useEffect } from "react";
import gsap from "gsap";

export const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const obj = {value: 0};

        gsap.to(obj, {
            value: 100,
            duration: 0,
            ease: "power2.inOut",
            onUpdate: () => {
                setProgress(Math.floor(obj.value))
            },
        });
    }, []);

    return(
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                <h1 className="text-4xl font-light tracking-wider">
                    <Typewriter
                        words={[
                            "Initializing",
                            "Loading....",
                            // "Applying Paint...",
                            // "Preparing Interior...",
                            "Ready."
                        ]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={700}

                    />
                </h1>
                    
                {/* <div className="mt-6 w-80 h-[2px] bg-gray-700 ">
                    <div className="h-full bg-white"
                        style={{width: `${progress}%`}}
                    />
                    <p className="mt-3">
                        {progress}%
                    </p>
                </div> */}
            </div>
        
    )
}