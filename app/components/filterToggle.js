import styles from "@/app/page.module.css";

export default function FilterToggle({
  onlyShowBoughtBooks,
  showSplit,
  setShowSplit,
  setOnlyShowBoughtBooks,
  releaseOrTimeline = "Show Release Year",
  showNovels,
  setShowNovels,
  showDvds,
  setShowDvds,
  showYoungAdult,
  setShowYoungAdult,
  showVhs,
  setShowVhs,
  showGame,
  setShowGame,
  showTv,
  setShowTv,
  showReleaseOrErasToggle = true,
}) {
  return (
    <div>
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
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchYoungAdult"
          onChange={setShowYoungAdult}
          checked={showYoungAdult}
        />
        <label htmlFor="switchYoungAdult" className={styles.toggleSwitchLabel}>
          Young Adult
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchDvds"
          onChange={setShowDvds}
          checked={showDvds}
        />
        <label htmlFor="switchDvds" className={styles.toggleSwitchLabel}>
          DVD
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchVhs"
          onChange={setShowVhs}
          checked={showVhs}
        />
        <label htmlFor="switchVhs" className={styles.toggleSwitchLabel}>
          VHS
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchGame"
          onChange={setShowGame}
          checked={showGame}
        />
        <label htmlFor="switchGame" className={styles.toggleSwitchLabel}>
          Game
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchTv"
          onChange={setShowTv}
          checked={showTv}
        />
        <label htmlFor="switchTv" className={styles.toggleSwitchLabel}>
          TV
        </label>
      </span>
    </div>
  );
}
