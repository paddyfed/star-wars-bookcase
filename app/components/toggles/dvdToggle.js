import styles from "@/app/page.module.css";

export default function DvdToggle({ showDvds, setShowDvds }) {
  return (
    <>
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
    </>
  );
}
