"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "@/app/components/bookCaseHeader";
import ComicToggle from "./toggles/comicToggle";
import ReleaseOrErasToggle from "./toggles/releaseOrErasToggle";
import NovelsToggle from "./toggles/novelsToggle";
import DvdToggle from "./toggles/dvdToggle";
import YoungAdultToggle from "./toggles/youngAdultToggle";
import VhsToggle from "./toggles/vhsToggle";
import GameToggle from "./toggles/gameToggle";
import TvToggle from "./toggles/tvToggle";

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
          <div>
            <ReleaseOrErasToggle
              showReleaseOrErasToggle={showReleaseOrErasToggle}
              showSplit={showSplit}
              setShowSplit={() => setShowSplit(!showSplit)}
              releaseOrTimeline={releaseOrTimeline}
              onlyShowBoughtBooks={onlyShowBoughtBooks}
              setOnlyShowBoughtBooks={() =>
                setOnlyShowBoughtBooks(!onlyShowBoughtBooks)
              }
            />
            <NovelsToggle
              showNovels={showNovels}
              setShowNovels={() => setShowNovels(!showNovels)}
            />
            <YoungAdultToggle
              showYoungAdult={showYoungAdult}
              setShowYoungAdult={() => setShowYoungAdult(!showYoungAdult)}
            />
            <DvdToggle
              showDvds={showDvds}
              setShowDvds={() => setShowDvds(!showDvds)}
            />
            <VhsToggle
              showVhs={showVhs}
              setShowVhs={() => setShowVhs(!showVhs)}
            />
            <GameToggle
              showGame={showGame}
              setShowGame={() => setShowGame(!showGame)}
            />
            <TvToggle showTv={showTv} setShowTv={() => setShowTv(!showTv)} />
            <ComicToggle
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
                if (
                  showLegendsEpicCollection === false &&
                  showOmnibus === true
                ) {
                  setShowComic(true);
                }
                setShowLegendsEpicCollection(!showLegendsEpicCollection);
              }}
              showOmnibus={showOmnibus}
              setShowOmnibus={() => {
                if (showOmnibus === true) {
                  setShowComic(false);
                }
                if (
                  showOmnibus === false &&
                  showLegendsEpicCollection === true
                ) {
                  setShowComic(true);
                }
                setShowOmnibus(!showOmnibus);
              }}
            />
          </div>
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
