import SplitBookCase from "@/app/components/splitBookCase";
import { getData } from "../../helpers/apiHelpers";

const title = "Legends - By Timeline";

export const metadata = {
  title: title,
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
