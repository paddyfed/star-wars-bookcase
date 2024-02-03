import SplitBookCase from "@/app/components/splitBookCase";
import { getData } from "../../helpers/apiHelpers";

const title = "Legends - By Author";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/by-author`;

  const data = await getData(api);

  return (
    <SplitBookCase
      data={data}
      title={title}
      showReleaseOrErasToggle={false}
      showSplitPass={true}
    />
  );
}
