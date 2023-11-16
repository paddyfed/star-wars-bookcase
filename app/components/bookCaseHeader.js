import styles from "@/app/page.module.css";

export default function BookCaseHeader({ header }) {
  // only show heading if there is any data
  return <>{header && <h3 className={styles.bookCaseHeader}>{header}</h3>}</>;
}
