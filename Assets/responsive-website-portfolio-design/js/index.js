const navToggle  =  document.querySelector(".burger-menu");
const navLinks = document.querySelectorAll('.list_items');



navToggle.addEventListener('click', () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        
    })
})