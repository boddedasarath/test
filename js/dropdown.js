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


/*$(document).click(function() {
    $(".form-helper-popup").hide();  
});*/

$(document).ready(function() {
    /*SSO Implementation*/
     var pageUrl = (window.location.pathname).replace('.desktop', '').replace('.html', '');
   
      var href = $(this).attr('href');
       var url = (window.location.pathname).replace('.desktop', '').replace('.html', '');
    	var domain=(window.location.protocol).replace('.desktop', '').replace('.html', '')+"//"+(window.location.hostname).replace('.desktop', '').replace('.html', '');
    	if(url=='/fr')url='';
    	if(url=='/')url=domain;
    	console.log(url);
        var appId= "";
        var cid= "";
        var sessionId = "";
        var useremail= "";
        var cacheBuster = new Date().getTime(); 
       /* $.ajax({
            type: 'POST',
            dataType: "json",
            url: url + ".clearprofilecache.json",
            data: {},
            success: function(data) {*/
                 $.ajax({
                    type: 'GET',
                    cache: false,
                      async:false,
                    url: pageUrl + '.reverserequestparam.json?_ts=' + cacheBuster,
                    success: function(data) {
                        if (data.error == "User not Logged In") {
                        } else {
							 $(this).delay(200);
                            useremail = data.email;
                            appId = data.appId;
                            cid = data.userHash;
                            sessionId = data.sessionToken;
							$(".dropdown-selectbox p a").each(function() {
                            var href1 = $(this).attr("href");
                            href1 = domain + "/bin/handlesso.login.html?sessionToken=" + sessionId + "&userId=" + useremail + "&redirectTarget="+domain+href1+"&customerId=" + cid;
                            $(this).attr("href", href1);
                        });
                        }
                        
                    },
                    error: function(data) {
                        var notLogged = 'User not Logged In';
                        var responseText = data.responseText;
                    }
                }); 

});