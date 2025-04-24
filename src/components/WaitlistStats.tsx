"use client";
import { useEffect, useState } from "react";

export default function WaitlistStats() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  if (count === null) return null;

  return (
    <p className="text-center text-sm text-gray-500 mt-4">
      🎉 <strong>{count}</strong> people have already joined the waitlist!
    </p>
  );
}
