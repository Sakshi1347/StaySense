import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">
          Login
        </h1>

        <p className="mt-4">
          Sign in to access StaySense AI.
        </p>
      </main>

      <Footer />
    </>
  );
}