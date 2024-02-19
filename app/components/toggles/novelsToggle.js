import styles from "@/app/page.module.css";

export default function NovelsToggle({ showNovels, setShowNovels }) {
  return (
    <>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchNovels"
          onChange={setShowNovels}
          checked={showNovels}
        />
        <label htmlFor="switchNovels" className={styles.toggleSwitchLabel}>
          Novels
        </label>
      </span>
    </>
  );
}
