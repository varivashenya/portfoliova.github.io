$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  	nav: true,
  	navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']




  });

  // ----- back to top
	(function  () {
		// browser window scroll (in pixels) after which the "back to top" link is shown
		var firstScreen 	= $(window).height() / 2,
		offset = firstScreen,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 700,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
		//hide or show the "back to top" link
		$(window).scroll(function() {
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
			}
		});		
		//smooth scroll to top
		$('.cd-top').on('click', function(event){
			event.preventDefault();
			$('.maps').removeClass('active');
			$('body,html').animate({
				scrollTop: 0 ,
				}, scroll_top_duration
			);
		});
		$(document).trigger('scroll');
	})();
	// ----- back to top END





// (function  () {

// 	var burger = document.querySelector(".burger-menu");

// 	burger.addEventListener("click", function (evt) {
// 		evt.preventDefault();

// 	var navigationburger = document.querySelector(".main-navigation");

// 	navigationburger.classList.add("main-navigation-burger");
// 	});
// })();
$('.burger-menu').on('click',function(e) {
	$(this).toggleClass('burger-open');
    e.stopPropagation();
    
    $('.nav-menu').slideToggle(400);
    $('html').toggleClass('stop');
  });

});