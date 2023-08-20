"use strict";
const modal = document.querySelector(".home-modal");
const overlay = document.querySelector(".overlay");

const itemList = document.querySelector(".cart-list");
const itemTotal = document.querySelector(".total span");
const itemDiscount = document.querySelector(".discount span");
const itemNet = document.querySelector(".net-total span");

const cards = document.querySelectorAll(".product-card");
const input = document.querySelector(".promo-input input");

const btnApply = document.querySelector(".apply-coupon");
const btnPurchase = document.querySelector(".purchase");
const btnHome = document.querySelector(".home");

let sum = 0;
let discount = 0;

const renderPrice = function () {
  itemTotal.textContent = sum + "TK";
  itemDiscount.textContent = (sum * discount) / 100 + "TK";
  itemNet.textContent = sum - (sum * discount) / 100 + "TK";
};

cards.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") return;
    const itemName = document.createElement("li");
    itemName.textContent = el.querySelector(".product-title").textContent;
    itemList.appendChild(itemName);

    if ((btnPurchase.disabled = true)) btnPurchase.disabled = false;

    sum += parseFloat(el.querySelector(".product-price").textContent);
    renderPrice();
  });
});

btnApply.addEventListener("click", () => {
  if (sum >= 200 && input.value === "SELL200") {
    discount = 20;
    renderPrice();
  }
  return;
});

btnPurchase.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnHome.addEventListener("click", () => {
  sum = 0;
  discount = 0;
  itemList.innerHTML = "";
  btnPurchase.disabled = true;

  renderPrice();

  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
