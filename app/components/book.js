import StarWarsIcon from "../../public/images/Star_Wars_Logo.svg";
import Image from "next/image";
import styles from "../page.module.css";

const styleClassses = {
  novel: styles.novel,
  vhs: styles.vhs,
  dvd: styles.dvd,
  default: styles.default,
};

export default function Book({ book }) {
  const type = book.type ?? "default";
  return (
    <div className={`${styles.book} ${styleClassses[type]}`}>
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
      {book.type === "vhs" || book.type === "dvd" ? (
        <i className={styles.type}>{book.type}</i>
      ) : null}
    </div>
  );
}
