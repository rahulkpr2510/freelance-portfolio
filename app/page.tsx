// app/page.tsx
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/20 selection:text-white">
      <NavBar />
      <main className="[&_section:not(:first-child)]:border-t [&_section:not(:first-child)]:border-zinc-900">
        <Hero />
        <Work />
        <Services />
        <Process />
        <Stack />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
