"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

const services: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    description: "We design and develop modern websites that are not only beautiful — they work. From high-converting landing pages to eCommerce, we build responsive, high-performance websites tailored to your goals.",
    features: [
      "UI/UX Design",
      "Webflow, Shopify, Framer",
      "Responsive Design",
      "CMS Integration"
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
  {
    id: "line",
    title: "Line Automation",
    description: "Streamline your customer communication with intelligent Line automation. We build custom chatbots and workflow automations that save time and enhance user engagement.",
    features: [
      "Chatbot Development",
      "CRM Integration",
      "Automated Responses",
      "Rich Menu Design"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    id: "ios",
    title: "iOS Application",
    description: "Native iOS applications crafted for performance and user experience. We leverage the latest Swift technologies to build intuitive apps that stand out in the App Store.",
    features: [
      "Native Development",
      "Swift & SwiftUI",
      "App Store Optimization",
      "Complex Integrations"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  }
];

export default function Service() {
  const [openId, setOpenId] = useState<string | null>("web");

  return (
    <section id="service" className="w-full py-20 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Sticky Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white mb-6">
                What we do
              </h2>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="lg:col-span-9">
            <div className="border-t border-white/10">
              {services.map((service) => (
                <div key={service.id} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenId(openId === service.id ? null : service.id)}
                    className="w-full py-10 flex items-start md:items-center justify-between group text-left transition-colors hover:text-white"
                  >
                    <span className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-300 ${openId === service.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                      {service.title}
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
                            {service.description}
                          </p>
                          <ul className="space-y-4">
                            {service.features.map((feature, idx) => (
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
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
