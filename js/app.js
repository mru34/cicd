// Shared rendering code. Students do not need to modify this file.
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const eventList = document.getElementById("event-list");
  const eventCount = document.getElementById("event-count");

  function renderEvents() {
    const query = searchInput.value;
    const category = categorySelect.value;
    const visibleEvents = window.EVENTS.filter(function (event) {
      return window.matchesSearch(event, query) &&
        window.matchesCategory(event, category);
    });

    eventList.replaceChildren();
    eventCount.textContent = visibleEvents.length + " event(s)";

    if (visibleEvents.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "empty-state";
      emptyMessage.textContent = "No events match your search. Try a different term or category.";
      eventList.appendChild(emptyMessage);
      return;
    }

    visibleEvents.forEach(function (event) {
      const card = document.createElement("article");
      card.className = "event-card";

      const categoryBadge = document.createElement("span");
      categoryBadge.className = "category-badge";
      categoryBadge.textContent = event.category;

      const title = document.createElement("h3");
      title.textContent = event.title;

      const details = document.createElement("p");
      details.className = "event-details";
      details.textContent = event.date + " · " + event.location;

      const description = document.createElement("p");
      description.textContent = event.description;

      card.append(categoryBadge, title, details, description);
      eventList.appendChild(card);
    });
  }

  searchInput.addEventListener("input", renderEvents);
  categorySelect.addEventListener("change", renderEvents);
  renderEvents();
});
