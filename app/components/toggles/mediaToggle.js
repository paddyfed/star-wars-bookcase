import styles from "@/app/page.module.css";

export default function MediaToggle({
  toggleLabel,
  toggleId,
  onChangeEventHandler,
  checkedValue,
}) {
  return (
    <label htmlFor={toggleId} className={styles.toggleSwitchLabel}>
      <input
        className={styles.toggleSwitch}
        type="checkbox"
        id={toggleId}
        onChange={onChangeEventHandler}
        checked={checkedValue}
      />
      {toggleLabel}
    </label>
  );
}
