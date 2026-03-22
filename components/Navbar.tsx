"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Platforms", href: "#for-platforms" },
  { label: "Pricing", href: "#metrics" },
  { label: "API Docs", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 text-xl tracking-tight">
            <span className="font-extrabold text-[#0F172A]">Aora</span>
            <span className="font-extrabold gradient-text">Bridge</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="gradient-bg text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#475569]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[#E2E8F0]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-2 text-sm font-medium text-[#475569] hover:text-[#0F172A]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="block mt-2 mx-2 gradient-bg text-white text-sm font-semibold px-6 py-2.5 rounded-full text-center"
              onClick={() => setOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
