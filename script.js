document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("main-nav");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
