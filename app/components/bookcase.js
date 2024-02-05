import Book from "@/app/components/book";
import styles from "../page.module.css";

export default function BookCase({
  bookcase,
  onlyShowBoughtBooks,
  showNovels,
  showDvds,
  showYoungAdult,
  showVhs,
  showGame,
  showTv,
}) {
  function parseQuery(value) {
    const queryFilter = [];
    if (showNovels === true) queryFilter.push("novel");
    if (showDvds === true) queryFilter.push("dvd");
    if (showVhs === true) queryFilter.push("vhs");
    if (showYoungAdult === true) queryFilter.push("ya");
    if (showGame === true) queryFilter.push("game");
    if (showTv === true) queryFilter.push("tv");
    if (queryFilter.includes(value.type)) return true;

    return false;
  }

  function parseBoughtBooksQuery(value) {
    if (!Object.hasOwn(value, "bought")) return true;

    if (onlyShowBoughtBooks === true && value.bought !== true) return false;

    return true;
  }

  return (
    <div className={styles.bookcase}>
      {bookcase
        .filter((b) => parseBoughtBooksQuery(b))
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
