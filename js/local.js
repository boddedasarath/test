

$(function(){

//Hover start
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

//Hover end
	
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



// scroll top

//$("#goHome").fadeOut(0);
//
//
//$("#button1").click(  function(){
//  'use strict';
//  $('html, body').animate({
//    scrollTop: $('#section5').offset().top
//  }, 2000);
//  
//} );
//
//
//function scrollToElm(sectionNumber){
//	'use strict';
//  $('html, body').animate({
//    scrollTop: $('#section'+sectionNumber).offset().top
//  }, 2000);
//}
//
//$(window).on( 'scroll', function(){
//	'use strict';
//  console.log( $(window).scrollTop() );
//  
//  if( $(window).scrollTop() > $('#section3').offset().top ){
//     $("#goHome").fadeIn(1000);
//  }else{
//     $("#goHome").fadeOut(1000);
//  }
//  
//});

//var Button = document.getElementsByTagName('button')[0],
//
//
//document.onscroll = function() {
//  
//  if (window.scrollY >= 1300) { // To Show Button
//    Button.style.opacity = "1";
//    Button.style.cursor = "pointer"
//  } else {
//    
//     Button.style.opacity = "0";
//  }
//  
//  if(window.scrollY >= 50){
//        document.getElementsByTagName('h1')[0].classList.add('fixed')
//    } else {document.getElementsByTagName('h1')[0].classList.remove('fixed')}
//  
//  
//   Button.onclick = function () { // When Click on the buttom Go To Up
//
//    var Smoothy = setInterval(function(){
//        window.scrollTo(0,window.scrollY - 100)     
//      if (window.scrollY <= 0)
//        clearInterval(Smoothy)
//        
//    }, 20);
//    
//}

	
	//SVG Mobile
var svg = document.querySelector("svg");
var mobile = document.querySelector("#mobile");
var messageParent = document.querySelector("#parent");
var message = document.querySelector("#envelope");
var closedFold = document.querySelector("#closed-fold");
var content = document.querySelector("#content"); 

var tl = new TimelineMax();
  tl.set(svg, {perspective:200, transformPerspective:200, transformStyle:"preserve-3d"});
  tl.set(messageParent, {perspective:200, transformPerspective:200, transformStyle:"preserve-3d"});
  tl.set(mobile, {perspective:200, transformPerspective:200, transformStyle:"preserve-3d"});
  tl.set(message, {perspective:200, transformPerspective:200, transformStyle:"preserve-3d", y:-100});
  tl.set(closedFold,{perspective:200, transformPerspective:200, transformStyle:"preserve-3d"});

mobile.addEventListener("click", function(){
  tl.set(closedFold,{rotationX:360, transformPerspective:200, transformStyle:"preserve-3d"});
  tl.set(message, {y:-100}); 
  tl.set(content, {y: 0});
  tl.to(message, 1, {y:0, ease: Power1.easeOut});
  tl.to(closedFold, 0.3, {rotationX:180, transformOrigin: "top top", ease: Power1.easeOut});
  tl.to(content, 0.5, {y: -42, ease: Power1.easeOut});
}, false)



});







