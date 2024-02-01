import Book from "@/app/components/book";
import styles from "../page.module.css";

export default function BookCase({
  bookcase,
  onlyShowBoughtBooks,
  showNovels,
}) {
  function parseQuery(value) {
    if (showNovels === true) return value.type === "novel";
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
