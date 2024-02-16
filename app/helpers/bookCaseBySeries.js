import sortByReleaseDateThenId from "./sortByReleaseDateThenId";

export default function bookCaseBySeries(bookcase) {
  const ordered = bookcase.bookcase;
  const returnArr = ordered
    .sort((a, b) => a.series.localeCompare(b.series)) // sort by series a-z
    .reduce((acc, book) => {
      // group by author name also - returns an array of objects using the author name
      const series = book.series;
      if (!acc[series]) {
        acc[series] = [];
      }
      acc[series].push(book);
      acc[series].sort((a, b) => sortByReleaseDateThenId(a, b));
      return acc;
    }, {});

  return returnArr;
}
