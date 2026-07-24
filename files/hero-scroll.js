(() => {
  function initializeHero() {
    const hero = document.querySelector(".hero-section");
    const header = document.querySelector("#quarto-header");
    const scrollButton = document.querySelector(".hero-scroll-down");

    if (!hero) return;

    function updateHero() {
      const fadeDistance = window.innerHeight * 0.75;
      const progress = Math.min(window.scrollY / fadeDistance, 1);

      hero.style.opacity = String(1 - progress);
      hero.style.visibility = progress >= 1 ? "hidden" : "visible";

      document.body.classList.toggle(
        "hero-view-active",
        progress < 0.95
      );

      if (header) {
        header.style.opacity = String(progress);
        header.style.pointerEvents =
          progress > 0.85 ? "auto" : "none";
      }
    }

    if (scrollButton) {
      scrollButton.addEventListener("click", () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        });
      });
    }

    updateHero();
    window.addEventListener("scroll", updateHero, { passive: true });
    window.addEventListener("resize", updateHero);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHero);
  } else {
    initializeHero();
  }
})();
