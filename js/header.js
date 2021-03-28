$(document).ready(function() {

	/* Code for Including Header and Footer using AJAX. This code will run if the data-include="ajax" in the Header/footer include tag */
	var count = 0;
	var length = $('div[data-include="ajax"]').length;

	$('div[data-include="ajax"]').each( function(){
	  var includePath = $(this);
		$.ajax({
			type: "GET",
			cache: false,
			url: $(this).attr("data-include-path"),
			success: function (data) {
				$(includePath).append(data);
				count = count + 1;
				if (count == length){
					postInclude();
				}
			},
			dataType: 'html'
		});
	});

		var url = (window.location.pathname).replace('.desktop','').replace('.html','');
		$.ajax({
			type:'GET',
			url: url +'.ids.json',
			success:function(data){
				if(data.error == "User not Logged In"){
					$(".human-icon").addClass("human-icon-loogedin");

				}else{
					$('.box-events-sign-in').remove();
					//$('.box-logged-in form.login-form, .box-logged-in .login-links-password, .box-logged-in .login-links-register').remove();
					var userName = data.userId;
					var firstName = data.firstName;
					var lastName = data.lastName;
					var email = data.email;
					$('input#Login').val(userName);
					$('input#FirstName').val(firstName);
					$('input#LastName').val(lastName);
					$('input#EmailAddress').val(email);
					// console.log("logged in");
				}
			}
		});



	function postInclude() {


		$("<input type='button' name='nav-icon' class='nav-icon'>").insertAfter(".rte-header-banner p");
		$("<div class='hcpwebshop cartitem-mobile'></div>").insertAfter(".rte-header-banner .nav-icon");
		$(".hcpwebshop.cartitem-mobile").next("p").addClass("rte-menu-text-head");
		$(".logged-out a").wrapAll("<div class='nav-mobile'></div>");

		$('.userbox-header .box-logged-in form.login-form').hide();
		$('.userbox-header .box-logged-in form.login-form').next('a').hide();
		$('.userbox-header .box-logged-in .login-links-password').hide();
		$('.userbox-header .box-logged-in .login-links-register').hide();
		$('.navigation-left ul.navigation-level1 li.navigation-item.is-active a').html();


		$(".logged-in p").click(function(){
			$(".box-logged-in").toggle('slow');
		});

		$("textarea").parent().css("max-height", "465px");
			$(".login-links").insertBefore(".control-group");
			// $('.rte-navigation-links-product span').each(function () {
			// 	var className = $(this).attr('class');
			// 	var anchorLink = $(this).find('a').attr('href');
			// 	var anchorText = $(this).find('a').html();
			// 	var appendString = '<li class="navigation-item navigation-level2 navigation-level2-green ' + anchorText + '"><a class="navigation-item-title navigation-item-green" title="' + anchorText + '" href="' + anchorLink + '">' + anchorText + '<span class="navigation-item-decoration" tabindex="0"></span></a></li>';
			// 	$('.navigation-left ul li.navigation-level1 ul.navigation-level2').append(appendString);
			// });
			$('.rte-header-banner p a').each(function () {
				var anchorText = $(this).html();
				var anchorLink = $(this).attr('href');
				var appendString = '<li class="navigation-item navigation-level1 navigation-level1-green ' + anchorText + '"><a class="navigation-item-title navigation-item-green" title="Resources" href="' + anchorLink + '">' + anchorText + '<span class="navigation-item-decoration" tabindex="0"></span></a></li>';
				$('.navigation-horizontal ul.navigation-level1').append(appendString);
			});
		$('.rte-header-logged-in li a').each(function(index){
			var htmlContent = $(this).html();
			var url = $(this).attr('href');
			var title = $(this).attr('title');
			var ddSelect = "<a title='"+title+"' href='"+url+"'.html>"+htmlContent+"</a>";
			$('.userbox-header .logged-in').append(ddSelect);
		});
		$('.userbox-header .logged-in form').insertAfter(".userbox-header .logged-in a:last");
		$(".logged-in a,.logged-in form").wrapAll("<div class='box-logged-in'></div>");

		/*login icon change*/ /*pravin*/
		if($('.userbox-header .component-content div').hasClass("logged-out")){
			$(".human-icon").addClass("human-icon-loogedin");
		}
		else{
			$(".human-icon").removeClass("human-icon-loogedin");
			$(".human-icon").addClass("account-loogedin");
		}
		/************PLACEHOLDER********/

		if ($(".logged-in, .acc-logged-header .logged-in").is(":visible")) {
			if($(".logged-in p .userBox-title").length > 0){
				if($(".logged-in p .userBox-title").text() == "Other"){
				 $(".logged-in p .userBox-title").text($('.rte-header-others-metadata p').html());
				$(".logged-in p .userBox-lastName").empty();
				$(".logged-in p .userBox-firstName").empty();
				}
			}
		}

		$(".nav-icon, .rte-menu-text-head, .rte-close-text").click(function (event) {
				event.preventDefault();
				if ($(".logged-out").is(":visible")) {
					$(".logged-out").slideUp('slow', function () {
						$(".human-icon").removeClass("nav-active");
						$('.rte-close-icon').hide();
						$(".box-header-secondary").slideToggle("slow");
						if ($(".human-icon-loogedin").hasClass("icon-active")) {
							$(".human-icon-loogedin").toggleClass("icon-active");
						}
						$(".nav-icon").toggleClass("nav-active");
						if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
							$(".rte-menu-text-head .rte-close-text").css("display", "block");
						} else {
							$(".rte-menu-text-head .rte-close-text").css("display", "none");
						}
					});
				} else if ($(".acc-logged-header .logged-in").is(":visible")) {
					$(".logged-in").slideUp('slow', function () {
						$(".human-icon").removeClass("nav-active");
						$(".box-header-secondary").slideToggle("slow");
						if ($(".human-icon-loogedin").hasClass("icon-active")) {
							$(".human-icon-loogedin").toggleClass("icon-active");
						}
						$('.rte-close-icon').hide();
						$(".nav-icon").toggleClass("nav-active");
						if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
							$(".rte-menu-text-head .rte-close-text").css("display", "block");
						} else {
							$(".rte-menu-text-head .rte-close-text").css("display", "none");
						}
					});
				} else {
					$(".box-header-secondary").slideToggle("slow");
					$(".nav-icon").toggleClass("nav-active");
					if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
						$(".rte-menu-text-head .rte-close-text").css("display", "block");
					} else {
						$(".rte-menu-text-head .rte-close-text").css("display", "none");
					}
				}
			});


	$(".accordion .accordion-head h3").addClass("accordion-head"); /* Mobile Header UI Fix May 24 */
			$(".accordion .accordion-head h3").removeClass("accordion-title"); /* Mobile Header UI Fix May 24 */
			$(".accordion .accordion-head h3").parent("div").removeAttr("class");
            $(".rte-header-banner p:last-of-type").after("<input type='button' name='human-icon' class='human-icon'>"); // header
            $("<input type='button' name='nav-icon' class='nav-icon'>").insertAfter(".rte-header-banner p:last-of-type"); // header
			// $(".nav-icon, .rte-menu-text, .rte-close-text").click(function (event) {
			// 	event.preventDefault();
			// 	if ($(".logged-out").is(":visible")) {
			// 		$(".logged-out").slideUp('slow', function () {
			// 			$(".human-icon").removeClass("human-active");
			// 			$('.rte-close-icon').hide();
			// 			$(".box-header-secondary").slideToggle("slow");
						// $(".nav-icon").toggleClass("nav-active");
			// 			if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
			// 				$(".rte-menu-text-head .rte-close-text").css("display", "block");
			// 			} else {
			// 				$(".rte-menu-text-head .rte-close-text").css("display", "none");
			// 			}
			// 		});
			// 	} else if ($(".acc-logged-header .logged-in").is(":visible")) {
			// 		$(".logged-in").slideUp('slow', function () {
			// 			$(".human-icon").removeClass("human-active");
			// 			$(".box-header-secondary").slideToggle("slow");
			// 			$('.rte-close-icon').hide();
			// 			$(".nav-icon").toggleClass("nav-active");
			// 			if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
			// 				$(".rte-menu-text-head .rte-close-text").css("display", "block");
			// 			} else {
			// 				$(".rte-menu-text-head .rte-close-text").css("display", "none");
			// 			}
			// 		});
			// 	} else {
			// 		$(".box-header-secondary").slideToggle("slow");
			// 		$(".nav-icon").toggleClass("nav-active");
			// 		if ($(".rte-header-banner .nav-icon").hasClass("nav-active")) {
			// 			$(".rte-menu-text-head .rte-close-text").css("display", "block");
			// 		} else {
			// 			$(".rte-menu-text-head .rte-close-text").css("display", "none");
			// 		}
			// 	}
			// });

			$(window).on('load', function () {
				leftnav_mob();
				$('.rte-sub-nav-mobile').on('click', function (event) {
					event.stopPropagation();
					$(this).toggleClass('active');
				});
			});
			$(window).resize(function () {
				if ($(window).width() > 767) {
					$('.box-header-secondary').show();
					$(".rte-menu-text-head .rte-close-text").css("display", "none");
					//$(".logged-out").show();
					$(".rte-close-icon").hide();
				} else {
					if ($('.box-header-secondary').is(':visible')) {
						$(".rte-menu-text-head .rte-close-text").show();
						$(".rte-header-banner .nav-icon").addClass("nav-active");
					}
				}
				leftnav_mob();
			});

			$(".human-icon").click(function (event) {
				event.preventDefault();
				if ($(".box-header-secondary").is(":visible")) {
					$(".box-header-secondary").slideUp('slow', function () {
						$(".nav-icon").removeClass("nav-active");
						var url = (window.location.pathname).replace('.desktop', '').replace('.html', '');
						gigya.accounts.getAccountInfo({
							callback: function (data) {
								if (data.errorCode == 0) {
									$(".logged-out").hide();
									$(".logged-in").slideToggle("slow");
								} else if (data.errorCode == 403005) {
									$(".logged-out").slideToggle("slow");
									// alert('Santosh')
									$(".logged-in").hide();
								}
							}
						});
						$('.rte-close-icon').toggle();
						$(".human-icon").toggleClass("human-active");
						if ($(".rte-header-banner .human-icon").hasClass("human-active")) {
							$(".rte-menu-text-head .rte-close-text").css("display", "none");
							//$(".userbox-header .logged-in").css("display","block");
						}
					});
				} else {
					gigya.accounts.getAccountInfo({
						callback: function (data) {
							if (data.errorCode == 0) {
								$(".logged-out").hide();
								$(".logged-in").slideToggle("slow");
							} else if (data.errorCode == 403005) {
								$(".logged-out").slideToggle("slow");
							}
						}
					});
					$(".human-icon").toggleClass("human-active");
					$('.rte-close-icon').toggle();
					if ($(".rte-header-banner .human-icon").hasClass("human-active")) {
						$(".rte-menu-text-head .rte-close-icon").css("display", "block");
					} else {
						$(".rte-menu-text-head .rte-close-icon").css("display", "none");
					}

				}
			});


            
				$('.header-image').on('click', function(){
                    //Cog.Cookie.erase("befreheaderclick");
                                         var arr = $(this).parents('.Header-box').find('.richText');
                                         arr.hide();
                                        $(this).hide();
                                   		//$.Cookie.create("headerclick","0","true");

                                      console.log("asd");

                                                                }); 
                var rte= $('.Header-box').find('.richText');
                var img = $('.Header-box').find('.header-image');
                // if($("headerclick")){
                //     //Cog.Cookie.erase("befreheaderclick");
                //     console.log("gag00");
                //     $('.Header-box').find('.richText').css('display','block');
                //     $('.Header-box').find('.header-image').css('display','block');
                //       //var rte= $('.Header-box').find('.richText');
                //        rte.css('display','block');
                //      //var img = $('.Header-box').find('.header-image');
                //      img.css('display','block');
                // }

			
