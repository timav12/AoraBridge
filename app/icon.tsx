import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: 22,
          fontWeight: 700,
          color: "#a855f7",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
