// components/Stack.tsx
"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const TECH = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn"],
  backend: ["Node.js", "Express", "Postgres", "Prisma", "GraphQL"],
  mobile: ["React Native", "Expo", "EAS"],
  devops: ["Docker", "Vercel", "AWS", "CI/CD"],
};

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

export default function Stack() {
  return (
    <section id="stack" className="relative max-w-6xl mx-auto px-4 py-20">
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

      {/* Section Title */}
      <SectionTitle icon={Cpu} label="Tech Stack" kicker="Tools I ship with" />

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {Object.entries(TECH).map(([k, list]) => (
          <motion.div
            key={k}
            whileHover={{
              scale: 1.03,
              y: -6,
              borderColor: "rgba(236,72,153,0.4)",
              boxShadow: "0px 10px 35px rgba(236,72,153,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 flex flex-col backdrop-blur"
          >
            {/* Category Title */}
            <div className="uppercase tracking-widest text-xs font-medium mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
              {k}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {list.map((t, i) => (
                <motion.div
                  key={t}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-zinc-800/70 border border-zinc-700 text-zinc-300 px-2 py-0.5 rounded-md text-xs hover:border-fuchsia-400/40 hover:text-fuchsia-300 transition-colors">
                    {t}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Progress + Note */}
            <div className="mt-auto">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Progress value={85} className="h-2" />
              </motion.div>
              <p className="text-xs text-zinc-500 mt-2">
                Battle-tested in production
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
