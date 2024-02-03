import SplitBookCase from "./components/splitBookCase";
import { getData } from "./helpers/apiHelpers";

const title = "Home - Legends - By Timeline";

export const metadata = {
  title: `Star Wars Bookcase - ${title}`,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/timeline-order`;

  const data = await getData(api);

  return (
    <SplitBookCase
      data={data}
      title={title}
      releaseOrTimeline="Show Publishing Eras"
    />
  );
}
