"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import ThankYouMessage from "@/components/ThankYouMessage";
import WaitlistStats from "@/components/WaitlistStats";
import ShareButtons from "@/components/ShareButtons";

export default function HomePage() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Header />
      <main className="flex-grow">
        <section className="px-6 pt-20 pb-12 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            High-Reply Outreach Made Easy
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            PitchMint helps founders and creators send personalized DMs and
            emails across platforms — Twitter, Email, LinkedIn — and start real
            conversations.
          </p>
          {joined ? (
            <ThankYouMessage />
          ) : (
            <WaitlistForm onSuccess={() => setJoined(true)} />
          )}
        </section>
        <WaitlistStats />
        <ShareButtons />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
