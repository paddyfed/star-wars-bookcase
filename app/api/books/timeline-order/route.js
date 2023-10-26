import { NextResponse } from "next/server";
import bookcase from "@/json/bookcase.json";

// Create an empty array to hold the ordered books
const orderedBooks = [];

// Find the book with no "prev" value (start book)
const startBook = bookcase.bookcase.find((book) => book.prev === null);

// Start with the "start book" and follow the "next" values to order the books
let currentBook = startBook;
while (currentBook) {
  orderedBooks.push(currentBook);
  currentBook = bookcase.bookcase.find((book) => book.id === currentBook.next);
}

// console.log("bookList", orderedBooks);
// console.log("bookMap", bookMap);

export async function GET() {
  //const ordered = bookcase.bookcase;
  // ordered.sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1));
  return NextResponse.json({ bookcase: orderedBooks });
}
