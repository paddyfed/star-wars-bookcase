"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import SplitBookCase from "./splitBookCase";
import CombinedBookCase from "./combinedBookCase";

export default function ReleaseDateBookCase({ data }) {
  const [show, setShow] = useState(false);
  const [showNotBought, setShowNotBought] = useState(true);

  function toggle() {
    setShow(!show);
  }

  function toggleNotBought() {
    setShowNotBought(!showNotBought);
    const hello = document.querySelectorAll(`.${styles.notbought}`);
    console.log(hello);
    hello.forEach((item) => {
      item.classList.toggle(styles.hidden);
    });
  }

  return (
    <>
      <div className={styles.toggleSwitch}>
        <input type="checkbox" id="switch" onChange={toggle} checked={show} />
        <label htmlFor="switch" className={styles.toggleSwitchLabel}>
          Show Release Year
        </label>
      </div>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="switchNotBought"
          onChange={toggleNotBought}
          checked={showNotBought}
        />
        <label htmlFor="switchNotBought" className={styles.toggleSwitchLabel}>
          Show Bought Books
        </label>
      </div>
      {show ? <SplitBookCase data={data} /> : <CombinedBookCase data={data} />}
    </>
  );
}
