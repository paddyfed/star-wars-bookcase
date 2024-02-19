import styles from "@/app/page.module.css";

export default function ReleaseOrErasToggle({
  showSplit,
  setShowSplit,
  releaseOrTimeline = "Show Release Year",
  showReleaseOrErasToggle = true,
  onlyShowBoughtBooks,
  setOnlyShowBoughtBooks,
}) {
  return (
    <>
      {showReleaseOrErasToggle && (
        <span className={styles.toggleSwitch}>
          <input
            type="checkbox"
            id="switch"
            onChange={setShowSplit}
            checked={showSplit}
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
    </>
  );
}
