import styles from "@/app/page.module.css";

export default function ComicToggle({
  showComic,
  setShowComic,
  showLegendsEpicCollection,
  setShowLegendsEpicCollection,
  showOmnibus,
  setShowOmnibus,
}) {
  return (
    <>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchComic"
          onChange={setShowComic}
          checked={showComic}
        />
        <label htmlFor="switchComic" className={styles.toggleSwitchLabel}>
          Comic
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchLegendsEpicCollection"
          onChange={setShowLegendsEpicCollection}
          checked={showLegendsEpicCollection}
        />
        <label
          htmlFor="switchLegendsEpicCollection"
          className={styles.toggleSwitchLabel}
        >
          Legends Epic Collection
        </label>
      </span>
      <span className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchOmnibus"
          onChange={setShowOmnibus}
          checked={showOmnibus}
        />
        <label htmlFor="switchOmnibus" className={styles.toggleSwitchLabel}>
          Omnibus
        </label>
      </span>
    </>
  );
}
