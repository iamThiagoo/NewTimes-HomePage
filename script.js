const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburguer.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});