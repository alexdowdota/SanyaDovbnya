$(function(){
// плавное перемещение страницы к нужному блоку
	$(".go").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

$(window).scroll(function() {
        $('.info-text, .info-item').each(function(){
            var imagePos = $(this).offset().top;
 
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass("fadeInRight");
            }
        });
    });

$('#slider').slick(
	{		
		  dots: true,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 1,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '10px',
		        slidesToShow: 1
		      }
		    }
		  ]
		}
		)

})