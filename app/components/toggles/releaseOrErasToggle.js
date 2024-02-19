import MediaToggle from "./mediaToggle";

export default function ReleaseOrErasToggle({
  showSplit,
  setShowSplit,
  releaseOrTimeline = "Show Release Year",
  showReleaseOrErasToggle = true,
  onlyShowBoughtBooks,
  setOnlyShowBoughtBooks,
}) {
  return (
    <>
      {showReleaseOrErasToggle && (
        <MediaToggle
          toggleLabel={releaseOrTimeline}
          toggleId={"switch"}
          onChangeEventHandler={setShowSplit}
          checkedValue={showSplit}
        />
      )}
      <MediaToggle
        toggleLabel={"Only show bought books"}
        toggleId={"switchNotBought"}
        onChangeEventHandler={setOnlyShowBoughtBooks}
        checkedValue={onlyShowBoughtBooks}
      />
    </>
  );
}
