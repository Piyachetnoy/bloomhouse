import Link from "next/link";
import { Button } from "./ui/Button";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { href: "#about", labelKey: "about" as const },
    { href: "#service", labelKey: "service" as const },
    { href: "#works", labelKey: "works" as const },
    { href: "#problems", labelKey: "problems" as const },
    { href: "#pricing", labelKey: "pricing" as const },
    { href: "#contact", labelKey: "contact" as const },
  ];

  const socialLinks = [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Twitter / X" },
    { href: "#", label: "LinkedIn" },
  ];

  const legalLinks = [
    { href: "#", labelKey: "privacyPolicy" as const },
    { href: "#", labelKey: "termsOfService" as const },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative top line matching Header/Hero accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="px-6 md:px-12 lg:px-20">
        {/* Top Section: CTA and Main Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6">
              {dict.footer.cta} <br />
              <span className="text-zinc-400">{dict.footer.extraordinary}</span>
            </h2>
          </div>
          
          <Button 
            href="#contact"
            variant="outline"
            className="group"
          >
            {dict.footer.startProject}
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <Link href="/" className="block group">
              <h1 className="text-2xl font-light tracking-tight text-white mix-blend-difference mb-4">
                BLOOMHOUSE
              </h1>
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed font-light max-w-sm">
              {dict.footer.description}
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-12">
            {/* Sitemap */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500">{dict.footer.sitemap}</h3>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.labelKey}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      {dict.header[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500">{dict.footer.social}</h3>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500">{dict.footer.legal}</h3>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.labelKey}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      {dict.footer[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} BLOOMHOUSE. {dict.footer.allRights}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-zinc-500 uppercase tracking-wider">{dict.footer.systemsOperational}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
