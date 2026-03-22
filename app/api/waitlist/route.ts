import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, company, type } = body;

    if (!email || !company) {
      return NextResponse.json(
        { error: "Email and company are required" },
        { status: 400 }
      );
    }

    // Log to console (placeholder — will connect to real backend later)
    console.log("[Waitlist Signup]", {
      email,
      company,
      type,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
