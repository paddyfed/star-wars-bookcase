import SplitBookCase from "@/app/components/splitBookCase";
import getApiData from "@/app/helpers/getApiData";

const title = "Legends - By Author";

export const metadata = {
  title: title,
};

export default async function Home() {
  const api = `${process.env.API_URL}/books/legends/by-author`;

  const data = await getApiData(api);

  return (
    <SplitBookCase
      data={data}
      title={title}
      showReleaseOrErasToggle={false}
      showSplitPass={true}
    />
  );
}
