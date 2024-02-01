import styles from "@/app/page.module.css";

export default function FilterToggle({
  onlyShowBoughtBooks,
  show,
  setShow,
  setOnlyShowBoughtBooks,
  releaseOrTimeline = "Show Release Year",
  showNovels,
  setShowNovels,
  showReleaseOrErasToggle = true,
}) {
  return (
    <div>
      {showReleaseOrErasToggle && (
        <span className={styles.toggleSwitch}>
          <input
            type="checkbox"
            id="switch"
            onChange={setShow}
            checked={show}
          />
          <label htmlFor="switch" className={styles.toggleSwitchLabel}>
            {releaseOrTimeline}
          </label>
        </span>
      )}
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchNotBought"
          onChange={setOnlyShowBoughtBooks}
          checked={onlyShowBoughtBooks}
        />
        <label htmlFor="switchNotBought" className={styles.toggleSwitchLabel}>
          Only show bought books
        </label>
      </span>
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
    </div>
  );
}
