let cart = JSON.parse(localStorage.getItem("lumeaCart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const subtotalElem = document.getElementById("subtotal");
const totalElem = document.getElementById("total");
const productCountElem = document.getElementById("product-count");

const SHIPPING_COST = 5.0;

// Render Cart
function renderCart() 
{
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) 
  {
    cartItemsContainer.innerHTML = `
      <tr><td colspan="5" style="text-align:center; padding:40px;">Your bag is empty.</td></tr>
    `;
    subtotalElem.textContent = "$0.00";
    totalElem.textContent = "$0.00";
    productCountElem.textContent = "0 Products";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => 
  {
    subtotal += item.price * (item.quantity || 1);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="../MEDIA FILES/Images/Product_Place_Holder_Img.jpg" alt="${item.name}" /></td>
      <td class="product-desc">${item.name}</td>
      <td>
        <div class="quantity-control">
          <button class="qty-minus">−</button>
          <span>${item.quantity || 1}</span>
          <button class="qty-plus">+</button>
        </div>
      </td>
      <td>$${(item.price * (item.quantity || 1)).toFixed(2)}</td>
      <td><button class="delete-btn"><i class="fa-solid fa-xmark"></i></button></td>
    `;

    // Quantity adjustment
    const minusBtn = row.querySelector(".qty-minus");
    const plusBtn = row.querySelector(".qty-plus");
    const deleteBtn = row.querySelector(".delete-btn");

    minusBtn.addEventListener("click", () => changeQuantity(index, -1));
    plusBtn.addEventListener("click", () => changeQuantity(index, 1));
    deleteBtn.addEventListener("click", () => removeItem(index));

    cartItemsContainer.appendChild(row);
  });

  const total = subtotal + SHIPPING_COST;

  subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  totalElem.textContent = `$${total.toFixed(2)}`;
  productCountElem.textContent = `${cart.length} Product${cart.length > 1 ? "s" : ""}`;
}

// Change quantity
function changeQuantity(index, delta) 
{
  if (!cart[index].quantity) cart[index].quantity = 1;
  cart[index].quantity += delta;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  saveAndRender();
}

// Remove item
function removeItem(index) 
{
  cart.splice(index, 1);
  saveAndRender();
}

// Save to localStorage
function saveAndRender() 
{
  localStorage.setItem("lumeaCart", JSON.stringify(cart));
  renderCart();
}

// Checkout
document.querySelector(".checkout-btn").addEventListener("click", () => 
{
  if (cart.length === 0) 
  {
    alert("Your cart is empty.");
    return;
  }
  alert("Checkout feature coming soon ✨");
});

// Initialize
renderCart();