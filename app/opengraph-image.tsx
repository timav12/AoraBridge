import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AoraBridge — Cross-border payroll. Instant.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          <span style={{ color: "#ffffff" }}>Aora</span>
          <span style={{ color: "#a855f7" }}>Bridge</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 32,
            color: "#c8c8c8",
            marginBottom: 12,
          }}
        >
          Cross-border payroll. Instant.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 20,
            color: "#666",
            marginBottom: 48,
          }}
        >
          Payment API for EoR, HRIS &amp; staffing platforms
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { label: "80% cost cut", bg: "rgba(168,85,247,0.12)", color: "#a855f7" },
            { label: "<5 min settle", bg: "rgba(34,211,238,0.1)", color: "#22d3ee" },
            { label: "90+ countries", bg: "rgba(34,197,94,0.1)", color: "#22c55e" },
          ].map((p) => (
            <div
              key={p.label}
              style={{
                background: p.bg,
                color: p.color,
                fontSize: 16,
                padding: "8px 20px",
                borderRadius: 8,
              }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#444",
          }}
        >
          aorabridge.com
        </div>
      </div>
    ),
    { ...size }
  );
}
