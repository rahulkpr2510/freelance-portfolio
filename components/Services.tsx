// components/Services.tsx
"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Apps",
    desc: "MVPs, dashboards, and production-grade web platforms with monitoring & payments.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "React Native apps (iOS/Android), offline sync, push notifications and store pipelines.",
  },
  {
    icon: Server,
    title: "DevOps & Infra",
    desc: "Containers, CI/CD, observability and cost-optimized deployments.",
  },
  {
    icon: Sparkles,
    title: "Product & Growth",
    desc: "Analytics, onboarding funnels, performance audits to increase retention.",
  },
];

// Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative max-w-6xl mx-auto px-4 py-20">
      {/* 🔹 Background for consistency */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(63,63,70,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          label="Services"
          kicker="What you can hire us for"
          icon={Globe}
        />
        <p className="text-zinc-400 max-w-3xl">
          We focus on delivering measurable product outcomes: lower load times,
          higher conversion, and reliable releases. Pick a scope below — we’ll
          handle the rest.
        </p>
      </div>

      {/* Services grid with stagger animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 items-stretch"
      >
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0 12px 40px rgba(236,72,153,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="p-6 flex flex-col justify-between h-full border border-zinc-800 bg-zinc-950/60 hover:border-fuchsia-500/40 transition-all rounded-2xl backdrop-blur">
                {/* Icon + Text */}
                <div className="flex flex-col gap-4">
                  {/* Icon wrapper */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl grid place-items-center bg-gradient-to-br from-fuchsia-500/20 to-primary/20 text-fuchsia-400 shadow-md"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-lg">{s.title}</div>
                    <div className="text-sm text-zinc-400 mt-1">{s.desc}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="w-full relative overflow-hidden border-zinc-700 hover:border-fuchsia-500/40"
                    >
                      <a href="#contact">
                        <span className="relative z-10">Get this</span>
                        {/* Shimmer overlay */}
                        <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
