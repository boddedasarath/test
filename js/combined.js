
	//Appending digital bootstrap to the head dynamically
        var digital = document.createElement("script");
		digital.setAttribute('type','text/javascript');
		var inlineScript = document.createTextNode("var digitalData ={};");
		var inlineScript2 = document.createTextNode("window.digitalData = digitalData;");
		digital.appendChild(inlineScript); 
		digital.appendChild(inlineScript2); 
		document.head.appendChild(digital);

		var nexus_script = document.createElement('script');
			nexus_script.setAttribute('src','https://nexus.ensighten.com/gsk/hcp3prod/Bootstrap.js');
			document.head.appendChild(nexus_script);

			console.log($('input').length+'Bootstrap');

		var url = "https://cdns.gigya.com/JS/gigya.js";
		var APIKey = $(".userbox-header .user-box").attr("data-api-key");

		
		var finalURL = getDomain(url);

		console.log("post getDomain");
		
//		var finalURL = url + "?apikey=3_2bMlv_NRnz1E6AKem6donSF4fAt9DwizeqD7jbuqYm2SQlxgTCLO25ySFy78gdSK";
		//3_2bMlv_NRnz1E6AKem6donSF4fAt9DwizeqD7jbuqYm2SQlxgTCLO25ySFy78gdSK";  //Aus Preview //3_FzvPf7SCTgwZxMbnI8UOsRX0rg23Nt1JdaTFuiulKM4ljAbDq_d10TECrS3WFiRq"; //Aus production
		
		    $.getScript(finalURL, function () {
            console.log("Gigya JS loaded");
            gigya.accounts.getAccountInfo({ callback: getAccountInfoResponse });
        });

		function getAccountInfoResponse(response){
			
//			console.log("Responses"+ JSON.stringify(response));
			
			if(response.errorCode != 403005){
							$(".userbox-header .logged-out").hide();
							
							$(".userbox-header .logged-in p").empty().append('<span class="userBox-firstName">' +response.profile.firstName+" "+response.profile.lastName+'</span>');
							
							$(".userbox-header .logged-in .userBox-title").hide();
							$(".human-icon").addClass("account-loogedin");

							var vwidth = window.screen.width;
										if(vwidth<=767){
												$(".userbox-header .logged-in").hide();
												$(".account-loogedin").click(function(){

												$(".userbox-header .logged-in").addClass("human-active")
												$(".rte-menu-text-head .rte-close-text").css("display", "block");
												$(".rte-menu-text-head .rte-close-text").show();
												$(".nav-icon").hasClass("nav-active");
												$(".nav-icon").removeClass("nav-active");
										});
												
												$('.rte-close-icon').click(function(){
													$('.rte-close-icon').toggle();
													if ($(".rte-header-banner .human-icon").hasClass("human-active")) {
														$(".rte-menu-text-head .rte-close-text").css("display", "none");
													}
												});
										}

				$.ajax({
						cache : false,
						type : 'GET',
						dataType : "json",
						url : window.location.pathname.split('.')[0]+'.token.json',
						data : {},
						success : function(json) {
						console.log("Token loaded");
						var csrfToken = '';
						if(json.token){
						csrfToken = json.token;
						}
						console.log("csrfToken");
						console.log(csrfToken);
						$(".userbox-header .box-logged-in form").append('<input id="cq_csrf_token" name=":cq_csrf_token" type="hidden" value="'+csrfToken+'"/>');
						}
					});
				
				console.log("before calling fill form");
				fillForm(response);
			} else {
				$(".human-icon").addClass("human-icon-loogedin");
					$('.rte-close-icon').click(function(){
						$(".userbox-header .logged-in").hide();
					});
				
				
			}
		}
