import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}/books/release-date`;

  const data = await getData(api);

  return (
    <div className={styles.bookcase}>
      {data.bookcase.map((book) => {
        return (
          <div key={book.id} className={styles.book}>
            <div className={styles.series}>{book.series}</div>
            <div>{book.title}</div>
            <div className={styles.author}>{book.author}</div>
          </div>
        );
      })}
    </div>
  );
}
