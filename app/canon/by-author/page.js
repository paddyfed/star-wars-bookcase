import { getData } from "../../helpers/apiHelpers";
import AuthorsBookCase from "@/app/components/authorsBookCase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/canon/by-author`;

  const data = await getData(api);

  return <AuthorsBookCase data={data} />;
}
