$(document).ready(function (){
	$('.navbar').hide();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.navbar').fadeIn();
		}else{
			$('.navbar').fadeOut();
		}
	});
});
