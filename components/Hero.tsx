// components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  ShieldCheck,
  TimerReset,
  Handshake,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const METRICS = [
  { label: "Avg. Largest Contentful Paint", value: "<1.5s" },
  { label: "Core Web Vitals Pass", value: "98%" },
  { label: "Uptime (12m)", value: "99.95%" },
  { label: "Apps Shipped", value: "5+" },
];

const HERO_TAGS = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "React Native",
  "Vercel",
  "AWS",
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 🔹 Layered Background (gradient + grid + noise + animated blobs) */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(63,63,70,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🔹 Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Column */}
          <motion.div className="space-y-6">
            <Badge className="hover:scale-105 transition-transform">
              Full-Stack MERN • React Native • DevOps
            </Badge>
            <motion.h1
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              We build{" "}
              <motion.span
                className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                fast, scalable
              </motion.span>{" "}
              web & mobile apps that move metrics.
            </motion.h1>
            <p className="text-zinc-300 md:text-lg">
              From idea to launch: auth, payments, analytics, CI/CD, and
              performance baked in. No fluff. Just results.
            </p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild className="gap-2">
                  <a href="#contact">
                    <Handshake className="h-4 w-4" /> Book a Free Consult
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-zinc-700"
                >
                  <a href="#work">
                    <ExternalLink className="h-4 w-4" /> See Projects
                  </a>
                </Button>
              </motion.div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-green-400" /> 2-week
                post-launch support on MVPs
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-center">
              {METRICS.map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 p-4 bg-zinc-950/50 backdrop-blur"
                >
                  <motion.p
                    className="text-lg md:text-2xl font-semibold tabular-nums"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {m.value}
                  </motion.p>
                  <p className="text-xs text-zinc-400">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (Features Card) */}
          <motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-zinc-950/60 border-zinc-800 hover:border-fuchsia-600/40 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-fuchsia-400 animate-pulse" />{" "}
                    What we bring
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Performance",
                        desc: "Core Web Vitals, edge caching, image/CDN hygiene.",
                      },
                      {
                        title: "Security",
                        desc: "Auth, RBAC, rate-limit & OWASP checks.",
                      },
                      {
                        title: "DevOps",
                        desc: "CI/CD, monitoring, zero-downtime releases.",
                      },
                      {
                        title: "Mobile",
                        desc: "RN apps with offline sync & notifications.",
                      },
                    ].map((i) => (
                      <motion.div
                        key={i.title}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-xl border border-zinc-800 p-4 bg-zinc-900/40 hover:bg-zinc-900/70 transition"
                      >
                        <p className="font-medium">{i.title}</p>
                        <p className="text-sm text-zinc-400">{i.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <Separator className="bg-zinc-800" />
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-400">
                      Availability:{" "}
                      <span className="text-zinc-200 font-medium">
                        Taking 1 new project
                      </span>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="outline"
                            className="border-green-600/40 text-green-400 hover:scale-105 transition-transform"
                          >
                            Response{" "}
                            <TimerReset className="h-3.5 w-3.5 ml-1 inline" />
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-900 border-zinc-800 text-white mb-2">
                          Avg. first reply &lt; 2 hours
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Marquee */}
        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30">
          <motion.div
            className="flex gap-8 px-6 py-3 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-8">
                {HERO_TAGS.map((t, i) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={`${loopIndex}-${i}`}
                    className="inline-flex items-center gap-2 px-4 text-zinc-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400/80" />{" "}
                    {t}
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