/* Show/Hide Header box messages by : Nilima*/

			var authoredLinks = "";
			$('.rte-header-logged-in li').each(function (index) {
				authoredLinks += $(this).html();
			});
			var profileHtml = $('<div>').append($(".logged-in a").clone()).html();
			var logoutHtml = $('<div>').append($(".logged-in form").clone()).html();
			var userboxDropdown = "<div class='box-logged-in'>" + profileHtml + logoutHtml + "</div>";
			$('.userbox-header .logged-in a').remove();
			$('.userbox-header .logged-in form').remove();
			$('.userbox-header .logged-in').append(userboxDropdown);

function displayPersonalizedContent (response) {
         if (response && response.data) {
			displayPersonalizedBox(response.data.PROFESSION);
			displayPersonMenu(response.data.PROFESSION);
         }
	}

	function displayPersonMenu (profession) {
		var values = _.map($('.personalizeBinaryBox .prescriber-values').text().split('|'), function(val) {
			return val.trim();
		});

		if (_.contains(values, profession)) {
			$(".personalization-prescriber-box").css('display', 'block');
			$(".personalization-non-prescriber-box").remove();
		} else {
			$(".personalization-non-prescriber-box").css('display', 'block');
			$(".personalization-prescriber-box").remove();
		}
	}

	function displayPersonalizedBox (profession) {
		$(".prescriberbinarybox, .nonprescriberbinarybox").each(function (key, container) {
			var $container = $(container);

			var values = _.map($container.find('.prescriber-values').text().split('|'), function (val) {
				return val.trim();
			});

			if (_.contains(values, profession)) {
				$container.css('display', 'block');
			}
		});
	}

