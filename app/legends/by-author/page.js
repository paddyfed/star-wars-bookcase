import SplitBookCase from "@/app/components/splitBookCase";
import { getData } from "../../helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/by-author`;

  const data = await getData(api);

  const title = "Legends - By Author";

  return <SplitBookCase data={data} title={title} />;
}
