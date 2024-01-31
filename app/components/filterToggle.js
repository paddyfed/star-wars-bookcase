import styles from "@/app/page.module.css";

export default function FilterToggle({
  onlyShowBoughtBooks,
  show,
  setShow,
  setOnlyShowBoughtBooks,
}) {
  return (
    <div>
      <span className={styles.toggleSwitch}>
        <input type="checkbox" id="switch" onChange={setShow} checked={show} />
        <label htmlFor="switch" className={styles.toggleSwitchLabel}>
          Show Release Year
        </label>
      </span>
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
    </div>
  );
}
