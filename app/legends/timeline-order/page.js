import SplitBookCase from "@/app/components/splitBookCase";
import getApiData from "@/app/helpers/getApiData";

const title = "Legends - By Timeline";

export const metadata = {
  title: title,
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
