// ========================================================
// ✨ LUMÉA INDEX PAGE — API + Animation Integration
// ========================================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

// ========================================================
// 🧭 HERO SECTION — Smooth Entrance Animation
// ========================================================
gsap.from(".hero-section .content-hero h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from(".hero-section .content-hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
});

gsap.from(".hero-section .shop-now", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.6,
  ease: "power2.out",
});

// ========================================================
// 🛍️ BESTSELLERS — Fake Store API Integration (Skincare Mapping)
// ========================================================
async function loadBestsellers() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Choose only first 7 as bestsellers
    const bestsellers = products.slice(0, 7);
    const productTrack = document.querySelector(".product-track");
    productTrack.innerHTML = "";

    // --- Custom Skincare Mapping ---
    const skincareMapping = [
      { name: "Gentle Foaming Cleanser", image: "/MEDIA FILES/Images/cleanser.jpg" },
      { name: "Vitamin C Brightening Serum", image: "/MEDIA FILES/Images/serum.jpg" },
      { name: "HydraBoost Moisturizer", image: "/MEDIA FILES/Images/moisturizer.jpg" },
      { name: "Daily SPF 50 Sunscreen", image: "/MEDIA FILES/Images/sunscreen.jpg" },
      { name: "Clarifying Toner", image: "/MEDIA FILES/Images/toner.jpg" },
      { name: "Nourishing Face Oil", image: "/MEDIA FILES/Images/face_oil.jpg" },
      { name: "Exfoliating Scrub", image: "/MEDIA FILES/Images/scrub.jpg" },
    ];

    // --- Generate Cards ---
    bestsellers.forEach((item, index) => {
      const skincare = skincareMapping[index % skincareMapping.length];

      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
        <img src="${skincare.image}" alt="${skincare.name}">
        <h3>${skincare.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button class="cart-btn"><i class="fa-light fa-cart-shopping"></i></button>
      `;

      productTrack.appendChild(card);
    });

    // --- Fade-in Animation for Cards ---
    gsap.from(".product-card", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });

    // Start continuous loop motion
    initBestsellersLoop();
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// --- Continuous Carousel Loop Animation ---
function initBestsellersLoop() {
  const bestsellersRow = document.querySelector(".product-track");
  const cards = gsap.utils.toArray(".product-card");
  const cardWidth = 280;
  const totalWidth = cardWidth * cards.length;

  // Clone cards for seamless wraparound
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    bestsellersRow.appendChild(clone);
  });

  // Infinite horizontal loop (rotating carousel)
  gsap.to(bestsellersRow, {
    x: -totalWidth,
    duration: 40,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });
}

// Load bestsellers once the page is ready
document.addEventListener("DOMContentLoaded", loadBestsellers);

// ========================================================
// 💆‍♀️ SKIN CONCERNS — Continuous Infinite Train Motion
// ========================================================
function createInfiniteLoop(rowSelector, direction = 1, speed = 50) {
  const row = document.querySelector(rowSelector);
  if (!row) return;

  const cards = row.children;
  const cardWidth = 420; // width + margin
  const totalWidth = cardWidth * cards.length;

  // Clone cards for seamless looping
  Array.from(cards).forEach((card) => {
    const clone = card.cloneNode(true);
    row.appendChild(clone);
  });

  // Smooth continuous motion
  gsap.to(row, {
    x: direction * -totalWidth,
    duration: speed,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });
}

// Top row (skin1) — move left, reappear from right
createInfiniteLoop(".skin1", 1, 60);

// Bottom row (skin2) — move right, reappear from left
createInfiniteLoop(".skin2", -1, 60);

// ========================================================
// ✨ SECTION FADE-UPS — Smooth Reveal While Scrolling
// ========================================================
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});