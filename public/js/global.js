$(function() {

	 new WOW().init();
	 var setSpace = $('header').innerHeight();
	 $('.burger-menu').css('padding-top',setSpace+30);

	 $('.burger-icon').click(function(){
	 	var setSpace = $('header').innerHeight();
	 	$('.burger-menu').slideToggle(300);
	 	$(this).toggleClass('open');
	 	$('body').toggleClass('locked');
	 });

	 $('.faq-box').click(function(){
	 	if( $(this).hasClass('closed') ){
		 		$(this).addClass('opened');
		 		$(this).removeClass('closed');
		 		$(this).find('.aa').slideDown(300);	
	 	}else{
	 			$(this).removeClass('opened');
	 			$(this).addClass('closed');
	 			$(this).find('.aa').slideUp(300);	
	 	}
	 });

	 var clipboard = new ClipboardJS('#copy-to-clipboard', {
	   text: function () {
	     return $('#copy-to-clipboard').val();
	   },
	 });

	 $('#copy-to-clipboard').click(function(){
	 	$('.alert-copy').fadeIn(300);
	 	setTimeout(function(){ 
	 	$('.alert-copy').fadeOut(300);
	 	}, 1500);
	 })

});

function increment() {
    document.getElementById('mint-number').stepUp();
}

function decrement() {
	document.getElementById('mint-number').stepDown();
}

$(window).on('load', function(){
	var swiper = new Swiper(".card-swiper", {
	 	slidesPerView: 4,
	 	spaceBetween: 24,
	 	navigation: {
          nextEl: ".collection-button-next",
          prevEl: ".collection-button-prev",
        },

	 	breakpoints: {
	 		767: {
		      slidesPerView: 1.3,
		      centeredSlides: true,
		    },
		    991: {
		      slidesPerView: 3,
		    },
		    1200: {
		      slidesPerView: 4,
		    },
		}
	 });
})

$(window).resize(function(){
	var setSpace = $('header').innerHeight();
	var WW = $(window).width();
	if(WW>767){
		$('.burger-icon').removeClass('open');
		$('.burger-menu').slideUp(300);
		$('body').removeClass('locked');
	}else{
		
	}
});