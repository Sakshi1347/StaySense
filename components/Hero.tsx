"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl font-bold">
        Smarter Homestay Management with AI
      </h1>

      <p className="mt-6 text-gray-600">
        Manage bookings and enhance guest experiences effortlessly.
      </p>

      <Link
        href="/login"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>
    </section>
  );
}
