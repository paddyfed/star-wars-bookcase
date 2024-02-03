import Book from "@/app/components/book";
import styles from "../page.module.css";

export default function BookCase({
  bookcase,
  onlyShowBoughtBooks,
  showNovels,
}) {
  const showDvd = true;
  const showVhs = true;
  const showYoungAdult = true;
  const showGame = true;
  const showTv = true;

  function parseQuery(value) {
    const queryFilter = [];
    if (showNovels === true) queryFilter.push("novel");
    if (showDvd === true) queryFilter.push("dvd");
    if (showVhs === true) queryFilter.push("vhs");
    if (showYoungAdult === true) queryFilter.push("ya");
    if (showGame === true) queryFilter.push("game");
    if (showTv === true) queryFilter.push("tv");
    if (queryFilter.includes(value.type)) return true;

    return false;
  }
  return (
    <div className={styles.bookcase}>
      {bookcase
        .filter((d) => parseQuery(d))
        .map((book) => {
          return (
            <Book
              book={book}
              key={book.id}
              onlyShowBoughtBooks={onlyShowBoughtBooks}
            />
          );
        })}
    </div>
  );
}
