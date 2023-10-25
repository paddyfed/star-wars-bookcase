import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";

export async function GET() {
  const ordered = bookcase.bookcase;
  ordered.sort((a, b) => (a.ReleaseDate > b.ReleaseDate ? 1 : -1));
  return NextResponse.json({ bookcase: ordered });
}
