import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    app: "shimpilot-live-sandbox",
    providerCalls: "disabled",
    purpose: "public compatibility test repository",
  });
}
