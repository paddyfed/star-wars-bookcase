import { getData } from "../../helpers/apiHelpers";
import TimeLineOrderBookCase from "@/app/components/timelineOrderBookCase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/timeline-order`;

  const data = await getData(api);

  return (
    <>
      <h2>Canon - By Timeline</h2>
      <TimeLineOrderBookCase data={data} />
    </>
  );
}
