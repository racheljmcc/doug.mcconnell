$(document).ready(function(){

	$('.info').hide();


	$('.boxes').on('click', function() {
		var idPlaceHolder = this.classList[1];
		$('#' + idPlaceHolder).toggle();
		$(this).toggleClass('testClass')
	});
});

// $('.slick-carousel').slick({
//   infinite: true,
//   slidesToShow: 13,
//   slidesToScroll: 13
// });