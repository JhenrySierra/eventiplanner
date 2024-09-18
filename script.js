const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuButton = document.getElementById("closeMenuButton");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});




function toggleAccordion(id) {
  const content = document.getElementById(`content${id}`);
  const icon = document.getElementById(`icon${id}`);

  // Toggle visibility
  content.classList.toggle("hidden");

  // Rotate icon
  icon.classList.toggle("rotate-180");
}


//back to top button

  const backToTopButton = document.getElementById('backToTopButton');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
