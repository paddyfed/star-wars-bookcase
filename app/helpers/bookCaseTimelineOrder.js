export default function bookCaseTimelineOrder(bookcase) {
  // Create an empty array to hold the ordered books
  const orderedBooks = [];

  // Find the book with no "next" value (end book)
  let currentBook = bookcase.bookcase.find((book) => !book.next);

  // Start with the "end book" and follow the "next" values to order the books
  while (currentBook) {
    orderedBooks.push(currentBook);
    currentBook = bookcase.bookcase.find(
      (book) => book.next === currentBook.id
    );
  }

  const ordered = orderedBooks.reverse();

  const returnArr = ordered.reduce((acc, book) => {
    const era = book.era;
    if (!acc[era]) {
      acc[era] = [];
    }
    acc[era].push(book);
    return acc;
  }, {});
  return returnArr;
}
