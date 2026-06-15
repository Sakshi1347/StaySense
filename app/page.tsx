import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-3 gap-6 p-8">
        <Card
          title="Booking Management"
          description="Manage reservations easily."
        />

        <Card
          title="Guest Reviews"
          description="Analyze customer feedback."
        />

        <Card
          title="AI Insights"
          description="Improve services using AI."
        />
      </div>

      <Footer />
    </>
  );
}