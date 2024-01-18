import { getData } from "../../helpers/apiHelpers";
import TimeLineOrderBookCase from "@/app/components/timelineOrderBookCase";

const title = "Canon - By Timeline";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/timeline-order`;

  const data = await getData(api);

  return <TimeLineOrderBookCase data={data} title={title} />;
}
