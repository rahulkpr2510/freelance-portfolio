import React from "react";
import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950/80 backdrop-blur">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950 to-black" />

      <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-400">
        {/* Left side: Logo + copyright */}
        <div className="flex items-center gap-2 group">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-fuchsia-400/40 transition-colors">
            <Rocket className="h-4 w-4 text-zinc-400 group-hover:text-fuchsia-400 transition-colors" />
          </span>
          <span className="text-zinc-500 group-hover:text-zinc-300 transition">
            © {new Date().getFullYear()} Rahul Kapoor. All rights reserved.
          </span>
        </div>

        {/* Right side: Nav links */}
        <div className="flex items-center gap-5">
          {[
            { name: "Services", href: "#services" },
            { name: "Work", href: "#work" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-gradient-to-r from-primary to-fuchsia-500 after:rounded-full after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
