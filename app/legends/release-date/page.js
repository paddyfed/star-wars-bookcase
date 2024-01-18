import ReleaseDateBookCase from "@/app/components/releaseDateBookCase";
import { getData } from "../../helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/release-date`;

  const data = await getData(api);

  const title = "Legends - By Release Date";

  return <ReleaseDateBookCase data={data} title={title} />;
}
