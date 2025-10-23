// =======================
// 🛒 CART PANEL
// =======================
const cartBtn = document.querySelector("#cart");
const cartPanel = document.querySelector(".cart-panel");
const cartItems = document.querySelector(".cart-items");
const totalPrice = document.querySelector("#totalPrice");
let total = 0;

if (cartBtn && cartPanel) {
  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    cartPanel.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!cartPanel.contains(e.target) && !cartBtn.contains(e.target)) {
      cartPanel.classList.remove("active");
    }
  });
}

// Tambah ke keranjang
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".menu-card");
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);

    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `<p>${name} - IDR ${price.toLocaleString()}</p>`;
    cartItems.appendChild(item);

    total += price;
    totalPrice.textContent = "IDR " + total.toLocaleString();
  });
});
