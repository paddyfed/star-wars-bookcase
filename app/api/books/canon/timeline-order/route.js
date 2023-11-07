import { NextResponse } from "next/server";
import bookcase from "@/json/canonbookcase.json";

// Create an empty array to hold the ordered books
const orderedBooks = [];

// Find the book with no "next" value (end book)
let currentBook = bookcase.bookcase.find((book) => !book.next);

// Start with the "end book" and follow the "next" values to order the books
while (currentBook) {
  orderedBooks.push(currentBook);
  currentBook = bookcase.bookcase.find((book) => book.next === currentBook.id);
}

const reversedBooks = orderedBooks.reverse();

export const dynamic = "force-dynamic";
export async function GET() {
  // Return the books in reverse order
  return NextResponse.json({ bookcase: reversedBooks });
}
