import { getData } from "./helpers/apiHelpers";
import TimeLineOrderBookCase from "@/app/components/timelineOrderBookCase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/timeline-order`;

  const data = await getData(api);

  const title = "Home - Legends - By Timeline";

  return <TimeLineOrderBookCase data={data} title={title} />;
}
