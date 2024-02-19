import styles from "@/app/page.module.css";

export default function TvToggle({ showTv, setShowTv }) {
  return (
    <>
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
    </>
  );
}
