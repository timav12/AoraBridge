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
  metadataBase: new URL("https://aorabridge.com"),
  title: "AoraBridge — Cross-Border Contractor Payment API for EoR & HRIS",
  description:
    "White-label payment API for EoR, HRIS, and staffing platforms. Settle contractor payments in under 5 minutes. 0.5–1% fee. 90+ countries. Join the waitlist.",
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
  alternates: {
    canonical: "https://aorabridge.com",
  },
  openGraph: {
    title: "AoraBridge — Cross-Border Contractor Payment API for EoR & HRIS",
    description:
      "White-label payment API for EoR, HRIS, and staffing platforms. Settle contractor payments in under 5 minutes. 0.5–1% fee. 90+ countries.",
    url: "https://aorabridge.com",
    siteName: "AoraBridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AoraBridge — Cross-Border Contractor Payment API for EoR & HRIS",
    description:
      "White-label payment API for EoR, HRIS, and staffing platforms. Settle contractor payments in under 5 minutes. 0.5–1% fee. 90+ countries.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AoraBridge",
  "url": "https://aorabridge.com",
  "logo": "https://aorabridge.com/logo.png",
  "description": "AoraBridge provides a cross-border payroll payment API for EoR, HRIS, and staffing platforms. Settle contractor payments in under 5 minutes across 90+ countries at 0.5–1% flat fee.",
  "foundingDate": "2025",
  "industry": "Financial Technology",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://aorabridge.com#waitlist"
  },
  "sameAs": [
    "https://twitter.com/aorabridge",
    "https://www.linkedin.com/company/aorabridge",
    "https://github.com/timav12/AoraBridge"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AoraBridge",
  "url": "https://aorabridge.com",
  "description": "Cross-border payroll API for EoR, HRIS, and staffing platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
