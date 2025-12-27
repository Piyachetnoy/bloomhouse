"use client";

import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

type WorkItem = {
  id: string;
  title: string;
  dictKey: "skinvolve" | "maisonOliva" | "veltoStudio";
  image: string;
  link: string;
  size: "large" | "medium" | "tall";
};

const works: WorkItem[] = [
  {
    id: "skinvolve",
    title: "Skinvolve",
    dictKey: "skinvolve",
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=1200&h=800&fit=crop&q=80",
    link: "/works/skinvolve",
    size: "large"
  },
  {
    id: "maison-oliva",
    title: "Maison Oliva",
    dictKey: "maisonOliva",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=1000&fit=crop",
    link: "/works/maison-oliva",
    size: "tall"
  },
  {
    id: "velto-studio",
    title: "Velto Studio",
    dictKey: "veltoStudio",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop",
    link: "/works/velto-studio",
    size: "medium"
  }
];

interface WorksProps {
  dict: Dictionary;
  lang: Locale;
}

export default function Works({ dict, lang }: WorksProps) {
  return (
    <section id="works" className="w-full py-20 bg-[#1A1A1A] text-white">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
              {dict.works.label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
              {dict.works.title} <span className="text-zinc-500">{dict.works.purpose}</span>.
            </h2>
          </div>
          <Link 
            href={`/${lang}/works`}
            className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors duration-300"
          >
            {dict.works.viewAll}
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Card 1: Large (Spans 2 columns on desktop) */}
          <Link 
            href={`/${lang}${works[0].link}`}
            className="group relative md:col-span-2 row-span-1 rounded-sm overflow-hidden block"
          >
            <Image
              src={works[0].image}
              alt={works[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
               <div className="mt-auto">
                 <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-3">
                  {dict.works.items[works[0].dictKey].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-3">
                  {works[0].title}
                </h3>
                <p className="text-zinc-300 font-light text-sm tracking-wide max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dict.works.items[works[0].dictKey].description}
                </p>
               </div>
            </div>
            
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
          </Link>

          {/* Card 2: Tall (Spans 1 column) */}
          <Link 
            href={`/${lang}${works[1].link}`}
            className="group relative md:col-span-1 row-span-1 rounded-sm overflow-hidden block"
          >
            <Image
              src={works[1].image}
              alt={works[1].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
               <div className="mt-auto">
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-3">
                    {dict.works.items[works[1].dictKey].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-3">
                    {works[1].title}
                  </h3>
                   <p className="text-sm text-zinc-300 font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {dict.works.items[works[1].dictKey].description}
                  </p>
               </div>
            </div>
            
             <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
          </Link>

          {/* Card 3: Medium (Spans 3 columns) */}
           <Link 
            href={`/${lang}${works[2].link}`}
            className="group relative md:col-span-3 row-span-1 rounded-sm overflow-hidden block"
          >
            <Image
              src={works[2].image}
              alt={works[2].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
               <div className="mt-auto">
                 <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-3">
                  {dict.works.items[works[2].dictKey].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-3">
                  {works[2].title}
                </h3>
                 <p className="text-zinc-300 font-light text-sm tracking-wide max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dict.works.items[works[2].dictKey].description}
                </p>
               </div>
            </div>
            
             <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
