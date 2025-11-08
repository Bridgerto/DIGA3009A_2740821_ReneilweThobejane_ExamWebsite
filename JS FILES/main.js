let basePath = "";

// If we’re on GitHub Pages, prepend the repo name
if (window.location.hostname.includes("github.io")) {
  basePath = "/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite";
}

// ========================================================
// 🧭 NAVBAR INJECTION
// ========================================================
document.getElementById("nav-bar").innerHTML = `
  <div class="toggle-container">  
    <label class="switch">
      <input type="checkbox" id="mode-toggle">
      <span class="slider-round">
        <span class="mode-text" id="mode-text">LUMÉA: BODY</span>
      </span>
    </label>
  </div>

  <div class="logo">
    <a href="${basePath}/index.html">LUMÉA</a>
  </div>

  <ul class="nav-links">
    <li><a href="${basePath}/index.html" class="Home">Home</a></li>
    <li><a href="${basePath}/HTML FILES/Cart.html" class="Cart">Cart</a></li>
    <li class="option-search Search">Search</li>
    <li><a href="${basePath}/HTML FILES/Account.html" class="Account">Account</a></li>
    <li class="option-menu Menu">Menu</li>
    <li><a href="${basePath}/HTML FILES/Wishlist.html" class="Wishlist">Wishlist</a></li>
  </ul>
`;

// ========================================================
// 🍔 MENU OVERLAY LOGIC
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const menuOption = document.querySelector(".option-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeMenu = document.getElementById("close-menu");

  if (menuOption && menuOverlay && closeMenu) {
    // When user clicks "Menu"
    menuOption.addEventListener("click", () => {
      menuOverlay.classList.add("active");
    });

    // Close when X button clicked
    closeMenu.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
    });

    // Close when clicking outside the menu
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
      }
    });
  }
});



/*document.getElementById("nav-bar").innerHTML = 
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
      <a href="/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite/index.html" >LUMÉA</a>
    </div>


    <ul class="nav-links">
      <li><a href="/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite/index.html"  class="Home">Home</a></li>
      <li><a href="/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite/HTML FILES/Cart.html" class="Cart"> Cart </a></li>
      <li class="option-search"  class="Search">Search</li>
      <li><a href="/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite/HTML FILES/Account.html"  class="Account">Account</a></li>
      <li class="option-menu"  class="Menu">Menu</li>
      <li><a href="/DIGA3009A_2740821_ReneilweThobejane_ExamWebsite/HTML FILES/Wishlist.html"  class="Wishlist">Wishlist</a></li>
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
});*/
