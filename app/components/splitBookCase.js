"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "@/app/components/bookCaseHeader";
import ComicToggle from "./toggles/comicToggle";
import ReleaseOrErasToggle from "./toggles/releaseOrErasToggle";
import MediaToggle from "./toggles/mediaToggle";

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

  const togglesToShow = [
    ...new Set(
      Object.entries(data.bookcase)
        .map((item) => item.flat())
        .flat()
        .map((item) => item.type)
    ),
  ];

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
            {togglesToShow.includes("novel") && (
              <MediaToggle
                toggleLabel={"Novel"}
                toggleId={"switchNovel"}
                checkedValue={showNovels}
                onChangeEventHandler={() => setShowNovels(!showNovels)}
              />
            )}

            {togglesToShow.includes("ya") && (
              <MediaToggle
                toggleLabel={"Young Adult"}
                toggleId={"switchYoungAdult"}
                onChangeEventHandler={() => setShowYoungAdult(!showYoungAdult)}
                checkedValue={showYoungAdult}
              />
            )}
            {togglesToShow.includes("dvd") && (
              <MediaToggle
                toggleLabel={"DVD"}
                toggleId={"switchDvd"}
                onChangeEventHandler={() => setShowDvds(!showDvds)}
                checkedValue={showDvds}
              />
            )}
            {togglesToShow.includes("vhs") && (
              <MediaToggle
                toggleLabel={"VHS"}
                toggleId={"switchVhs"}
                checkedValue={showVhs}
                onChangeEventHandler={() => setShowVhs(!showVhs)}
              />
            )}
            {togglesToShow.includes("game") && (
              <MediaToggle
                toggleLabel={"Game"}
                toggleId={"switchGame"}
                checkedValue={showGame}
                onChangeEventHandler={() => setShowGame(!showGame)}
              />
            )}
            {togglesToShow.includes("tv") && (
              <MediaToggle
                toggleLabel={"TV"}
                toggleId={"switchTv"}
                checkedValue={showTv}
                onChangeEventHandler={() => setShowTv(!showTv)}
              />
            )}
            {togglesToShow.includes("comic") && (
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
            )}
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
