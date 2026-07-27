import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 StaySense AI</p>

        <div className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/ai">AI Tools</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </footer>
  );
}
