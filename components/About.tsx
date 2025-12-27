import Image from "next/image";
import Partners from "./Partners";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-4xl">
            <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
              Bloomhouse is a digital design studio crafting timeless experiences.
              <span className="text-zinc-500 block mt-2">
                Less noise, more signal.
              </span>
            </h2>
          </div>
          
          <div className="w-full lg:w-[800px] shrink-0 pb-2">
            <Partners />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Text Content - Bloomhouse Focus */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                Bloomhouse is a specialized digital design studio that operates on a simple philosophy: 
                direct connection yields the best results. We cut through the layers of bureaucracy typical 
                of larger agencies to deliver uncompromising quality and agility.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                When you work with Bloomhouse, you're not passed down to a junior designer or lost in a chain of command. 
                You work directly with the creative lead—from the first sketch to the final line of code. This ensures 
                a vision that stays pure throughout the entire process.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light text-base">
                We believe in less noise, more signal. Every pixel, every interaction, every decision is intentional. 
                Our approach combines minimal design principles with cutting-edge technology to craft digital experiences 
                that transcend boundaries and elevate brands.
              </p>
            </div>

            {/* Stats / details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
              <div>
                <span className="block text-3xl font-light text-white mb-1">100%</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">Dedication</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">1:1</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">Collaboration</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">∞</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">Possibilities</span>
              </div>
              <div>
                <span className="block text-3xl font-light text-white mb-1">0</span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">Compromise</span>
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
                <p className="text-sm text-zinc-500">Founder & Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
