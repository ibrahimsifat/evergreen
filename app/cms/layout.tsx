"use client";

import { useCMSAuth } from "@/hooks/use-cms-auth";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, isAuthenticated } = useCMSAuth();
  const router = useRouter();

  useEffect(() => {
    // If not loading and not authenticated, redirect to login
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, isAuthenticated, router]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children (redirect will happen)
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render the CMS content
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta
          name="googlebot"
          content="noindex, nofollow, noarchive, nosnippet"
        />
        <meta
          name="bingbot"
          content="noindex, nofollow, noarchive, nosnippet"
        />
        <title>CMS - Admin Panel</title>
      </Head>
      {children}
    </>
  );
}
