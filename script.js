// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth reveal animations on scroll
const revealElements = document.querySelectorAll("section, .project-card, .skill");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Add CSS animation dynamically
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .reveal {
      opacity: 1 !important;
      transform: translateY(0) !important;
      transition: all 0.8s ease;
    }
    section, .project-card, .skill {
      opacity: 0;
      transform: translateY(50px);
    }
  </style>`
);
