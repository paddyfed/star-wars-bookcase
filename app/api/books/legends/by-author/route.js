import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";
import { bookCaseByAuthor } from "@/app/helpers/apiHelpers";

const ordered = bookCaseByAuthor(bookcase);

export async function GET() {
  return NextResponse.json({ bookcase: ordered });
}
