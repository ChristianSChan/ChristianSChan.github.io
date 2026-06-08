const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const filterButtons = document.querySelectorAll(".filter-button");
const publications = document.querySelectorAll(".publication");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    publications.forEach((publication) => {
      const isMatch = filter === "all" || publication.dataset.category === filter;
      publication.classList.toggle("is-hidden", !isMatch);
    });
  });
});
