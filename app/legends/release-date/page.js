import ReleaseDateBookCase from "@/app/components/releaseDateBookCase";
import { getData } from "../../helpers/apiHelpers";

const title = "Legends - By Release Date";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/release-date`;

  const data = await getData(api);

  return <ReleaseDateBookCase data={data} title={title} />;
}
