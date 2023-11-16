"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import SplitBookCase from "./splitBookCase";
import CombinedBookCase from "./combinedBookCase";

export default function TimeLineOrderBookCase({ data }) {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <>
      <div className={styles.toggleSwitch}>
        <input type="checkbox" id="switch" onChange={toggle} checked={show} />
        <label htmlFor="switch" className={styles.toggleSwitchLabel}>
          Show Publishing Eras
        </label>
      </div>
      {show ? <SplitBookCase data={data} /> : <CombinedBookCase data={data} />}
    </>
  );
}
