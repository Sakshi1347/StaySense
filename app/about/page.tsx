"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          About StaySense AI
        </h1>

        <p className="mt-4">
          This page is protected and can only be accessed after logging in.
        </p>
      </main>

      <Footer />
    </>
  );
}