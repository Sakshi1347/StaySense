import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">
        <Link href="/">StaySense AI</Link>
      </h1>

      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>

        <li>
          <Link href="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/login" className="hover:text-gray-200">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}