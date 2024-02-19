import styles from "@/app/page.module.css";

export default function GameToggle({ showGame, setShowGame }) {
  return (
    <>
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
    </>
  );
}
