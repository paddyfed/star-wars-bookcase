import sortByReleaseDateThenId from "./sortByReleaseDateThenId";

export default function bookCaseByAuthor(bookcase) {
  const ordered = bookcase.bookcase;
  const returnArr = ordered
    .sort((a, b) => a.author.localeCompare(b.author)) // sort by author name
    .reduce((acc, book) => {
      // group by author name also - returns an array of objects using the author name
      const author = book.author;
      if (!acc[author]) {
        acc[author] = [];
      }
      acc[author].push(book);
      acc[author].sort((a, b) => sortByReleaseDateThenId(a, b));
      return acc;
    }, {});

  return returnArr;
}
