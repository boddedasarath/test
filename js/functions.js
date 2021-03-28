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
	
	function postInclude() {	
		$("<input type='button' name='nav-icon' class='nav-icon'>").insertAfter(".rte-header-banner p");
		$("<div class='hcpwebshop cartitem-mobile'></div>").insertAfter(".rte-header-banner .nav-icon");
		$(".hcpwebshop.cartitem-mobile").next("p").addClass("rte-menu-text-head");
		$(".logged-out a").wrapAll("<div class='nav-mobile'></div>");
	};
	
	if(length == 0 ){
		postInclude();
	}
});