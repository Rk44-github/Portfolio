// execute sript afetr page load //
window.onload = function digital_fn(){

    // toggle button
    let toggle =document.querySelector("#nav .toggle-btn");
    let collapse =document.querySelector("#nav .collapse");
   
    toggle.addEventListener('click', function(event){
    // console.log(toggle);
    collapse.classList.toggle("active")
    });

// Masonry js

        let grid = document.querySelector('#site-main .recent-work-area .images-flex');
        
        let msnry = new Masonry(grid,{
                     itemSelector: '.flex-items',
                     gutter: 100,
                     fitWidth: true
                 });
}

// Rellax js
var rellax = new Rellax('.rellax',{
    center: true
});