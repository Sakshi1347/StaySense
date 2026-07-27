"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { API_BASE } from "@/lib/api";

export default function AIPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const generateDescription = async () => {
    setLoading(true);
    setDescription("");
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/ai/description`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          amenities,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setDescription(data.description);
      } else {
        setError(data.message || "Failed to generate description.");
      }
    } catch {
      setError("Unable to connect to the AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">
          AI Homestay Description Generator
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Homestay Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Amenities"
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
        />

        <button
          onClick={generateDescription}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate Description"}
        </button>

        {loading && (
          <p className="mt-4 text-blue-600">Generating description...</p>
        )}

        {error && <p className="mt-4 text-red-600">{error}</p>}

        {description && (
          <div className="border p-4 mt-6 rounded bg-gray-100">
            <h2 className="font-bold mb-2">Generated Description</h2>
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
