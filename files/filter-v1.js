(() => {
  function initializeFilters() {
    const filters = document.querySelectorAll(
      ".legend-item[data-topic]"
    );

    const researchSections =
      document.querySelectorAll(".research-topic");

    const targets = researchSections.length
      ? researchSections
      : document.querySelectorAll(".ref-item");

    let activeTopic = null;

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const topic = filter.dataset.topic;

        if (activeTopic === topic) {
          activeTopic = null;
          filter.classList.remove("active");

          targets.forEach((target) => {
            target.classList.remove("hidden");
          });

          return;
        }

        activeTopic = topic;

        filters.forEach((item) => {
          item.classList.toggle("active", item === filter);
        });

        targets.forEach((target) => {
          target.classList.toggle(
            "hidden",
            !target.classList.contains(topic)
          );
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeFilters);
  } else {
    initializeFilters();
  }
})();
