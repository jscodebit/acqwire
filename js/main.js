(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
		
		/*PRELOADER JS*/
			$(window).load(function() { 
				$('.loader_wrap').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/

		/* START MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		
			
			$(window).on('scroll',function(){
		    if($(this).scrollTop() > 100){
		    	$('.main_header').addClass('sticky_menu');
			}
			else{
			   $('.main_header').removeClass('sticky_menu');
			}
			});
			$(document).on('click', '.navbar-collapse.in', function (e) {
				if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
					$(this).collapse('hide');
				}
			});
		/* END MENU JS */
		
		/*START ISOTOP JS*/
			var $grid = $('.grid_item_area').isotope({
			  // options
			});
			// filter items on button click
			$('.our_port_menu').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.our_port_menu').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/*END ISOTOP JS*/
		
		
		// START LIGHTBOX
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			})
		
		/*START COUNDOWN JS*/
			$('.counter-content').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/*END COUNDOWN JS */
		
		// Owl Carousel for Testimonials	
			// $('#testimonial-slider').owlCarousel({
			// 	loop:true,
			// 	margin:10,
			// 	nav:false,
			// 	dots: true,
			// 	autoPlay:true,
			// 	autoplayTimeout:1000,
    		// 	autoplayHoverPause:true,
			// 	items: 1,
			// 	pagination:true,
			// 	responsive:{
			// 		0:{
			// 			items:1,
			// 			nav:true
			// 		},
			// 		6000:{
			// 			items:1,
			// 			nav:true
			// 		},
			// 		1000:{
			// 			items:1,
			// 			nav:true
			// 		}
			// 	}
			// });	
					
	}); 	
	
		/*  Stellar for background scrolling  */
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
		/* End Stellar for background scrolling  */		
			
		/*START WOW ANIMATION JS*/
			new WOW().init();	
		/*END WOW ANIMATION JS*/

		
        // var modal = document.querySelector(".modal");
        // var trigger = document.querySelector(".trigger");
        // var closeButton = document.querySelector(".close-button");
    
        // function toggleModal() {
        //    modal.classList.toggle("show-modal");
        // }
    
        // function windowOnClick(event) {
        //    if (event.target === modal) {
        //        toggleModal();
        //    }
        // }
    
        // trigger.addEventListener("click", toggleModal);
        // closeButton.addEventListener("click", toggleModal);
		// window.addEventListener("click", windowOnClick);
		
		$("#testimonial-slider").owlCarousel({
			items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[979,1],
			itemsTablet:[768,1],
			pagination:true,
			navigation:false,
			navigationText:["",""],
			slideSpeed:1000,
			singleItem:true,
			autoPlay:true
		});
		     		
})(jQuery);		