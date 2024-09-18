const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuButton = document.getElementById("closeMenuButton");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;
  let slideIndex = 0;

  function moveToNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Cambia la duración del carrusel aquí (3000ms = 3s)
});
