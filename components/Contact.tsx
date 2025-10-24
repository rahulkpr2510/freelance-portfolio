"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { TeamMemberCard } from "./TeamMemberCard";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const team = [
    {
      name: "Rahul Kapoor",
      role: "Full-Stack Web & Mobile Developer",
      initials: "RK",
      github: "https://github.com/rahulkpr2510",
      linkedin: "https://www.linkedin.com/in/rahulkpr2510",
      website: "https://rahul-kapoor.in",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget; // save reference
    const fd = new FormData(form);

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      message: fd.get("message"),
      nda: fd.get("nda") === "on", // ✅ true if checked
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("✅ Message sent — I’ll reply soon.");
        form.reset();
      } else {
        setStatus(data.error || "⚠️ Failed to send. Try again later.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("🌐 Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 py-20">
      {/* 🔹 Background - soft consistent theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(63,63,70,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <SectionTitle
        icon={undefined}
        label="Let’s build your next thing"
        kicker="Contact"
      />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Left: Inquiry Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 shadow-sm backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white">Project Inquiry</h3>
          <p className="text-zinc-400 mt-2 text-sm">
            Share a few details and I’ll get back with a scoped plan.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {["name", "email", "company"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={
                  field === "company"
                    ? "Company / Project (optional)"
                    : `Your ${field}`
                }
                className="w-full rounded-md px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 
                           focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-500/40 transition-all"
              />
            ))}

            <textarea
              name="message"
              rows={5}
              placeholder="Briefly describe what you want to build."
              className="w-full rounded-md px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 
                         focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-500/40 transition-all"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  className="accent-fuchsia-500"
                />
                <span>I’d like an NDA</span>
              </label>

              <button
                disabled={loading}
                type="submit"
                className="px-4 py-2 rounded-md border border-zinc-700 text-sm text-zinc-200 hover:border-fuchsia-400/40 hover:text-fuchsia-300 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status && (
              <motion.div
                className="text-sm text-zinc-300 mt-2"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Right: Team + Stats + Discovery */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="space-y-6"
        >
          {/* Team Members */}
          <div className="grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-zinc-800 p-5 bg-zinc-950/40">
              <div className="text-xs text-zinc-400">Avg. reply</div>
              <div className="font-medium text-white">&lt; 2 hours</div>
            </div>
            <div className="rounded-lg border border-zinc-800 p-5 bg-zinc-950/40">
              <div className="text-xs text-zinc-400">Availability</div>
              <div className="font-medium text-white">
                Taking 3 new projects
              </div>
            </div>
          </div>

          {/* Discovery Call CTA */}
          <motion.div
            className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  15-min Discovery Call
                </div>
                <div className="text-xs text-zinc-400">
                  Quick chat to explore fit & scope
                </div>
              </div>
              <a
                href="https://calendly.com/rahulkpr2510/15min"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-md border border-zinc-700 text-sm text-zinc-300 hover:border-fuchsia-400/40 hover:text-fuchsia-300 transition-all"
              >
                Book
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
