document.getElementById("nav-bar").innerHTML = 
` 
  <div class="toggle-container">  
      <label class="switch">
        <input type="checkbox" id="mode-toggle">
        <span class="slider-round">
          <span class="mode-text" id="mode-text">LUMÉA: BODY</span>
        </span>
      </label>
    </div>

    <div class="logo">
      <a href="./index.html">LUMÉA</a>
    </div>


    <ul class="nav-links">
      <li><a href="./index.html"  class="">Home</a></li>
      <li><a href="./HTML FILES/Cart.html" class="Cart"> Cart </a></li>
      <li class="option-search"  class="Search">Search</li>
      <li><a href="./HTML FILES/Account.html"  class="Account">Account</a></li>
      <li class="option-menu"  class="Menu">Menu</li>
      <li><a href="./HTML FILES/Wishlist.html"  class="Wishlist">Wishlist</a></li>
    </ul>
`;

// this is the nav-bar for all the pages in the HTML FILES folder
document.getElementById("nav-bar2").innerHTML = 
` 
  <div class="toggle-container">  
      <label class="switch">
        <input type="checkbox" id="mode-toggle">
        <span class="slider-round">
          <span class="mode-text" id="mode-text">LUMÉA: BODY</span>
        </span>
      </label>
    </div>

    <div class="logo">
      <a href="./index.html">LUMÉA</a>
    </div>


    <ul class="nav-links">
      <li><a href="../index.html"  class="">Home</a></li>
      <li><a href="./Cart.html" class="Cart"> Cart </a></li>
      <li class="option-search"  class="Search">Search</li>
      <li><a href="./Account.html"  class="Account">Account</a></li>
      <li class="option-menu"  class="Menu">Menu</li>
      <li><a href="./Wishlist.html"  class="Wishlist">Wishlist</a></li>
    </ul>
`;

//MENU OVERLAY
document.addEventListener("DOMContentLoaded", () => 
{
  const menuOption = document.querySelector(".option-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeMenu = document.getElementById("close-menu");

  // Check if elements exist before attaching events
  if (menuOption && menuOverlay && closeMenu) 
  {

    // When user clicks "Menu"
    menuOption.addEventListener("click", () => 
    {
      menuOverlay.classList.add("active"); // show overlay
    });

    closeMenu.addEventListener("click", () => 
    {
      menuOverlay.classList.remove("active"); 
    });

    menuOverlay.addEventListener("click", (e) =>
    {
      if (e.target === menuOverlay) 
      {
        menuOverlay.classList.remove("active");
      }
    });
  }
});
