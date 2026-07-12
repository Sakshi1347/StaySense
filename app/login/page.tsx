"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        alert("Too many login attempts. Please try again after 15 minutes.");
        return;
      }

      if (res.ok) {
        localStorage.setItem("token", data.token);

        alert("Login Successful!");

        router.push("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="p-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Login
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>

        <button
          onClick={() => {
            window.location.href = "http://localhost:5000/api/auth/google";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-3"
        >
          Sign in with Google
        </button>
      </main>

      <Footer />
    </>
  );
}