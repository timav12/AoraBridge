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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-[12px] border-b border-[#1a1a1a]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a href="#" className="font-mono font-bold text-lg text-white tracking-tight">
            Aora<span className="text-[#555] mx-0.5">/</span><span className="text-[#a855f7]">Bridge</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-mono text-[#666] hover:text-[#c8c8c8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="bg-[#a855f7] text-white font-mono font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#666]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[#1a1a1a]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-2 text-[13px] font-mono text-[#666] hover:text-[#c8c8c8]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="block mt-2 mx-2 bg-[#a855f7] text-white font-mono font-semibold text-[13px] px-5 py-2.5 rounded-lg text-center"
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
