import ReleaseDateBookCase from "@/app/components/releaseDateBookCase";
import { getData } from "../../helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/release-date`;

  const data = await getData(api);

  return <ReleaseDateBookCase data={data} />;
}
