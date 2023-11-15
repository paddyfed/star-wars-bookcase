"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import BookCase from "@/app/components/bookcase";
import BookCaseHeader from "./bookCaseHeader";
import Book from "./book";
import { Fragment } from "react";

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
      {show ? (
        <div className={styles.authorsBookCases}>
          {Object.entries(data.bookcase).map(([releaseDate, books]) => (
            <div key={releaseDate} className={styles.authorBookCase}>
              <BookCaseHeader header={releaseDate} />
              <BookCase bookcase={books} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.bookcase}>
          {Object.entries(data.bookcase).map(([releaseDate, books]) => (
            <Fragment key={releaseDate}>
              {books.map((book) => {
                return <Book book={book} key={book.id} />;
              })}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