$(document).ready(function(){

    /*Code for site toggle*/

    var href = $('.toggle-page-site a').attr('href');
    $(".dropdown-selectbox a").attr("href", href);


    // Code for Product dropdown

    jQuery('.product-dropdown ul').before('<div class="product-list-selected">'+jQuery('.product-dropdown ul li').first().text()+'</div>');
    jQuery('.product-list-selected').wrap('<div class="outer-productLinks">');
    jQuery('.outer-productLinks').append(jQuery('.product-dropdown ul'));

    jQuery('.product-dropdown ul').hide();

    $('.product-list-selected').click(function(){

        jQuery('.product-dropdown ul').slideToggle();

    });

    jQuery('.product-list-selected').text(jQuery('.product-dropdown ul li').first().text());
    jQuery('.product-dropdown ul li').first().remove();

    jQuery('.product-dropdown ul li').click(function(e){e.preventDefault();

        jQuery('.product-list-selected').text($(this).text());

        jQuery('.product-dropdown ul').hide();

      //  if($(this).index()==0)return;
      //  else{
            var externalLinkCheck = $(this).find('a').attr('href');
            window.open(externalLinkCheck, '_blank');

       // }
    });




// to remove extra br in third link in products page
//$('.rte-heading-download-links').last().prev().remove();
$('.box-overlay-register-confirmation').hide();
});



