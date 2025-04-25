"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistStats() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 mx-auto max-w-md bg-green-50 border border-green-200 rounded-lg shadow-sm p-4 text-center"
    >
      <p className="text-lg font-semibold text-green-700">
        🎉 <span className="text-2xl font-bold">{count}</span> people are
        already on the waitlist!
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Don’t miss out — you’ll be first to know when we launch.
      </p>
    </motion.div>
  );
}
