const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.navbar__links');

mobileMenu.addEventListener('click', () => {
   mobileMenu.classList.toggle('active');
   navLinks.classList.toggle('show');
});
