import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";

export default function AuthorsBookCase({ data }) {
  return (
    <div className={styles.authorsBookCases}>
      {Object.entries(data.bookcase).map(([author, books]) => (
        <div key={author} className={styles.authorBookCase}>
          <h2 className={styles.authorHeader}>{author}</h2>
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
