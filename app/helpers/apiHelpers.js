export async function getData(api) {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export function bookCaseTimelineOrder(bookcase) {
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

  return orderedBooks.reverse();
}

export function bookCaseReleaseOrder(bookcase) {
  const ordered = bookcase.bookcase;
  return ordered.sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1));
}

export function bookCaseByAuthor(bookcase) {
  const ordered = bookcase.bookcase;
  const returnArr = ordered
    .sort((a, b) => (a.author > b.author ? 1 : -1)) // sort by author name
    .reduce((acc, book) => {
      // group by author name also - returns an array of objects using the author name
      const author = book.author;
      if (!acc[author]) {
        acc[author] = [];
      }
      acc[author].push(book);
      acc[author].sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1));
      return acc;
    }, {});

  return returnArr;
}

export function bookCaseBySeries(bookcase) {
  const ordered = bookcase.bookcase;
  const returnArr = ordered
    .sort((a, b) => (a.series > b.series ? 1 : -1)) // sort by author name
    .reduce((acc, book) => {
      // group by author name also - returns an array of objects using the author name
      const series = book.series;
      if (!acc[series]) {
        acc[series] = [];
      }
      acc[series].push(book);
      acc[series].sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1));
      return acc;
    }, {});

  return returnArr;
}
