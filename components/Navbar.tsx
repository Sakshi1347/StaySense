"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { clearAuth, getToken } from "@/lib/api";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getToken());
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-xl md:text-2xl font-bold">
        <Link href="/">StaySense AI</Link>
      </h1>

      <ul className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
        <li>
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link href="/dashboard" className="hover:text-gray-200">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogout}
                className="hover:text-gray-200"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-200">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
