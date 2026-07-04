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

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => setHomestays(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-3 gap-6 p-8">
        {homestays.map((home) => (
          <Card
            key={home._id}
            title={home.name}
            description={home.description}
            location={home.location}
            price={home.price}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}