import Link from 'next/link';

export default function Problems() {
  return (
    <section id="problems" className="w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
            Challenges
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight max-w-4xl text-white">
            The gap between <span className="text-zinc-500">potential</span> and <span className="text-zinc-500">reality</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Statistic Infographic */}
          <div className="group flex flex-col justify-between border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 p-8">
            <div>
              <div className="mb-10 flex items-end gap-3 h-40 pb-4 border-b border-white/10">
                {/* Abstract Bar Chart Graphic - Minimal/Dark */}
                <div className="w-full flex items-end justify-between h-full gap-2">
                    <div className="w-1/5 bg-zinc-800 h-[40%] transition-all duration-700 group-hover:bg-zinc-700"></div>
                    <div className="w-1/5 bg-zinc-700 h-[60%] transition-all duration-700 group-hover:bg-zinc-600"></div>
                    <div className="w-1/5 bg-zinc-600 h-[30%] transition-all duration-700 group-hover:bg-zinc-500"></div>
                    <div className="w-1/5 bg-white h-[85%] relative">
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wider text-white">85%</div>
                    </div>
                    <div className="w-1/5 bg-zinc-800 h-[50%] transition-all duration-700 group-hover:bg-zinc-700"></div>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-light tracking-tight text-white">
                  85%
                </span>
                <span className="text-sm tracking-widest uppercase text-zinc-500">
                  Efficiency Gap
                </span>
              </div>
              
              <h3 className="text-xl font-light text-zinc-200 mb-4">
                The Cost of Disconnection
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Research indicates that fragmented workflows result in significant operational loss. We architect ecosystems that restore continuity.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/5">
              <a 
                href="https://example.com/research-paper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm tracking-widest uppercase text-zinc-500 hover:text-white transition-colors duration-300 group/link"
              >
                <span>Read Research</span>
                <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Emotional/Abstract */}
          <div className="group flex flex-col justify-between border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 p-8">
            <div>
              <div className="mb-10 h-40 w-full flex items-center justify-center border-b border-white/10 relative overflow-hidden">
                 {/* Abstract visual - Geometric/Minimal */}
                 <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 160">
                        <path d="M0 160 Q 200 0 400 160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                        <path d="M0 160 Q 200 40 400 160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-500" />
                        <path d="M0 160 Q 200 80 400 160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-700" />
                    </svg>
                 </div>
                 <div className="z-10 text-center">
                    <span className="block text-2xl mb-2">∞</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">The Paradox</span>
                 </div>
              </div>

              <h3 className="text-xl font-light text-zinc-200 mb-4">
                More Data, Less Clarity?
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                In an era of infinite information, clarity is the rarest resource. We don't just visualize data; we extract the narrative, turning noise into signal.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/5">
              <span className="text-zinc-600 text-xs tracking-widest uppercase">
                Signal over noise
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
