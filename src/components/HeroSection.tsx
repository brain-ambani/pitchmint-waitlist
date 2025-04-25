import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center px-6 py-20 bg-gradient-to-br from-green-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center">
        High-Reply Outreach, Without the Hassle
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center">
        PitchMint helps you connect with the right people across Twitter,
        LinkedIn, and Email — all from a single dashboard. Write once,
        personalize fast, and track what works.
      </p>
      <Link
        href="#waitlist"
        className="inline-block mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition"
      >
        Join the Waitlist
      </Link>
    </section>
  );
}
