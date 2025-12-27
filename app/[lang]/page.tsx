import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header dict={dict} lang={lang as Locale} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Problems dict={dict} />
      <Service dict={dict} />
      <Works dict={dict} lang={lang as Locale} />
      <Pricing dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </div>
  );
}

