import { FaLine } from "react-icons/fa";
import { Button } from "./ui/Button";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface ContactProps {
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="w-full py-20 bg-[#1A1A1A] text-white">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
            {dict.contact.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
            {dict.contact.title} <span className="text-zinc-500">{dict.contact.conversation}</span>.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed font-light">
            {dict.contact.replyTime}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-12 lg:gap-24">
          {/* Contact Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-500">
                  {dict.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={dict.contact.form.namePlaceholder}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 h-12 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs uppercase tracking-wider text-zinc-500">
                  {dict.contact.form.company} <span className="text-zinc-700 normal-case tracking-normal">{dict.contact.form.companyOptional}</span>
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder={dict.contact.form.companyPlaceholder}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 h-12 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-wider text-zinc-500">
                  {dict.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder={dict.contact.form.phonePlaceholder}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 h-12 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-500">
                  {dict.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={dict.contact.form.emailPlaceholder}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 h-12 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-500">
                {dict.contact.form.message} <span className="text-zinc-700 normal-case tracking-normal">{dict.contact.form.messageOptional}</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={dict.contact.form.messagePlaceholder}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                size="default"
                className="gap-2"
              >
                {dict.contact.form.send}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>
          </form>

          {/* LINE CTA & Additional Info */}
          <div className="flex flex-col justify-center h-full space-y-10 lg:pl-10 lg:border-l border-zinc-800">
            <div>
              <h3 className="text-xl font-light mb-4 text-white">{dict.contact.directLine.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light mb-8 max-w-md">
                {dict.contact.directLine.description}
              </p>

              <Button
                href="https://line.me/"
                variant="line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gap-3"
              >
                <FaLine className="w-6 h-6" />
                {dict.contact.directLine.addFriend}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
