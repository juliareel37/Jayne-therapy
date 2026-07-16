const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (nav && navToggle && navLinks) {
  function setNavOpen(isOpen) {
    nav.dataset.navOpen = String(isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close main menu" : "Open main menu");
  }

  navToggle.addEventListener("click", () => {
    setNavOpen(nav.dataset.navOpen !== "true");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setNavOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (nav.dataset.navOpen === "true" && !nav.contains(event.target)) {
      setNavOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.dataset.navOpen === "true") {
      setNavOpen(false);
      navToggle.focus();
    }
  });
}
