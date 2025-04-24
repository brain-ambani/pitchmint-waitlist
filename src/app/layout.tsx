import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const siteMetadata = {
  title: "PitchMint — Smarter Outreach Starts Here",
  description:
    "Join the waitlist for PitchMint, the tool that helps creators & founders send personalized outreach across platforms.",
  openGraph: {
    title: "PitchMint — Smarter Outreach Starts Here",
    description:
      "Join our waitlist for smarter outreach across Twitter, LinkedIn & email.",
    url: "https://pitchmint.vercel.app",
    siteName: "PitchMint",
    images: [
      {
        url: "https://pitchmint.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "PitchMint Waitlist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PitchMint — Smarter Outreach Starts Here",
    description: "Join the waitlist for personalized cross-platform DMs.",
    images: ["https://pitchmint.vercel.app/og-image.png"],
  },
};

// ✅ Tell Next.js to use this metadata
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
