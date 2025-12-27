"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors"
    >
      <span className="tabular-nums">{label}</span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        scrolled ? "py-4 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Bold Logo */}
          <Link href="/" className="group relative z-50">
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-zinc-400 mix-blend-difference overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                BLOOMHOUSE
              </span>
              <span className="absolute top-[-99%] left-[1%] block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-white">
                BLOOMHOUSE
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <NavLink href="#about" label="About" />
            <NavLink href="#service" label="Service" />
            <NavLink href="#works" label="Works" />
            <NavLink href="#problems" label="Problems" />
            <NavLink href="#pricing" label="Pricing" />
            <NavLink href="#contact" label="Contact" />
            
            {/* CTA Button */}
            <Button 
              href="#contact"
              variant="outline"
              size="default"
              className="ml-4"
            >
              Start Project
            </Button>
          </nav>

          {/* Mobile Menu Toggle (Bold Architectural Icon) */}
          <button className="md:hidden flex flex-col gap-2 group p-2">
            <span className="w-8 h-px bg-white transition-all duration-300 group-hover:w-12 group-hover:bg-zinc-400" />
            <span className="w-8 h-px bg-white transition-all duration-300 group-hover:w-6 group-hover:ml-auto group-hover:bg-zinc-400" />
          </button>
        </div>
      </div>
      
      {/* Decorative Line (Optional, matches Hero accents) */}
      <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${scrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </header>
  );
}
