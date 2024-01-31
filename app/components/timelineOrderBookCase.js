"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import SplitBookCase from "./splitBookCase";
import CombinedBookCase from "./combinedBookCase";
import FilterToggle from "./filterToggle";

export default function TimeLineOrderBookCase({ data, title }) {
  const [show, setShow] = useState(false);
  const [onlyShowBoughtBooks, setOnlyShowBoughtBooks] = useState(false);

  return (
    <>
      <header className={styles.toggleSwitchHeader}>
        {title && <h2>{title}</h2>}
        <FilterToggle
          onlyShowBoughtBooks={onlyShowBoughtBooks}
          show={show}
          setShow={() => setShow(!show)}
          setOnlyShowBoughtBooks={() =>
            setOnlyShowBoughtBooks(!onlyShowBoughtBooks)
          }
          releaseOrTimeline={"Show Publishing Eras"}
        />
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
