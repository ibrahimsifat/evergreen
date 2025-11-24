import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            404
          </h1>
          <div className="mt-4 text-2xl font-semibold text-gray-900">
            Page Not Found
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[200px]">
            <Link href="/services" className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              View Services
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              About Us
            </Link>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Our Projects
            </Link>
            <Link href="/clients" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Our Clients
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
