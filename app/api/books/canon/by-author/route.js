import { NextResponse } from "next/server";
import bookcase from "@/json/canonbookcase.json";
import bookCaseByAuthor from "@/app/helpers/bookCaseByAuthor";

const ordered = bookCaseByAuthor(bookcase);

export async function GET() {
  return NextResponse.json({ bookcase: ordered });
}
