import { getData } from "../../helpers/apiHelpers";
import SeriesBookCase from "@/app/components/seriesBookCase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/by-series`;

  const data = await getData(api);

  return <SeriesBookCase data={data} />;
}
