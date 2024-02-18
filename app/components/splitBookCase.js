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
  showSplitPass = false,
  releaseOrTimeline,
}) {
  const [showNovels, setShowNovels] = useState(true);
  const [showDvds, setShowDvds] = useState(true);
  const [showYoungAdult, setShowYoungAdult] = useState(true);
  const [showVhs, setShowVhs] = useState(true);
  const [showGame, setShowGame] = useState(true);
  const [onlyShowBoughtBooks, setOnlyShowBoughtBooks] = useState(false);
  const [showTv, setShowTv] = useState(true);
  const [showComic, setShowComic] = useState(true);
  const [showLegendsEpicCollection, setShowLegendsEpicCollection] =
    useState(true);
  const [showOmnibus, setShowOmnibus] = useState(true);
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
            showGame={showGame}
            setShowGame={() => setShowGame(!showGame)}
            showTv={showTv}
            setShowTv={() => setShowTv(!showTv)}
            showComic={showComic}
            setShowComic={() => {
              if (showComic === true) {
                setShowLegendsEpicCollection(false);
                setShowOmnibus(false);
              }
              if (showComic === false) {
                setShowLegendsEpicCollection(true);
                setShowOmnibus(true);
              }
              setShowComic(!showComic);
            }}
            showLegendsEpicCollection={showLegendsEpicCollection}
            setShowLegendsEpicCollection={() => {
              if (showLegendsEpicCollection === true) {
                setShowComic(false);
              }
              if (showLegendsEpicCollection === false && showOmnibus === true) {
                setShowComic(true);
              }
              setShowLegendsEpicCollection(!showLegendsEpicCollection);
            }}
            showOmnibus={showOmnibus}
            setShowOmnibus={() => {
              if (showOmnibus === true) {
                setShowComic(false);
              }
              if (showOmnibus === false && showLegendsEpicCollection === true) {
                setShowComic(true);
              }
              setShowOmnibus(!showOmnibus);
            }}
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
          {Object.entries(data.bookcase).map(([groupItem, bookcase]) => (
            <div key={groupItem} className={styles.splitBookCase}>
              <BookCaseHeader header={groupItem} />
              <BookCase
                bookcase={bookcase}
                onlyShowBoughtBooks={onlyShowBoughtBooks}
                showNovels={showNovels}
                showDvds={showDvds}
                showYoungAdult={showYoungAdult}
                showVhs={showVhs}
                showGame={showGame}
                showTv={showTv}
                showComic={showComic}
                showLegendsEpicCollection={showLegendsEpicCollection}
                showOmnibus={showOmnibus}
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
          showGame={showGame}
          showTv={showTv}
          showComic={showComic}
          showLegendsEpicCollection={showLegendsEpicCollection}
          showOmnibus={showOmnibus}
        />
      )}
    </>
  );
}
