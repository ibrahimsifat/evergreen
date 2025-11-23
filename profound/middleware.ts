import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /cms/projects)
  const pathname = request.nextUrl.pathname;

  // Check if the request is for a CMS route
  if (pathname.startsWith("/cms")) {
    // Get the session token from cookies
    const sessionToken = request.cookies.get("cms-session")?.value;

    // If no session token, redirect to login
    if (!sessionToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // If there's a session token, verify it
    try {
      // Decode the session token
      const decoded = Buffer.from(sessionToken, "base64").toString("utf-8");
      const [email, timestamp] = decoded.split(":");

      // Check if session is not too old (7 days)
      const sessionAge = Date.now() - parseInt(timestamp);
      const maxAge = 60 * 60 * 24 * 7 * 1000; // 7 days in milliseconds

      if (sessionAge > maxAge) {
        // Session expired, redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // Session is valid, allow the request to continue
      // Add security headers for CMS routes
      const response = NextResponse.next();
      response.headers.set(
        "X-Robots-Tag",
        "noindex, nofollow, noarchive, nosnippet"
      );
      response.headers.set(
        "Cache-Control",
        "no-cache, no-store, must-revalidate"
      );
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");
      return response;
    } catch (error) {
      // Invalid token format, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For non-CMS routes, allow the request to continue
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - login page
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
