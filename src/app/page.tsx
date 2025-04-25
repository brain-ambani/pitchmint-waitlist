"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import WaitlistStats from "@/components/WaitlistStats";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import ThankYouMessage from "@/components/ThankYouMessage";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Home() {
  const [joined, setJoined] = useState(false);

  // Confetti + scroll to top when joined
  useEffect(() => {
    if (joined) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [joined]);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section id="waitlist" className="py-20 px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-700">
            Ready to connect better?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join the PitchMint waitlist and be the first to access a smarter way
            to reach customers, collaborators, or investors.
          </p>

          <AnimatePresence mode="wait">
            {!joined ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <WaitlistForm onSuccess={() => setJoined(true)} />
              </motion.div>
            ) : (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ThankYouMessage />
              </motion.div>
            )}
          </AnimatePresence>

          <WaitlistStats />
          <ShareButtons />
        </section>
      </main>
      <Footer />
    </>
  );
}
