$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});

//OwlCarousel2
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({items:4});
});


//headhesive
var header = new Headhesive('.menu-top-bar');

