import styles from "@/app/page.module.css";

export default function YoungAdultToggle({
  showYoungAdult,
  setShowYoungAdult,
}) {
  return (
    <>
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
    </>
  );
}
