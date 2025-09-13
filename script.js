// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing animation
const typingText = ["Web Developer 💻", "Problem Solver 🧩", "AI Enthusiast 🤖", "Game Developer 🎮"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = typingText[i];
  document.querySelector(".typing").textContent =
    currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % typingText.length;
    }
    setTimeout(type, 800);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll reveal
const revealElements = document.querySelectorAll(".glass, .project-card, .skill");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .reveal {
      opacity: 1 !important;
      transform: translateY(0) !important;
      transition: all 1s ease;
    }
    .glass, .project-card, .skill {
      opacity: 0;
      transform: translateY(50px);
    }
  </style>`
);
