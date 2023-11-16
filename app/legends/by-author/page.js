import SplitBookCase from "@/app/components/splitBookCase";
import { getData } from "../../helpers/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/by-author`;

  const data = await getData(api);

  return (
    <>
      <h2>Legends - By Author</h2>
      <SplitBookCase data={data} />;
    </>
  );
}
