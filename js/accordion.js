$(document).ready(function (event, triggered) {
$(".accordion-slide").each(function(e1){
            $(this).click(function(e){
                if($(this).hasClass("is-active")){
                        $(this).removeClass("is-active");
                         e.stopImmediatePropagation();
                         e.preventDefault();
                }
                else{
                    $(this).addClass("is-active");   
                }
            });
        });
        $('.accordion-slide .accordion-content-wrapper').click(function(e){
            e.stopPropagation();
        });
    });