import SplitBookCase from "./components/splitBookCase";
import getApiData from "./helpers/getApiData";

const title = "Home - Legends - By Timeline";

export const metadata = {
  title: `Star Wars Bookcase - ${title}`,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/timeline-order`;

  const data = await getApiData(api);

  return (
    <SplitBookCase
      data={data}
      title={title}
      releaseOrTimeline="Show Publishing Eras"
    />
  );
}
