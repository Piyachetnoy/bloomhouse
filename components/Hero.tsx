"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
    alt: "Minimal architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    alt: "Mountain landscape",
  },

  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    alt: "Modern office",
  },
];

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

function useTextScramble(text: string, delay: number = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let iteration = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }

        iteration += 1 / 2;
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return { displayText, isComplete };
}

export default function Hero() {
  const line1 = useTextScramble("We craft digital", 300);
  const line2 = useTextScramble("transcend boundaries.", 600);

  return (
    <section className="relative h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Typography section */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
          <h1 className="font-light tracking-tight text-white leading-[0.9] select-none">
            <span 
              className="block text-[clamp(2.5rem,12vw,9rem)] opacity-0 animate-[fadeIn_0.6s_ease_forwards_0.3s]"
            >
              {line1.displayText}
            </span>
            <span 
              className="block text-[clamp(2.5rem,12vw,9rem)] text-white opacity-0 animate-[fadeIn_0.6s_ease_forwards_0.6s]"
            >
              {line2.displayText}
            </span>
          </h1>
        </div>

        {/* Horizontal image gallery */}
        <div className="relative pb-12 opacity-0 animate-[slideUp_0.8s_ease_forwards_1.8s]">
          {/* Static image gallery */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 group"
              >
                <div className="relative w-[280px] md:w-[320px] aspect-4/3 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 320px"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-8 left-8 w-16 h-px bg-zinc-700 opacity-0 animate-[fadeIn_0.6s_ease_forwards_2s]" />
      <div className="absolute top-8 left-8 w-px h-16 bg-zinc-700 opacity-0 animate-[fadeIn_0.6s_ease_forwards_2s]" />
      
      <div className="absolute bottom-8 right-8 w-16 h-px bg-zinc-700 opacity-0 animate-[fadeIn_0.6s_ease_forwards_2s]" />
      <div className="absolute bottom-8 right-8 w-px h-16 bg-zinc-700 opacity-0 animate-[fadeIn_0.6s_ease_forwards_2s]" />

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

