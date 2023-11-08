import { NextResponse } from "next/server";
import bookcase from "@/json/canonbookcase.json";
import { bookCaseTimelineOrder } from "@/app/helpers/apiHelpers";

const reversedBooks = bookCaseTimelineOrder(bookcase);

export async function GET() {
  // Return the books in reverse order
  return NextResponse.json({ bookcase: reversedBooks });
}
