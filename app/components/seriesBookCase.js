import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";

export default function SeriesBookCase({ data }) {
  return (
    <div className={styles.authorsBookCases}>
      {Object.entries(data.bookcase).map(([series, books]) => (
        <div key={series} className={styles.authorBookCase}>
          <h2 className={styles.authorHeader}>{series}</h2>
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
