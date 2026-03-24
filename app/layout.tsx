import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AoraBridge — Cross-border payroll. Instant.",
  description:
    "Payment API for EoR, HRIS, and staffing platforms. Cut wire costs by 80%. Settle in minutes, not days.",
  keywords: [
    "cross-border payments",
    "contractor payroll",
    "stablecoin",
    "USDC",
    "EoR",
    "HRIS",
    "staffing",
    "payment API",
  ],
  openGraph: {
    title: "AoraBridge — Cross-border payroll. Instant.",
    description:
      "Payment API for EoR, HRIS, and staffing platforms.",
    url: "https://aorabridge.com",
    siteName: "AoraBridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AoraBridge — Cross-border payroll. Instant.",
    description:
      "Payment API for EoR, HRIS, and staffing platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
