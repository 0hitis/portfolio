//============================================================
//
// Scripts JS
//
// @description
//   All the scripts that are in the website
// @version 1.00
//
// @author L.Prandi
// @contributor M.Borra
//
//============================================================

jQuery(document).ready(function($){

  /* -------------------------------------------  */
  /* Init foundation JS */
  /* -------------------------------------------  */

  $(document).foundation();


  /* -------------------------------------------  */
  /* Smooth scrolling */
  /* -------------------------------------------  */

    $('a.nav_link').click(function(){
        $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
        }, 500); $('body').removeClass('menu__open');
        return false;
    });
    

  
  /* -------------------------------------------  */
  /* Mobile menu */
  /* -------------------------------------------  */

  $('.burger-menu').on('click', function(e) {
    console.log("click");
    e.preventDefault();
      if( $('body').hasClass('menu__open') ) {
        $('body').removeClass('menu__open');   
      } 
    else {
        $('body').addClass('menu__open');  
      }
  });
  
});


 /* -------------------------------------------  */
  /* Menu background */
  /* -------------------------------------------  */

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 330) {
        $('header').addClass('headercolor');
    } else {
        $('header').removeClass('headercolor');
    }
});