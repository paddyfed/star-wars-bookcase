import { getData } from "../../helpers/apiHelpers";
import BookCase from "@/app/components/bookcase";

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/timeline-order`;

  const data = await getData(api);

  return <BookCase bookcase={data} />;
}
