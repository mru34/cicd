// MEMBER B: Implement the search feature.
window.matchesSearch = function (event, query) {
  const term = (query || "").trim().toLowerCase();
  if (term === "") {
  return true;
  };

  const title = (event.title || "").toLowerCase();
  const location = (event.location || "").toLowerCase();

  return title.includes(term) || location.includes(term);
};
