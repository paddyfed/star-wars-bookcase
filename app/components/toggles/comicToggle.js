import MediaToggle from "./mediaToggle";

export default function ComicToggle({
  showComic,
  setShowComic,
  showLegendsEpicCollection,
  setShowLegendsEpicCollection,
  showOmnibus,
  setShowOmnibus,
}) {
  return (
    <>
      <MediaToggle
        toggleLabel={"Comic"}
        toggleId={"switchComic"}
        onChangeEventHandler={setShowComic}
        checkedValue={showComic}
      />
      <MediaToggle
        toggleLabel={"Legends Epic Collection"}
        toggleId={"switchLegendsEpicCollection"}
        onChangeEventHandler={setShowLegendsEpicCollection}
        checkedValue={showLegendsEpicCollection}
      />
      <MediaToggle
        toggleLabel={"Omnibus"}
        toggleId={"switchOmnibus"}
        onChangeEventHandler={setShowOmnibus}
        checkedValue={showOmnibus}
      />
    </>
  );
}
