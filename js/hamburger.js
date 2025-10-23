// =======================
// 🍔 HAMBURGER MENU
// =======================
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    navbarNav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}
