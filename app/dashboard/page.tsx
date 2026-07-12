"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    router.push("/login");
  };

  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4">
          Welcome to StaySense AI Dashboard.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </main>

      <Footer />
    </>
  );
}