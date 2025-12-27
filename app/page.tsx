import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Service from "@/components/Service";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Hero />
      <About />
      <Problems />
      <Service />
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
