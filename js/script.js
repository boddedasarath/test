$(document).ready(function(){
    $(document).on("mouseenter", ".style_prevu_kit", function(){	
	'use strict';
	var datakit = $(this).attr("data-kit");
	$(this).parents(".par").find(".output-9").hide();
	$(this).parents(".par").find(".output").addClass("data-hide");
	$(this).parents(".par").find(".output").removeClass("data-show");
	$(this).parents(".par").find("."+datakit).removeClass("data-hide").addClass("data-show");

});
$(document).on("mouseleave", ".style_prevu_kit", function(){
	'use strict';
	$(this).parents(".par").find(".output").removeClass("data-hide");
	$(this).parents(".par").find(".output").removeClass("data-show");
	if($(".par").find(".output").hasClass("content-avail")){
		$(this).parents(".par").find(".output-9").hide();
	}else{
		$(this).parents(".par").find(".output-9").show();
	}
	
});
$(document).on("click", "#business .par .style_prevu_kit", function(){
	'use strict';
	var ind = $(this).attr("data-k");
		$(this).parents(".par").find(".output").hide();
		$(this).parents(".par").find(".output").eq(ind).addClass("content-avail");
		$(this).parents(".par").find(".output").eq(ind).show();
	
});
	
	$(".scroll-top").click(function(){
		//$("html").animate({ scrollTop: 0 }, "slow");
		$('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
	});
	
	$(".hold .nav-wrapper .nav-container li").click(function(){
		
		var page = $(this).attr("data-page");
		//$("html").animate({ scrollTop: 0 }, "slow");
		$('html, body').animate({
        scrollTop: $("#"+page).offset().top
    }, 1000);
	});	
	
	$(".footer .link-util a").click(function(){
		
		var page = $(this).attr("data-page");
		//$("html").animate({ scrollTop: 0 }, "slow");
		$('html, body').animate({
        scrollTop: $("#"+page).offset().top
    }, 1000);
	});	
	
	
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	  } else {
		navbar.classList.remove("sticky");
	  }
	}
        
});



