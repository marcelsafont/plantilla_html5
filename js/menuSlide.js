$(document).ready(function(){

/*variables amb els objectes del dom*/
 var pull = $('#boto');
 var main_menu = $('#main-nav');
 var lang_menu = $("#idiomes");
 var lang_item = $("#idiomes ul li:first");
 var iw = $(window).width(); 
 

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
/*if(iw <= 550){
	$('#idiomes').addClass('mov');
		$('#idiomes li').hide();
		$('#idiomes li:first').show().addClass('btn');
		$('#idiomes li:first').click(function(){
			$('#idiomes li').show();
		})


		$('#main-nav ul').hide();
		$('#main-nav h1').show().click(function(event){
				event.preventDefault();
				$('#main-nav ul').show();	
		})

}


$(window).resize(function(){

var w = $(window).width();
	if(w<= 550){
		$('#idiomes').addClass('mov');
		$('#idiomes li').hide();
		$('#idiomes li:first').show().addClass('btn');
		$('#idiomes li:first').click(function(){
			$('#idiomes li').show();
		})


		$('#main-nav ul').hide();
		$('#main-nav h1').show().click(function(event){
				event.preventDefault();
				$('#main-nav ul').show();	
		})



	}
	else{

		$('#idiomes').removeClass('mov');
		$('#idiomes li').show();
		$('#main-nav ul').show();
	}

})*/




$(lang_item).click(function(event){
	event.preventDefault();
	$(lang_menu).find("ul li").animate({opacity: 1}, 200);
	
})


})