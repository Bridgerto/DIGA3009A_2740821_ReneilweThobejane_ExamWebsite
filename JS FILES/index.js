

if (document.body.contains(document.querySelector(".Bestsellers"))) 
{
    // index.js — homepage only

// ============================
//  REGISTER GSAP PLUGINS
// ============================
gsap.registerPlugin(ScrollTrigger);

// ============================
//  HERO SECTION ANIMATION (optional)
// ============================
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

// ============================
//  BESTSELLERS SCROLL ANIMATION
// ============================
const cards = gsap.utils.toArray(".product-card");
const numCards = cards.length;
const spacing = 300; // adjust for horizontal distance

// timeline for scroll motion
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Bestsellers",
    start: "top top",
    end: "+=" + numCards * spacing,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

// set initial positions
cards.forEach((card, i) => {
  gsap.set(card, { x: i * spacing });
});

// animate the "train" scroll
tl.to(cards, {
  x: `-=${(numCards - 1) * spacing}`,
  ease: "none",
});

// scale cards dynamically for focal effect
cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: ".Bestsellers",
    start: "top top",
    end: "+=" + numCards * spacing,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress * (numCards - 1);
      const distance = Math.abs(progress - i);
      const scale = gsap.utils.clamp(0.7, 1.3, 1.3 - distance * 0.3);
      gsap.to(card, { scale: scale, opacity: scale - 0.2, duration: 0.3, ease: "power2.out" });
    },
  });
});
}
