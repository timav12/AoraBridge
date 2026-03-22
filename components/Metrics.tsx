"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "80%", label: "Cost reduction vs wire" },
  { value: "<5 min", label: "Average settlement time" },
  { value: "90+", label: "Countries supported" },
  { value: "2 weeks", label: "Integration time" },
];

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0F172A] mb-16">
          Built for scale
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`text-center p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm ${
                visible ? "animate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">
                {m.value}
              </div>
              <div className="text-sm text-[#475569] font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