$(document).ready(function(){

	var backdrop = '.dropdown-backdrop'
  	var toggle   = '[data-toggle="dropdown"]'
  	var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

	$(".dropdown-up").click(function(){
		$(".dropdown-up").toggleClass("dropdownToggle");
		$(".dropdown-selectbox").slideToggle();


	});
    /*Code for site toggle*/

    var href = $('.toggle-page-site a').attr('href');
    $(".dropdown-selectbox a").attr("href", href);

});


};





$(window).on('load', function(){
		leftnav_mob();
        $('.rte-sub-nav-mobile').on('click',function(event){
					event.stopPropagation();

				$(this).toggleClass('active');
			});
	});





	$(document).ready(function(){
	$('.navigation-left .navigation-item-title').each(function(){
		 if($(this).parent().hasClass('has-children')){
			 if(!$(this).parent().hasClass('navigation-level1')){
				 var x=$(this).html();
				 var i=x.indexOf("<");
				 if(i>0){
				 var y=x.substr(0, i-1);
				 var z=x.substr(i);
				 }
				 if(y.length>21){
				 $(this).css('max-height','82px');
				 }
				 var d="<span class='nav-text-dotted' style=' width: 85%; display: inline-block;'>"+y+"</span>"+z;
				 $(this).html(d);
				//$(this)..wrap("<span  style=' width: 85%; display: inline-block;'></span>");
			}
		}
	});
    /*new fix for dotted leftnav*/
  if($(window).width() <= 768){
    $('.navigation-left .navigation-item .navigation-item-title').each(function(){
    //var fullText = jQuery(".navigation-left .navigation-item .navigation-item-title span.nav-text-dotted").text();console.log(fullText);
    var fullText = $(this).find("span.nav-text-dotted").text();
    var fullTextLength = fullText.length;console.log(fullTextLength);
    if (fullTextLength >= 36){
    var concatText = fullText.slice(0,36); console.log(concatText); 

    //var lastText = fullText.innerHTML = concatText + '...';
        //$(this).find("span.nav-text-dotted").html(lastText);
    //jQuery(".navigation-left .navigation-item .navigation-item-title span.nav-text-dotted").html(lastText);
    }
  });
  }
    /*END*/
		$("body").on("tap click", ".navigation .has-children > .navigation-item-title >" +
				" .navigation-item-decoration", function (event) {
			event.preventDefault();
			event.stopPropagation();

			var $this = $(this).closest(".has-children"),
				$siblings = $this.siblings(".has-children");

			$siblings.not($this).removeClass("is-open")
				.find(".has-children").removeClass("is-open");
			$this.toggleClass("is-open");
		});
	});
	$('.navigation-left ul li.navigation-level2 a.navigation-item-title').each(function(){
							var menuht = $(this).height();
							if(menuht == 20){
								$(this).css('max-height','62px');
							}else if(menuht == 40){
								$(this).css('max-height','82px');
							}
							else if(menuht == 60){
								$(this).css('max-height','102px');
							}
						});
	$(window).on('load', function(){
		leftnav_mob();
	});

		$(window).resize(function(){
		if($(window).width() > 767){
			$('.box-header-secondary').show();
			$(".rte-menu-text-head .rte-close-text").css("display","none");
			//$(".logged-out").show();
			$(".rte-close-icon").hide();
			var id = $(this).attr('id');
        	var screen_width = $(window).width();
			$('.navigation-root').children('li').removeClass('is-active');
			$(this).parent('li').addClass('is-active');

		}else{
			if($('.box-header-secondary').is(':visible')){
				$(".rte-menu-text-head .rte-close-text").show();
				$(".rte-header-banner .nav-icon").addClass("nav-active");
			}
			$('.box-header-secondary').hide();
			$(".rte-header-banner .nav-icon").removeClass("nav-active");
			$(".rte-menu-text-head .rte-close-text").css("display","none");
			$(".logged-out").hide();
			$(".rte-close-icon").hide();
			$(".rte-header-banner .human-icon").removeClass("nav-active");
		}

		leftnav_mob();


	});

