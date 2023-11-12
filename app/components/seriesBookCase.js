import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "./bookCaseHeader";

export default function SeriesBookCase({ data }) {
  return (
    <div className={styles.authorsBookCases}>
      {Object.entries(data.bookcase).map(([series, books]) => (
        <div key={series} className={styles.authorBookCase}>
          <BookCaseHeader header={series} />
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
