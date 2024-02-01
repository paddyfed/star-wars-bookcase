import { Fragment } from "react";
import Book from "@/app/components/book";
import styles from "@/app/page.module.css";

export default function CombinedBookCase({
  data,
  onlyShowBoughtBooks,
  showNovels,
}) {
  function parseQuery(value) {
    if (showNovels === true) return value.type === "novel";
  }

  return (
    <div className={styles.bookcase}>
      {Object.entries(data.bookcase).map(([groupItem, books]) => (
        <Fragment key={groupItem}>
          {books
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
        </Fragment>
      ))}
    </div>
  );
}
