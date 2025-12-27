"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

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

function LanguageSwitcher({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  
  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-2">
      <Link
        href={switchLocale('th')}
        className={`text-xs font-medium tracking-wider transition-colors ${
          lang === 'th' ? 'text-white' : 'text-white/50 hover:text-white/80'
        }`}
      >
        {dict.languageSwitcher.th}
      </Link>
      <span className="text-white/30">|</span>
      <Link
        href={switchLocale('en')}
        className={`text-xs font-medium tracking-wider transition-colors ${
          lang === 'en' ? 'text-white' : 'text-white/50 hover:text-white/80'
        }`}
      >
        {dict.languageSwitcher.en}
      </Link>
    </div>
  );
}

interface HeaderProps {
  dict: Dictionary;
  lang: Locale;
}

export default function Header({ dict, lang }: HeaderProps) {
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
          <Link href={`/${lang}`} className="group relative z-50">
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-white mix-blend-difference overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                BLOOMHOUSE
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <NavLink href="#about" label={dict.header.about} />
            <NavLink href="#service" label={dict.header.service} />
            <NavLink href="#works" label={dict.header.works} />
            <NavLink href="#problems" label={dict.header.problems} />
            <NavLink href="#pricing" label={dict.header.pricing} />
            <NavLink href="#contact" label={dict.header.contact} />
            
            {/* Language Switcher */}
            <LanguageSwitcher lang={lang} dict={dict} />
            
            {/* CTA Button */}
            <Button 
              href="#contact"
              variant="outline"
              size="default"
              className="ml-4"
            >
              {dict.header.startProject}
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
      <div className={`absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${scrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </header>
  );
}
