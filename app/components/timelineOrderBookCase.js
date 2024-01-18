"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import SplitBookCase from "./splitBookCase";
import CombinedBookCase from "./combinedBookCase";

export default function TimeLineOrderBookCase({ data, title }) {
  const [show, setShow] = useState(false);
  const [onlyShowBoughtBooks, setOnlyShowBoughtBooks] = useState(false);

  function toggle() {
    setShow(!show);
  }
  function toggleOnlyShowBoughtBooks() {
    setOnlyShowBoughtBooks(!onlyShowBoughtBooks);
  }

  return (
    <>
      <header className={styles.toggleSwitchHeader}>
        {title && <h2>{title}</h2>}
        <div>
          <span className={styles.toggleSwitch}>
            <input
              type="checkbox"
              id="switch"
              onChange={toggle}
              checked={show}
            />
            <label htmlFor="switch" className={styles.toggleSwitchLabel}>
              Show Publishing Eras
            </label>
          </span>
          <span className={styles.toggleSwitch}>
            <input
              type="checkbox"
              id="onlyShowBoughtBooksCheckBox"
              onChange={toggleOnlyShowBoughtBooks}
              checked={onlyShowBoughtBooks}
            />
            <label
              htmlFor="onlyShowBoughtBooksCheckBox"
              className={styles.toggleSwitchLabel}
            >
              Only show bought books
            </label>
          </span>
        </div>
      </header>
      {show ? (
        <SplitBookCase data={data} onlyShowBoughtBooks={onlyShowBoughtBooks} />
      ) : (
        <CombinedBookCase
          data={data}
          onlyShowBoughtBooks={onlyShowBoughtBooks}
        />
      )}
    </>
  );
}
