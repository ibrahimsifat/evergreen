"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Head from "next/head";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem("cms-auth");
        if (authData) {
          const { loginTime } = JSON.parse(authData);
          const sessionAge = Date.now() - loginTime;
          const maxAge = 60 * 60 * 24 * 7 * 1000; // 7 days in milliseconds

          if (sessionAge < maxAge) {
            // User is already authenticated, redirect to CMS
            router.push("/cms");
            return;
          } else {
            // Session expired, remove from localStorage
            localStorage.removeItem("cms-auth");
          }
        }
      } catch (error) {
        console.error("Auth check error:", error);
        localStorage.removeItem("cms-auth");
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Store authentication data in localStorage
          localStorage.setItem(
            "cms-auth",
            JSON.stringify({
              user: data.user,
              sessionToken: data.sessionToken,
              loginTime: Date.now(),
            })
          );

          router.push("/cms");
          return;
        } else {
          setError(data.message || "Login failed");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <title>Admin Login - Evergreen Intelligent Company Ltd</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/images/top-logo.png"
                  alt="Evergreen Intelligent Company Ltd"
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-2">
                  <Lock className="w-4 h-4" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Portal</h2>
            <p className="mt-2 text-sm text-gray-600">
              Evergreen Intelligent Company Ltd (EIC)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Content Management System
            </p>
          </div>

          {/* Login Form */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center text-gray-800">
                Sign In
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Enter your credentials to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert
                    variant="destructive"
                    className="border-red-200 bg-red-50"
                  >
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@evergreen.sa"
                      className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Evergreen Intelligent Company Ltd.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
