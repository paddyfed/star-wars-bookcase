import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";

export const dynamic = "force-dynamic";

export async function GET() {
  const ordered = bookcase.bookcase;
  ordered.sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1));
  return NextResponse.json({ bookcase: ordered });
}
