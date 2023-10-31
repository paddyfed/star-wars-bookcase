import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./helpers/apiHelpers";
import StarWarsIcon from "../public/images/Star_Wars_Logo.svg";

const styleClassses = {
  novel: styles.novel,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/timeline-order`;

  const data = await getData(api);

  return (
    <>
      <div className={styles.bookcase}>
        {data.bookcase.map((book) => {
          return (
            <div
              key={book.id}
              className={`${styles.book} ${styleClassses[book.type]}`}
            >
              <div>
                <Image
                  src={StarWarsIcon}
                  width={50}
                  height={100}
                  alt="Star Wars"
                  className={styles.image}
                />
              </div>
              <div className={styles.bookText}>
                <div className={styles.series}>{book.series}</div>
                <div className={styles.title}>{book.title}</div>
                <div className={styles.author}>{book.author}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
