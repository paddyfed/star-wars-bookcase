import Image from "next/image";
import styles from "../page.module.css";
import { getData } from "../helpers/apiHelpers";
import Book from "../components/book";

const styleClassses = {
  novel: styles.novel,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/timeline-order`;

  const data = await getData(api);

  return (
    <div className={styles.bookcase}>
      {data.bookcase.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
