export default async function getApiData(api) {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
