// components/Testimonials.tsx
"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "EduSaaS",
    role: "Founder, EdTech Startup",
    quote:
      "The team transformed early concepts into a fully functional product. Their structured process, clear communication, and commitment to deadlines made collaboration seamless.",
  },
  {
    name: "HealthTech Labs",
    role: "Product Manager",
    quote:
      "Working with the team felt effortless. From mobile optimization to performance improvements, they delivered results that significantly boosted user engagement.",
  },
  {
    name: "LogiTrack",
    role: "CTO, Logistics Platform",
    quote:
      "Their focus on reliability and scalability stood out. The realtime dashboards and zero-downtime deployments became a backbone for our operations.",
  },
];

// Motion effects
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative max-w-6xl mx-auto px-4 py-20"
    >
      {/* 🔹 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(63,63,70,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Section Header */}
      <SectionTitle
        icon={Quote}
        label="What partners say"
        kicker="Team impact"
      />

      {/* Testimonials Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            whileHover={{
              scale: 1.03,
              y: -5,
              borderColor: "rgba(236,72,153,0.4)",
              boxShadow: "0px 10px 30px rgba(236,72,153,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="relative bg-zinc-950/60 border border-zinc-800 rounded-2xl h-full backdrop-blur">
              <CardContent className="p-6 flex flex-col gap-5">
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-4 right-4 h-6 w-6 text-zinc-700/40 group-hover:text-fuchsia-400 transition-colors" />

                {/* Testimonial Quote */}
                <p className="text-zinc-300 leading-relaxed italic relative z-10">
                  “{t.quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-0.5 rounded-full bg-gradient-to-r from-primary to-fuchsia-500"
                  >
                    <Avatar className="bg-zinc-900 border border-zinc-800">
                      <AvatarFallback className="text-sm font-medium text-white">
                        {t.name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs text-zinc-400">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
