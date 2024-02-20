import Book from "@/app/components/book";
import styles from "../page.module.css";

export default function BookCase({
  bookcase,
  onlyShowBoughtBooks,
  showNovels,
  showDvds,
  showYoungAdult,
  showVhs,
  showGame,
  showComic,
  showLegendsEpicCollection,
  showOmnibus,
  showTv,
}) {
  function parseQuery(value) {
    const queryFilter = [];
    if (showNovels === true) queryFilter.push("novel");
    if (showDvds === true) queryFilter.push("dvd");
    if (showVhs === true) queryFilter.push("vhs");
    if (showYoungAdult === true) queryFilter.push("ya");
    if (showGame === true) queryFilter.push("game");
    if (showTv === true) queryFilter.push("tv");
    if (showComic === true) queryFilter.push("comic");
    if (queryFilter.includes(value.type)) return true;

    if (
      showLegendsEpicCollection === true &&
      value.series === "Legends Epic Collection"
    )
      return true;
    if (showOmnibus === true && value.series === "Omnibus") return true;

    return false;
  }

  function parseBoughtBooksQuery(value) {
    if (!Object.hasOwn(value, "bought")) return true;

    if (onlyShowBoughtBooks === true && value.bought !== true) return false;

    return true;
  }

  const returnValue = bookcase
    .filter((b) => parseBoughtBooksQuery(b))
    .filter((d) => parseQuery(d));

  if (returnValue.length === 0) {
    return <div className={styles.bookcase}>Empty</div>;
  }

  return (
    <>
      <div className={styles.bookcase}>
        {returnValue.map((book) => {
          return (
            <Book
              book={book}
              key={book.id}
              onlyShowBoughtBooks={onlyShowBoughtBooks}
            />
          );
        })}
      </div>
    </>
  );
}
