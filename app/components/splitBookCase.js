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
  showSplitPass,
  releaseOrTimeline,
}) {
  const [showNovels, setShowNovels] = useState(true);
  const [showDvds, setShowDvds] = useState(true);
  const [showYoungAdult, setShowYoungAdult] = useState(true);
  const [showVhs, setShowVhs] = useState(true);
  const [onlyShowBoughtBooks, setOnlyShowBoughtBooks] = useState(false);
  const [showSplit, setShowSplit] = useState(showSplitPass);

  return (
    <>
      {title && (
        <header className={styles.toggleSwitchHeader}>
          <h2>{title}</h2>
          <FilterToggle
            showSplit={showSplit}
            showReleaseOrErasToggle={showReleaseOrErasToggle}
            showNovels={showNovels}
            setShowNovels={() => setShowNovels(!showNovels)}
            showDvds={showDvds}
            setShowDvds={() => setShowDvds(!showDvds)}
            showYoungAdult={showYoungAdult}
            setShowYoungAdult={() => setShowYoungAdult(!showYoungAdult)}
            showVhs={showVhs}
            setShowVhs={() => setShowVhs(!showVhs)}
            onlyShowBoughtBooks={onlyShowBoughtBooks}
            setOnlyShowBoughtBooks={() =>
              setOnlyShowBoughtBooks(!onlyShowBoughtBooks)
            }
            setShowSplit={() => setShowSplit(!showSplit)}
            releaseOrTimeline={releaseOrTimeline}
          />
        </header>
      )}
      {showSplit ? (
        <div className={styles.splitBookCases}>
          {Object.entries(data.bookcase).map(([groupItem, books]) => (
            <div key={groupItem} className={styles.splitBookCase}>
              <BookCaseHeader header={groupItem} />
              <BookCase
                bookcase={books}
                onlyShowBoughtBooks={onlyShowBoughtBooks}
                showNovels={showNovels}
                showDvds={showDvds}
                showYoungAdult={showYoungAdult}
                showVhs={showVhs}
              />
            </div>
          ))}
        </div>
      ) : (
        <BookCase
          bookcase={Object.values(data.bookcase).flat()}
          onlyShowBoughtBooks={onlyShowBoughtBooks}
          showNovels={showNovels}
          showDvds={showDvds}
          showYoungAdult={showYoungAdult}
          showVhs={showVhs}
        />
      )}
    </>
  );
}
