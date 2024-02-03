import { getData } from "../../helpers/apiHelpers";
import SplitBookCase from "@/app/components/splitBookCase";

const title = "Canon - By Timeline";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/timeline-order`;

  const data = await getData(api);

  return (
    <SplitBookCase
      data={data}
      title={title}
      releaseOrTimeline="Show Publishing Eras"
    />
  );
}
