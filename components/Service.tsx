"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type ServiceItem = {
  id: string;
  titleKey: "web" | "line" | "ios";
  image: string;
};

const services: ServiceItem[] = [
  {
    id: "web",
    titleKey: "web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
  {
    id: "line",
    titleKey: "line",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    id: "ios",
    titleKey: "ios",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  }
];

interface ServiceProps {
  dict: Dictionary;
}

export default function Service({ dict }: ServiceProps) {
  const [openId, setOpenId] = useState<string | null>("web");

  return (
    <section id="service" className="w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Sticky Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
                {dict.service.label}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white mb-6">
                {dict.service.title}
              </h2>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="lg:col-span-9">
            <div className="border-t border-white/10">
              {services.map((service) => {
                const serviceData = dict.service.items[service.titleKey];
                return (
                  <div key={service.id} className="border-b border-white/10">
                    <button
                      onClick={() => setOpenId(openId === service.id ? null : service.id)}
                      className="w-full py-10 flex items-start md:items-center justify-between group text-left transition-colors hover:text-white"
                    >
                      <span className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-300 ${openId === service.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {serviceData.title}
                      </span>
                      <span className={`text-2xl md:text-3xl font-light transition-transform duration-300 ml-4 ${openId === service.id ? 'rotate-45 text-white' : 'text-zinc-500 group-hover:text-white'}`}>
                        +
                      </span>
                    </button>
                    
                    <div 
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                        openId === service.id ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
                          {/* Content */}
                          <div className="space-y-8">
                            <p className="text-zinc-400 font-light leading-relaxed text-base">
                              {serviceData.description}
                            </p>
                            <ul className="space-y-4">
                              {serviceData.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-center text-base text-zinc-300 font-light">
                                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-4" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Image */}
                          <div className="relative aspect-video md:aspect-4/3 rounded-sm overflow-hidden bg-zinc-900">
                            <Image
                              src={service.image}
                              alt={serviceData.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
