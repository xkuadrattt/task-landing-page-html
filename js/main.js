const menuResponsif = document.querySelector(".toggle-menu");
const navlist = document.querySelector(".navlist");
const sectionHero = document.getElementById("hero");
const sectionContent = document.getElementById("content");
const sectionServices = document.getElementById("services");

const handleMenuNav = function () {
  navlist.classList.toggle("menu-responsif");
  console.log(navlist);
};
menuResponsif.addEventListener("click", handleMenuNav);

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "content") {
        entry.target.classList.add("fade-in");
      }
      if (entry.target.id === "services") {
        entry.target.classList.add("loaded");
      }
    }

    console.log(entry);
  });
};

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};
const observer = new IntersectionObserver(callback, options);

observer.observe(sectionContent);
observer.observe(sectionServices);
