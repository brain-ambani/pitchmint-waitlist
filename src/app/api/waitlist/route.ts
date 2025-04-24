// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, email, twitter } = await req.json();

  try {
    // Optional: avoid duplicate entries
    const existing = await prisma.waitlist.findUnique({ where: { email } });
    if (!existing) {
      await prisma.waitlist.create({ data: { name, email, twitter } });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
