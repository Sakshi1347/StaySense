"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchProfile, saveAuth } from "@/lib/api";

function OAuthSuccessInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const completeOAuth = async () => {
      const token = searchParams.get("token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const user = await fetchProfile(token);
        saveAuth(token, user);
        router.replace("/dashboard");
      } catch {
        saveAuth(token);
        router.replace("/dashboard");
      }
    };

    void completeOAuth();
  }, [router, searchParams]);

  return <h2 className="p-10">Signing you in...</h2>;
}

export default function OAuthSuccess() {
  return (
    <Suspense fallback={<h2 className="p-10">Signing you in...</h2>}>
      <OAuthSuccessInner />
    </Suspense>
  );
}
