"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AuthUser {
  email: string;
  name: string;
}

interface AuthData {
  user: AuthUser;
  sessionToken: string;
  loginTime: number;
}

export function useCMSAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      // First check localStorage
      const authData = localStorage.getItem("cms-auth");
      if (authData) {
        const parsedData: AuthData = JSON.parse(authData);
        const { user, loginTime } = parsedData;
        const sessionAge = Date.now() - loginTime;
        const maxAge = 60 * 60 * 24 * 7 * 1000; // 7 days in milliseconds

        if (sessionAge < maxAge) {
          // For client-side authentication, we can trust localStorage
          // Server-side verification is handled by middleware
          setUser(user);
          setLoading(false);
          return true;
        }

        // Session expired or invalid, remove from localStorage
        localStorage.removeItem("cms-auth");
      }

      // No valid session found
      setUser(null);
      setLoading(false);
      return false;
    } catch (error) {
      console.error("Auth check error:", error);
      localStorage.removeItem("cms-auth");
      setUser(null);
      setLoading(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      // Clear localStorage
      localStorage.removeItem("cms-auth");

      // Call logout API to clear server-side session
      await fetch("/api/auth/logout", { method: "POST" });

      // Clear user state
      setUser(null);

      // Redirect to login
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Even if API call fails, clear localStorage and redirect
      localStorage.removeItem("cms-auth");
      setUser(null);
      router.push("/login");
    }
  };

  const requireAuth = async () => {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      router.push("/login");
    }
    return isAuthenticated;
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    loading,
    logout,
    checkAuth,
    requireAuth,
    isAuthenticated: !!user,
  };
}
