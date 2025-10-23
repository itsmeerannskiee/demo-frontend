// ===============
// 🌟 MAIN SCRIPT
// ===============

// Cek user login
const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  window.location.href = "login.html";
} else {
  const pengaturanPanel = document.querySelector(".pengaturan-panel");
  pengaturanPanel.innerHTML = `
    <p>Halo, ${user.username}</p>
    <a href="#" id="logoutBtn">Logout</a>
  `;
}

// Jalankan Feather Icons
feather.replace();

// Import semua modul JS
// import "./hamburger.js";
// import "./pengaturan.js";
// import "./search.js";
// import "./cart.js";
