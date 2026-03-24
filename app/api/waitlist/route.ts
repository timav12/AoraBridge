import { NextResponse } from "next/server";

const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;

async function sendTelegram(email: string, company: string, type: string) {
  if (!TG_BOT_TOKEN || !TG_CHAT_ID) return;

  const text = [
    "🚀 *New Waitlist Signup*",
    "",
    `📧 Email: \`${email}\``,
    `🏢 Company: *${company}*`,
    `📋 Type: ${type}`,
    `🕐 ${new Date().toISOString()}`,
  ].join("\n");

  await fetch(
    `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }
  );
}

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

    await sendTelegram(email, company, type);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
