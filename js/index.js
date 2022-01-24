const navToggle  =  document.querySelector(".toggle");
const navLinks = document.querySelectorAll('.nav_items');



navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        
    })
})