"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  AuthUser,
  clearAuth,
  fetchProfile,
  getStoredUser,
  getToken,
  saveAuth,
} from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const init = async () => {
      const token = getToken();

      if (!token) {
        router.replace("/login");
        return;
      }

      const storedUser = getStoredUser();
      if (storedUser) {
        setUser(storedUser);
        setChecking(false);
        return;
      }

      const profile = await fetchProfile(token);
      if (profile) {
        saveAuth(token, profile);
        setUser(profile);
        setChecking(false);
        return;
      }

      clearAuth();
      router.replace("/login");
    };

    void init();
  }, [router]);

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  if (checking) {
    return (
      <>
        <Navbar />
        <main className="p-8">
          <p>Loading dashboard...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="mt-4 text-lg">
          Welcome, <strong>{user?.name}</strong>
        </p>

        {user?.email && <p className="text-gray-600">{user.email}</p>}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Manage Homestays
          </Link>
          <Link
            href="/ai"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            AI Description Generator
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
