const hamburgerBtn = document.getElementById("hamburgerBtn");
const overlay = document.getElementById("overlay");
const menuPanel = document.getElementById("menuPanel");
const subPanel = document.getElementById("subPanel");
const closeBtn = document.getElementById("closeBtn");
const whoWeAre = document.getElementById("whoWeAre");

// Open menu
function openMenu() {
  menuPanel.classList.add("open");
  overlay.classList.add("active");
}

// Close everything
function closeAll() {
  menuPanel.classList.remove("open");
  subPanel.classList.remove("open");
  overlay.classList.remove("active");
}

// Events
hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeAll);
overlay.addEventListener("click", closeAll);

// Show sub panel on hover over "WHO WE ARE"
whoWeAre.addEventListener("mouseenter", () => {
  subPanel.classList.add("open");
});

// Hide sub panel when mouse leaves both panels
menuPanel.addEventListener("mouseleave", (e) => {
  if (!subPanel.contains(e.relatedTarget)) {
    subPanel.classList.remove("open");
  }
});

subPanel.addEventListener("mouseleave", (e) => {
  if (!menuPanel.contains(e.relatedTarget)) {
    subPanel.classList.remove("open");
  }
});




const navbar = document.querySelector(".navbar");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // SCROLL DOWN → HIDE NAVBAR
  if (currentScroll > lastScrollTop && currentScroll > 50) {
    navbar.style.transform = "translateY(-100%)";
  }

  // SCROLL UP → SHOW NAVBAR
  else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});