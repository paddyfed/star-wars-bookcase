import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";

export async function GET() {
  return NextResponse.json({ bookcase: bookcase.bookcase });
}
