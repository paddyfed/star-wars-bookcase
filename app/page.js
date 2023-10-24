import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}api`;

  const data = await getData(api);

  return (
    <>
      {data.bookcase.map((book) => {
        return <div key={book.id}>{book.id}</div>;
      })}
    </>
  );
}
