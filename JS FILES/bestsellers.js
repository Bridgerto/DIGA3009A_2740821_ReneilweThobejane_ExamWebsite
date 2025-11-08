let cart = JSON.parse(localStorage.getItem("lumeaCart")) || [];

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const toast = document.getElementById("toast");

function updateCartBadge() 
{
  const cartLink = document.querySelector(".Cart");
  if (!cartLink) return;

  let badge = cartLink.querySelector(".cart-badge");
  if (!badge) 
  {
    badge = document.createElement("span");
    badge.classList.add("cart-badge");
    badge.style.position = "absolute";
    badge.style.top = "5px";
    badge.style.right = "-10px";
    badge.style.background = "#2C2C2C";
    badge.style.color = "white";
    badge.style.borderRadius = "50%";
    badge.style.fontSize = "0.7rem";
    badge.style.padding = "3px 6px";
    badge.style.fontFamily = "Itim, cursive";
    cartLink.style.position = "relative";
    cartLink.appendChild(badge);
  }
  badge.textContent = cart.length;
}


function showToast(message) 
{
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}


addToCartButtons.forEach((btn) => 
{
  btn.addEventListener("click", (e) => 
  {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    cart.push({ name, price });
    localStorage.setItem("lumeaCart", JSON.stringify(cart));

    updateCartBadge();
    showToast(`Added to cart: ${name}`);
  });
});

updateCartBadge();