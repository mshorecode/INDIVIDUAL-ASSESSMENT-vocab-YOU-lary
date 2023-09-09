const sortAscending = (a, b) => a.timeSubmitted.localeCompare(b.timeSubmitted);
const sortDescending = (a, b) => b.timeSubmitted.localeCompare(a.timeSubmitted);
const sortAlphabetically = (a, b) => a.title > b.title;

export {
  sortAscending,
  sortDescending,
  sortAlphabetically,
};
