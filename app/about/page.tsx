"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">About StaySense AI</h1>

        <p className="mt-4 text-gray-700 leading-relaxed">
          StaySense AI helps you manage homestays with a simple dashboard,
          secure authentication, and AI-assisted listing descriptions.
        </p>
      </main>

      <Footer />
    </>
  );
}
