import styles from "@/app/page.module.css";

export default function VhsToggle({ showVhs, setShowVhs }) {
  return (
    <>
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
    </>
  );
}
