"use client";

import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaSpotify, FaSlack } from "react-icons/fa";

const partners = [
  { name: "Apple", icon: FaApple },
  { name: "Google", icon: FaGoogle },
  { name: "Amazon", icon: FaAmazon },
  { name: "Microsoft", icon: FaMicrosoft },
  { name: "Spotify", icon: FaSpotify },
  { name: "Slack", icon: FaSlack },
];

export default function Partners() {
  return (
    <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className="flex gap-12 animate-infinite-scroll w-max py-2">
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex items-center gap-4 text-zinc-600 hover:text-white transition-colors duration-300">
            <partner.icon className="text-4xl md:text-5xl" />
            <span className="text-xl md:text-2xl font-medium tracking-tight">{partner.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

