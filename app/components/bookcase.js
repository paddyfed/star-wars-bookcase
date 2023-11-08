import Book from "./book";
import styles from "../page.module.css";

export default function BookCase({ bookcase }) {
  return (
    <div className={styles.bookcase}>
      {bookcase.bookcase.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
