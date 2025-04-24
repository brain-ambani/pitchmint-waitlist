"use client";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function ShareButtons() {
  const shareUrl = "https://pitchmint.vercel.app";

  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href={`https://twitter.com/intent/tweet?text=🚀 Just joined the waitlist for PitchMint — the smartest outreach tool! Join here: ${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg text-sm shadow hover:scale-[1.02] transition-transform"
      >
        <FaXTwitter size={16} />
        Share on X (Twitter)
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg text-sm shadow hover:scale-[1.02] transition-transform"
      >
        <FaLinkedinIn size={16} />
        Share on LinkedIn
      </a>
    </div>
  );
}
