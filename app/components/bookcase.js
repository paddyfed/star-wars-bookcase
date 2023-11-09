import Book from "./book";
import styles from "../page.module.css";

export default function BookCase({ bookcase }) {
  // if the bookcase is an object, then map the bookcase array inside the object
  const isGroupedData =
    typeof bookcase === "object" && !Array.isArray(bookcase);

  if (isGroupedData)
    return (
      <div className={styles.bookcase}>
        {bookcase.bookcase.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </div>
    );

  // otherwise, map the array itself
  return (
    <div className={styles.bookcase}>
      {bookcase.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
