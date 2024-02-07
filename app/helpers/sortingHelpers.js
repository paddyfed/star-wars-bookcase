export function sortByReleaseDateThenId(a, b) {
  return new Date(a.releaseDate) - new Date(b.releaseDate) || a.id - b.id;
}
