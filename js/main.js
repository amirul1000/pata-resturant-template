
$(document).ready(function(){
    $("#click_reg").click(function(){
        $(".reg_form").toggle(200);
    });
    $("#click_login").click(function(){
        $(".login_form").toggle(200);
    });
    $("#shipchek").click(function(){
        $(".shipdif").toggle(200);
    });
    $("#show_filter").click(function(){
        $(".left_btn").toggle(200);
    });
	
	$(".fancybox-effects").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
});
//Lightslider
$(document).ready(function() {
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 0,
        speed:500,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});
//Related Product slider
$(document).ready(function() {
  var owl = $('.relateditem');
  owl.owlCarousel({
    loop: true,
    autoplay:true,
	autoplayTimeout:5000,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
})
// Back to top
if ($('#back-to-top').length) {
    var scrollTrigger = 600, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
//Stickey menu
$(window).load(function(){

  $("#mainnav").sticky({ topSpacing: 0 });

});