
// start of nav-scroll edit
var navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-transparent');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-transparent');
    }
});
// end of nav-scroll edit


