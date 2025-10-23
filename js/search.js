// =======================
// 🔍 SEARCH PANEL
// =======================
const searchBtn = document.querySelector("#search");
const searchPanel = document.querySelector(".search-panel");
const closeSearch = document.querySelector("#closeSearch");
const searchInput = document.querySelector("#searchInput");

if (searchBtn && searchPanel) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchPanel.classList.toggle("active");
    searchInput.focus();
  });

  closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!searchPanel.contains(e.target) && !searchBtn.contains(e.target)) {
      searchPanel.classList.remove("active");
    }
  });

  // Fitur pencarian menu
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    document.querySelectorAll(".menu-card").forEach((card) => {
      const name = card
        .querySelector(".menu-card-title")
        .textContent.toLowerCase();
      card.style.display = name.includes(keyword) ? "block" : "none";
    });
  });
}
