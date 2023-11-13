import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "./bookCaseHeader";

export default function ReleaseDateBookCase({ data }) {
  return (
    <div className={styles.authorsBookCases}>
      {Object.entries(data.bookcase).map(([releaseDate, books]) => (
        <div key={releaseDate} className={styles.authorBookCase}>
          <BookCaseHeader header={releaseDate} />
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
