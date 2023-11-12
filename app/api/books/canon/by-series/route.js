import { NextResponse } from "next/server";
import bookcase from "@/json/canonbookcase.json";
import { bookCaseBySeries } from "@/app/helpers/apiHelpers";

const ordered = bookCaseBySeries(bookcase);

export async function GET() {
  return NextResponse.json({ bookcase: ordered });
}
