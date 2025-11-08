
let cart = JSON.parse(localStorage.getItem("lumeaCart")) || [];
const toast = document.getElementById("toast");

// Update cart badge
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

// Toast message
function showToast(message) 
{
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Add to cart
document.querySelectorAll(".add-to-cart").forEach((btn) => 
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

// Carousel arrows
document.querySelectorAll(".product-carousel").forEach((carousel) => 
{
  const track = carousel.querySelector(".carousel-track");
  const left = carousel.querySelector(".arrow.left");
  const right = carousel.querySelector(".arrow.right");
  const scrollAmount = 300;

  left.addEventListener("click", () => 
  {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  right.addEventListener("click", () => 
  {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

updateCartBadge();
