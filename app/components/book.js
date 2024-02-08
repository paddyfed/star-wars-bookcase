import StarWarsIcon from "../../public/images/Star_Wars_Logo.svg";
import Image from "next/image";
import styles from "../page.module.css";

const styleClassses = {
  novel: styles.novel,
  vhs: styles.vhs,
  dvd: styles.dvd,
  ya: styles.ya,
  tv: styles.tv,
  game: styles.game,
  comic: styles.comic,
  default: styles.default,
};

export default function Book({ book }) {
  const type = book.type ?? "default";
  return (
    <div
      className={`${styles.book} ${styleClassses[type]} ${
        !Object.hasOwn(book, "bought") || book.bought // if the book hasn't got the 'bought' property or where the bought property is true
          ? styles.bought
          : styles.notbought
      }       
      `}
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
      {book.type === "vhs" ||
      book.type === "dvd" ||
      book.type === "ya" ||
      book.type === "tv" ||
      book.type === "game" ||
      book.type === "comic" ? (
        <i className={styles.type}>{book.type.toUpperCase()}</i>
      ) : null}
    </div>
  );
}
