import styles from "@/app/page.module.css";

export default function AuthorHeader({ author }) {
  // only show heading if there is an author
  return <>{author && <h2 className={styles.authorHeader}>{author}</h2>}</>;
}
