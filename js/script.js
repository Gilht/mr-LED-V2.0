(function($) {
    "use strict";
  
new WOW().init();


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

 // Initiate superfish on nav menu
 $('.navbar-nav').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

})(jQuery);