import { getData } from "../../helpers/apiHelpers";
import SplitBookCase from "@/app/components/splitBookCase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/by-series`;

  const data = await getData(api);

  return (
    <>
      <h2>Canon - By Series</h2>
      <SplitBookCase data={data} />
    </>
  );
}
