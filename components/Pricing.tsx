// components/Pricing.tsx
"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const USD_TO_INR = 83; // adjust for live exchange later

const PACKAGES = [
  {
    name: "Landing Sprint",
    priceUSD: 119,
    period: "7–10 days",
    features: [
      "Conversion-first landing page",
      "CMS + analytics",
      "SEO basics & performance budget",
    ],
    cta: "Book Sprint",
  },
  {
    name: "MVP Launch",
    highlight: true,
    priceUSD: 499,
    period: "3–4 weeks",
    features: [
      "Full-stack web app",
      "CI/CD + staging",
      "Core Web Vitals optimization",
    ],
    cta: "Start MVP",
  },
  {
    name: "Mobile App Kit",
    priceUSD: 699,
    period: "3–4 weeks",
    features: [
      "React Native app (iOS/Android)",
      "Offline-first + notifications",
      "Store build pipelines",
    ],
    cta: "Build Mobile App",
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const formatPrice = (usd: number) => {
    if (currency === "USD") return `$${usd}`;
    return `₹${(usd * USD_TO_INR).toLocaleString("en-IN")}`;
  };

  return (
    <section id="pricing" className="relative max-w-6xl mx-auto px-4 py-20">
      {/* 🔹 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />
      </div>

      {/* Header + Currency Toggle */}
      <div className="flex items-center justify-between mb-12">
        <SectionTitle
          icon={Star}
          label="Pricing"
          kicker="Transparent & straightforward"
        />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={currency === "USD" ? "default" : "outline"}
            onClick={() => setCurrency("USD")}
          >
            USD
          </Button>
          <Button
            size="sm"
            variant={currency === "INR" ? "default" : "outline"}
            onClick={() => setCurrency("INR")}
          >
            INR
          </Button>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="grid md:grid-cols-3 gap-6">
        {PACKAGES.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            className="relative"
          >
            <Card
              className={`relative flex flex-col justify-between p-6 rounded-2xl border bg-zinc-950/60 backdrop-blur transition-all ${
                p.highlight
                  ? "border-fuchsia-400/40"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Highlight Ribbon */}
              {p.highlight && (
                <div className="absolute -top-3 right-4 text-xs bg-zinc-800 text-zinc-200 rounded-full px-3 py-1 border border-fuchsia-400/40">
                  Most Popular
                </div>
              )}

              <div className="relative z-10">
                {/* Package Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-400">
                      {p.period}
                    </div>
                    <div className="text-xl font-semibold">{p.name}</div>
                  </div>

                  {/* Animated Price */}
                  <motion.div
                    key={currency}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="text-xl font-bold bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent"
                  >
                    {formatPrice(p.priceUSD)}
                  </motion.div>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-zinc-300 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-400 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6 relative z-10">
                <Button
                  variant="outline"
                  className="w-full border-zinc-700 hover:border-fuchsia-400/40 hover:text-fuchsia-300 transition-all"
                >
                  {p.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-zinc-500 mt-6 text-center">
        Custom quotes for complex/enterprise scopes available on request.
      </p>
    </section>
  );
}
