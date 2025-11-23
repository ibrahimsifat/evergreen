import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Get credentials from environment variables
const ADMIN_EMAIL = process.env.CMS_EMAIL || "admin@albasari.com";
const ADMIN_PASSWORD = process.env.CMS_PASSWORD || "admin123";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create a simple session token
      const sessionToken = Buffer.from(`${email}:${Date.now()}`).toString(
        "base64"
      );

      // Set cookie with session token
      const cookieStore = cookies();
      cookieStore.set("cms-session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: { email, name: "Admin" },
        sessionToken: sessionToken, // Include token for localStorage
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
