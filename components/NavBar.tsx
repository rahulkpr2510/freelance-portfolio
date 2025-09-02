"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket, MousePointerClick } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

const NAV = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Stack", href: "#stack" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-fuchsia-400/40 transition-colors">
              <Rocket className="h-4 w-4 text-zinc-300 group-hover:text-fuchsia-400 transition-colors" />
            </span>
            <span className="font-medium tracking-tight group-hover:text-fuchsia-400 transition-colors">
              ByteWave | Web & App
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm text-zinc-300 hover:text-white transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gradient-to-r from-primary to-fuchsia-500 after:rounded-full after:transition-all hover:after:w-full"
              >
                {n.name}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className="gap-2 text-sm border-zinc-700 hover:border-fuchsia-400/40 hover:text-fuchsia-400"
            >
              <a href="#contact">
                <MousePointerClick className="h-4 w-4" /> Hire Us
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <VisuallyHidden>
                <DialogTitle>Mobile navigation</DialogTitle>
              </VisuallyHidden>
              {/* Trigger button */}
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-700 hover:border-fuchsia-400/40 transition-colors"
                >
                  <Menu className="h-4 w-4 text-zinc-300" />
                </Button>
              </SheetTrigger>

              {/* Drawer Content */}
              <SheetContent
                side="right"
                className="bg-zinc-950/95 border-l border-zinc-800 backdrop-blur-xl p-6"
              >
                {/* Navigation Links */}
                <nav className="mt-8 flex flex-col gap-3">
                  {NAV.map((n, i) => (
                    <a
                      key={n.href}
                      href={n.href}
                      className="text-base text-zinc-300 hover:text-white transition-colors"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {n.name}
                    </a>
                  ))}

                  {/* CTA button */}
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-zinc-700 hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                  >
                    <a href="#contact">🚀 Hire Us</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