$(document).ready(function() {

		$('.searchBox .form-search .button').click(function(event){
            var searchQuery = $(this).parent().find('input[type=text]').val();
			var placeholder = $(this).parent().find('input[type=text]').attr('placeholder');
            //var placeholder = "UTF-8";
			if(searchQuery == "" || searchQuery==placeholder){
				event.preventDefault();
			}
		});

        $('.searchBox .form-search .button').hover(function(event){
            var searchQuery = $(this).parent().find('input[type=text]').val();
			var placeholder = $(this).parent().find('input[type=text]').attr('placeholder');
            //var placeholder = "UTF-8";
			if(searchQuery == "" || searchQuery==placeholder){
				event.preventDefault();
                  $('.searchBox .form-search .button').css('cursor','auto');
					$('.searchBox .form-search .button').css('outline','0');
					$('.searchBox .form-search .button').css('background-image','url("/etc/designs/zg/hcpportal-r-34/desktop/img/search-icon.png")');
            }else{
	                  $('.searchBox .form-search .button').css('cursor','pointer');
					$('.searchBox .form-search .button').css('outline','0');
					$('.searchBox .form-search .button').css('background-image','url("/etc/designs/zg/hcpportal-r-34/desktop/img/search-icon-hover.png")');
            }
		});

});


    	$('.image-search-header').hover(function(){

		$(this).find('img').attr("src","/content/dam/global/hcpportal/master/search-hover.png");
		}, function() {
		$(this).find('img').attr("src", "/content/dam/global/hcpportal/master/search.png");
		});

	var vwidth = $(document).width();
	if (vwidth <= 767) {
				if ($(".userbox-header .component-content div").hasClass("logged-in")) {
					$(".userbox-header").addClass("acc-logged-header");
				} else {
					$(".userbox-header").removeClass("acc-logged-header");
				}
				/* */
				$(window).on("load", function () {
					$(".acc-logged-header .logged-in").hide();
					setTimeout(function () {
						$(".acc-logged-header .logged-in").hide();
					}, 2000);
				});
				/* */
				$(".account-loogedin").click(function () {
					$(".acc-logged-header .logged-in").toggle('slow');
				});
			}

	function leftnav_mob(){
	var screen_width = $(window).width();
	if(screen_width < 767){
		$('.rte-sub-nav-mobile').css("display","block");
		if($('.rte-sub-nav-mobile').length == 0)
		{
			$('.navigation-left').before("<div class='rte-sub-nav-mobile'><p><span class='sub-nav-mobile'></span></p></div>");

			var leftmenu = $('.sub-nav-mobile');
			var listmenu = $('.navigation-left');

			leftmenu.click(function() {

				listmenu.slideToggle(200);

			});

			var livetext = $('.navigation-left ul.navigation-level1 li.navigation-item.is-active a').html();
				$('.sub-nav-mobile').append(livetext);

			$(window).on('load', function(){

			});
		}
	}else if(screen_width > 767){
		$('.rte-sub-nav-mobile').css("display","none");
	}
	}

	// $.ajax({
	// url:"/content/cf-pharma/health-hcpportal/it_IT/hcp/home.userinfo.json",
	// success : function(data){		 
	// 	$(".lname").html(data.lastName);
	// 	$(".fname").html(data.firstName);
	// 	$(".email").html(data.email);
	// }
	// })
});
