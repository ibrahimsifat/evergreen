"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Our team has been notified and is working to fix it.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left max-w-xl mx-auto">
            <p className="text-sm font-mono text-gray-800 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={reset} size="lg" className="min-w-[200px]">
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[200px]">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Support Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
