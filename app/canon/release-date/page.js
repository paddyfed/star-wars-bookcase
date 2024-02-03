import { getData } from "../../helpers/apiHelpers";
import SplitBookCase from "@/app/components/splitBookCase";

const title = "Canon - By Release Date";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/release-date`;

  const data = await getData(api);

  return <SplitBookCase data={data} title={title} />;
}
