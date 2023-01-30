// MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mob-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  if (link.className === "nav-link nav-cta" || link.className === "about-cta")
    return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to the section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log;
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Open in new tab
    if (href !== "#" && href.startsWith("https")) {
      window.open(href, "_blank");
    }

    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// STICKY NAVIGATION
const sectionHome = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHome);
