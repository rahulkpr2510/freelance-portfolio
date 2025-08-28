// components/Process.tsx
"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { step: "Discovery", desc: "Goals, scope, timeline and success metrics." },
  { step: "Design", desc: "Flows, wireframes, and prototypes." },
  { step: "Build", desc: "Iterative sprints, tests, and previews." },
  { step: "Launch", desc: "Monitoring, handover, and post-launch support." },
  { step: "Scale", desc: "Enhancements, new features, and optimizations." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Process() {
  return (
    <section id="process" className="relative max-w-7xl mx-auto px-4 py-20">
      {/* 🔹 Consistent Background */}
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
        icon={BadgeCheck}
        label="Process"
        kicker="Clarity from day one"
      />

      {/* Steps Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14"
      >
        {STEPS.map((s, i) => (
          <motion.div
            key={s.step}
            whileHover={{
              scale: 1.04,
              y: -4,
              borderColor: "rgba(236,72,153,0.4)", // fuchsia on hover
              boxShadow: "0px 10px 35px rgba(236,72,153,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 flex flex-col justify-between backdrop-blur"
          >
            {/* Step number */}
            <motion.div
              className="text-xs font-medium text-zinc-400 mb-2"
              whileHover={{ scale: 1.1 }}
            >
              Step {i + 1}
            </motion.div>

            {/* Step Title */}
            <div className="font-semibold text-lg bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
              {s.step}
            </div>

            {/* Step Description */}
            <div className="text-sm text-zinc-400 mt-1">{s.desc}</div>

            {/* Flow connector (optional but cool) */}
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-[1px] bg-gradient-to-r from-fuchsia-500/50 to-transparent" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
