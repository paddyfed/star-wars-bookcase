import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "@/app/components/bookCaseHeader";

export default function SplitBookCase({ data }) {
  return (
    <div className={styles.splitBookCases}>
      {Object.entries(data.bookcase).map(([groupItem, books]) => (
        <div key={groupItem} className={styles.splitBookCase}>
          <BookCaseHeader header={groupItem} />
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
