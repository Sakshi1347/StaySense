"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { API_BASE, authHeaders, getToken } from "@/lib/api";

type Homestay = {
  _id: string;
  name: string;
  location: string;
  price: number;
  description: string;
};

export default function Home() {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const loadHomestays = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/homestays`);
      const data = await res.json();
      setHomestays(Array.isArray(data) ? data : []);
    } catch {
      setHomestays([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadHomestays();
  }, []);

  const requireAuth = () => {
    if (!getToken()) {
      setError("Please login to manage homestays.");
      return false;
    }
    return true;
  };

  const handleDelete = async (id: string) => {
    setError("");
    if (!requireAuth()) return;

    const res = await fetch(`${API_BASE}/api/homestays/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message || "Failed to delete homestay. Please login first.");
      return;
    }

    // Keep UI in sync with DB (also handles _id string/object mismatches)
    setHomestays((prev) =>
      prev.filter((home) => String(home._id) !== String(id))
    );
  };

  const handleCreate = async () => {
    setError("");
    if (!requireAuth()) return;

    if (!name || !location || !price) {
      setError("Name, location, and price are required.");
      return;
    }

    const res = await fetch(`${API_BASE}/api/homestays`, {
      method: "POST",
      headers: authHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name,
        location,
        price: Number(price),
        description,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Failed to create homestay.");
      return;
    }

    setHomestays((prev) => [...prev, data]);
    setName("");
    setLocation("");
    setPrice("");
    setDescription("");
  };

  const handleEdit = async (id: string) => {
    setError("");
    if (!requireAuth()) return;

    const updatedName = prompt("Enter new homestay name:");
    if (!updatedName) return;

    const res = await fetch(`${API_BASE}/api/homestays/${id}`, {
      method: "PUT",
      headers: authHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: updatedName,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Failed to update homestay.");
      return;
    }

    setHomestays((prev) =>
      prev.map((home) => (home._id === id ? data : home))
    );
  };

  return (
    <>
      <Navbar />

      <Hero />

      <div className="p-8 border rounded-xl m-8">
        <h2 className="text-2xl font-bold mb-4">Add New Homestay</h2>

        {error && <p className="text-red-600 mb-3 text-sm">{error}</p>}

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
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
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Homestay
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-8">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Loading homestays...
          </p>
        ) : homestays.length === 0 ? (
          <div className="col-span-full text-center p-10 border rounded-lg bg-gray-50">
            <h2 className="text-2xl font-semibold mb-2">No Homestays Found</h2>
            <p className="text-gray-600">
              There are no homestays available. Add your first homestay to get
              started.
            </p>
          </div>
        ) : (
          homestays.map((home) => (
            <Card
              key={String(home._id)}
              id={String(home._id)}
              title={home.name}
              description={home.description}
              location={home.location}
              price={home.price}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>

      <Footer />
    </>
  );
}
