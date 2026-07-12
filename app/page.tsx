"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

type Homestay = {
  _id: string;
  name: string;
  location: string;
  price: number;
  description: string;
};

export default function Home() {
  const [homestays, setHomestays] = useState<Homestay[]>([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("http://localhost:5000/api/homestays", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setHomestays(data);
      } else {
        setHomestays([]);
      }
    })
    .catch((err) => console.log(err));
}, []);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/homestays/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setHomestays(homestays.filter((home) => home._id !== id));
  };

  const handleCreate = async () => {
    const res = await fetch("http://localhost:5000/api/homestays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        price: Number(price),
        description,
      }),
    });

    const newHomestay = await res.json();

    setHomestays([...homestays, newHomestay]);

    setName("");
    setLocation("");
    setPrice("");
    setDescription("");
  };

  const handleEdit = async (id: string) => {
    const updatedName = prompt("Enter new homestay name:");

    if (!updatedName) return;

    const res = await fetch(`http://localhost:5000/api/homestays/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
      }),
    });

    const updated = await res.json();

    setHomestays(
      homestays.map((home) =>
        home._id === id ? updated : home
      )
    );
  };

  return (
    <>
      <Navbar />

      <Hero />

      <div className="p-8 border rounded-xl m-8">
        <h2 className="text-2xl font-bold mb-4">
          Add New Homestay
        </h2>

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
        {homestays.map((home) => (
          <Card
            key={home._id}
            id={home._id}
            title={home.name}
            description={home.description}
            location={home.location}
            price={home.price}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}