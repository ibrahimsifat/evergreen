import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get("cms-session")?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, message: "No session found" },
        { status: 401 }
      );
    }

    try {
      // Decode the session token
      const decoded = Buffer.from(sessionToken, "base64").toString("utf-8");
      const [email, timestamp] = decoded.split(":");

      // Check if session is not too old (7 days)
      const sessionAge = Date.now() - parseInt(timestamp);
      const maxAge = 60 * 60 * 24 * 7 * 1000; // 7 days in milliseconds

      if (sessionAge > maxAge) {
        // Session expired, remove cookie
        cookieStore.delete("cms-session");
        return NextResponse.json(
          { success: false, message: "Session expired" },
          { status: 401 }
        );
      }

      return NextResponse.json({
        success: true,
        user: { email, name: "Admin" },
        message: "Session valid",
      });
    } catch (decodeError) {
      // Invalid token format
      cookieStore.delete("cms-session");
      return NextResponse.json(
        { success: false, message: "Invalid session" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
