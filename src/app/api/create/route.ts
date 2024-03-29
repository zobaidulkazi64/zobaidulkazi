import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  return new Response("OK", { status: 200 });
}
