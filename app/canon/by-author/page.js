import { getData } from "../../helpers/apiHelpers";
import BookCase from "@/app/components/bookcase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/by-author`;

  const data = await getData(api);

  return (
    <div>
      {Object.entries(data.bookcase).map(([author, books]) => (
        <div key={author}>
          <h2>{author}</h2>
          <BookCase bookcase={books} />
        </div>
      ))}
    </div>
  );
}
