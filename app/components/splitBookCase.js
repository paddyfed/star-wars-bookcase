"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "@/app/components/bookCaseHeader";
import FilterToggle from "./filterToggle";

export default function SplitBookCase({
  data,
  title,
  showReleaseOrErasToggle,
}) {
  const [showNovels, setShowNovels] = useState(true);
  const [onlyShowBoughtBooks, setOnlyShowBoughtBooks] = useState(false);

  return (
    <>
      {title && (
        <header className={styles.toggleSwitchHeader}>
          <h2>{title}</h2>
          <FilterToggle
            showReleaseOrErasToggle={showReleaseOrErasToggle}
            showNovels={showNovels}
            setShowNovels={() => setShowNovels(!showNovels)}
            onlyShowBoughtBooks={onlyShowBoughtBooks}
            setOnlyShowBoughtBooks={() =>
              setOnlyShowBoughtBooks(!onlyShowBoughtBooks)
            }
          />
        </header>
      )}
      <div className={styles.splitBookCases}>
        {Object.entries(data.bookcase).map(([groupItem, books]) => (
          <div key={groupItem} className={styles.splitBookCase}>
            <BookCaseHeader header={groupItem} />
            <BookCase
              bookcase={books}
              onlyShowBoughtBooks={onlyShowBoughtBooks}
              showNovels={showNovels}
            />
          </div>
        ))}
      </div>
    </>
  );
}
