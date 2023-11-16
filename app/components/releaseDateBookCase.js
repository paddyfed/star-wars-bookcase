"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import SplitBookCase from "./splitBookCase";
import CombinedBookCase from "./combinedBookCase";

export default function ReleaseDateBookCase({ data }) {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <>
      <div className={styles.toggleSwitch}>
        <input type="checkbox" id="switch" onChange={toggle} checked={show} />
        <label htmlFor="switch" className={styles.toggleSwitchLabel}>
          Show Release Year
        </label>
      </div>
      {show ? <SplitBookCase data={data} /> : <CombinedBookCase data={data} />}
    </>
  );
}
