import sortByReleaseDateThenId from "./sortByReleaseDateThenId";

export default function bookCaseReleaseOrder(bookcase) {
  const ordered = bookcase.bookcase;
  const returnArr = ordered
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    .reduce((acc, book) => {
      const releaseDate = new Date(book.releaseDate).getFullYear();
      if (!acc[releaseDate]) {
        acc[releaseDate] = [];
      }
      acc[releaseDate].push(book);
      acc[releaseDate].sort((a, b) => sortByReleaseDateThenId(a, b));
      return acc;
    }, {});
  return returnArr;
}
