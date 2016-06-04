;(function($){
	$(function(){
		$(document).foundation();

		$('.ba-works-slider').slick({
			dots: true,
			slide: '.ba-works-slide',
			autoplay: true,
			arrows: true,
			prevArrow: $('.ba-works-prev'),
			nextArrow: $('.ba-works-next')
		});

		$('.ba-team-slider').slick({
			slide: '.ba-team-slide',
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: ('.ba-team-prev'),
			nextArrow: ('.ba-team-next'),

			responsive: [

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

    ]

		});


	})


	$(window).load(function() {

      	var $mapDiv = $('.ba-map')[0],
     	 	$centerCoordinates = {lat: 52.131075, lng: -106.639144};
      		$coordinates = 	{lat: 52.129503, lng: -106.660388};

      	var $map = new google.maps.Map($mapDiv, {
      		center: $centerCoordinates,
      		zoom: 14
      	});

      	var $marker = new google.maps.Marker({
      		position: $coordinates,
      		map: $map,
      		icon: 'assets/img/Pin.svg'
      });
  });

})(jQuery);
