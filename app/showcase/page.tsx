"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Button,
  Input,
  Loader,
  Toast,
  Modal,
} from "@/components/ui/Index";
export default function ShowcasePage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
   <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 p-10 space-y-10">
  

    <h1 className="text-4xl font-bold">
      UI Component Showcase
    </h1>
    <ThemeToggle />

    <section className="space-y-4">

  <h2 className="text-2xl font-semibold">
    Button
  </h2>

  <Button
    label="Click Me"
    onClick={() => alert("Button Clicked!")}
  />

</section>
<section className="space-y-4">

  <h2 className="text-2xl font-semibold">
    Input
  </h2>

  <Input placeholder="Enter your email" />

</section>
<section className="space-y-4">

  <h2 className="text-2xl font-semibold">
    Loader
  </h2>

  <Loader />

</section>
<section className="space-y-4">

  <h2 className="text-2xl font-semibold">
    Toast
  </h2>

  <Toast message="Booking Successful!" />

</section>
<section className="space-y-4">

  <h2 className="text-2xl font-semibold">
    Modal
  </h2>

  <Button
    label="Open Modal"
    onClick={() => setIsOpen(true)}
  />

</section>
{
  isOpen && (
    <Modal title="StaySense AI">

      <p>
        This is a reusable modal component.
      </p>

      <div className="mt-4">

        <Button
          label="Close"
          onClick={() => setIsOpen(false)}
        />

      </div>

    </Modal>
  )
}
  </main>
);
}