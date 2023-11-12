import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import AuthorHeader from "./authorHeader";

export default function AuthorsBookCase({ data }) {
  return (
    <div className={styles.authorsBookCases}>
      {Object.entries(data.bookcase).map(([author, books]) => (
        <div key={author} className={styles.authorBookCase}>
          <AuthorHeader author={author} />
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
