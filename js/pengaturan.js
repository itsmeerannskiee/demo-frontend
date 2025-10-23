// =======================
// ⚙️ PANEL PENGATURAN
// =======================
const pengaturanBtn = document.querySelector("#pengaturan");
const pengaturanPanel = document.querySelector(".pengaturan-panel");

if (pengaturanBtn && pengaturanPanel) {
  pengaturanBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    pengaturanPanel.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !pengaturanPanel.contains(e.target) &&
      !pengaturanBtn.contains(e.target)
    ) {
      pengaturanPanel.classList.remove("active");
    }
  });
}

// === LOGOUT ===
document.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    e.preventDefault();
    if (confirm("Apakah Anda yakin ingin logout?")) {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    }
  }
});
