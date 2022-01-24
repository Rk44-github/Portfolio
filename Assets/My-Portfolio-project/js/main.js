


$(document).ready(function (){
    const $btns = $('.project-area .button-group button');
  
   $btns.click(function(e){
     $('.project-area .button-group button').removeClass('active');
     e.target.classList.add('active');

     let selector =$(e.target).attr('data-filter')
     
       $('.project-area .grid').isotope({
           filter: selector
       });

     return false;

        });

        $('.project-area .button-group #btn1').trigger('click');

        $('.project-area .grid .popup').magnificPopup({
          type: 'image',
          gallery:{enabled: true}
        });

        // Owl-carousel
        $('.site-main .about-area .owl-carousel').owlCarousel({
          loop: true,
          autoplay: true,
          
          responsive:{
            0:{
              items: 1
            },
            544:{
              items: 2
            }
          }
        });

        // Sticky Nav menue
       
        let nav_offset_top = $('.header-area').height() + 50;

        function navbarFixed() {
        if($('.header-area').length) {
            $(window).scroll(function () {
              let scroll = $(window).scrollTop();
              if(scroll >= nav_offset_top) 
              {
                $('.header-area .main-menue').addClass('navbar-fixed');
              } else {
                 $('.header-area .main-menue').removeClass('navbar-fixed');
                }
            })
          }
        }
        
        navbarFixed();
      
});



