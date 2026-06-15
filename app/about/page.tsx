import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          About StaySense AI
        </h1>

        <p className="mt-4">
          StaySense AI empowers rural homestays through smart technology.
        </p>
      </main>

      <Footer />
    </>
  );
}