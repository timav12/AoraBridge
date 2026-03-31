"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "80%", label: "cost reduction vs wire" },
  { value: "<5 min", label: "average settlement" },
  { value: "90+", label: "countries supported" },
  { value: "2 wks", label: "integration time" },
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
    <section id="metrics" className="py-24 md:py-28 px-6">
      <div className="max-w-[1120px] mx-auto">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a855f7] mb-4 text-center">
          By the Numbers
        </p>
        <h2 className="font-mono text-[32px] font-bold tracking-tight text-[#f0f0f0] mb-4 text-center leading-[1.2]">
          Payment Infrastructure Built to Scale With Your Platform
        </h2>
        <p className="text-base text-[#666] max-w-[560px] mx-auto mb-12 leading-relaxed text-center">
          Engineered to deliver from day one.
        </p>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`bg-[#141414] border border-[#1a1a1a] rounded-xl p-8 text-center ${
                visible ? "animate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-mono text-4xl md:text-[40px] font-bold text-[#a855f7] mb-2">
                {m.value}
              </div>
              <div className="font-mono text-xs text-[#666]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
