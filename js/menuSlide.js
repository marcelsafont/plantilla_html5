$(document).ready(function(){

/*variables amb els objectes del dom*/
 var pull = $('#boto');
 var main_menu = $('#main-nav');
 var lang_menu = $("#idiomes");
 var lang_item = $("#idiomes ul li:first") 
 

 /*menu principal amagat*/
 $(pull).on('click', function(e){
 	var position = $(main_menu).position();
 	if(position.left < 0){
 		e.preventDefault();
 		$(main_menu).animate({left:0});
 	}
 	else{
 		e.preventDefault();
 		$(main_menu).animate({left:-205});
 	}
 });

/*menu idiomes amagat*/
$(lang_item).click(function(event){
	event.preventDefault();
	$(lang_menu).find("ul li").animate({opacity: 1}, 200);
	
})


})