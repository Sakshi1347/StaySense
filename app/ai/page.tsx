"use client";

import { useState } from "react";

export default function AIPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const generateDescription = async () => {
    setLoading(true);
    setDescription("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/description", {
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

      console.log(data);
alert(JSON.stringify(data));

      if (res.ok) {
        setDescription(data.description);
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
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
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Description
      </button>

      {loading && (
        <p className="mt-4 text-blue-600">
          Generating...
        </p>
      )}

      {description && (
        <div className="border p-4 mt-6 rounded bg-gray-100">
          <h2 className="font-bold mb-2">Generated Description</h2>
          <p>{description}</p>
        </div>
      )}

    </div>
  );
}