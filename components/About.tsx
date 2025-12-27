import Image from "next/image";
import Partners from "./Partners";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-4xl">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
              {dict.about.label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
              {dict.about.title}
              <span className="text-zinc-500 block mt-2">
                {dict.about.subtitle}
              </span>
            </h2>
          </div>
          
          <div className="w-full md:w-[400px] shrink-0 pb-2">
            <Partners />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Text Content - Bloomhouse Focus */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                {dict.about.description1}
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                {dict.about.description2}
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                {dict.about.description3}
              </p>
            </div>

            {/* Stats / details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
              <div>
                <span className="block text-3xl font-light text-white mb-1">100%</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">{dict.about.stats.dedication}</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">1:1</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">{dict.about.stats.collaboration}</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">∞</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">{dict.about.stats.possibilities}</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">0</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">{dict.about.stats.compromise}</span>
              </div>
            </div>
          </div>

          {/* Founder Info Sidebar - Smaller */}
          <div className="lg:col-span-4 pt-8 lg:pt-0">
            <div className="space-y-6">
              <div className="relative group w-full aspect-square max-w-[200px] mx-auto lg:mx-0">
                <div className="relative h-full w-full overflow-hidden bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                    alt="Founder of Bloomhouse"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 200px, 200px"
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white font-medium tracking-wide mb-1">Piyachetnoy</p>
                <p className="text-sm text-zinc-500">{dict.about.founder}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
