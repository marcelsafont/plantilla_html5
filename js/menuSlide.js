$(document).ready(function(){
 var pull = $('#boto');
 var menu = $('#main-nav');
 
 $(pull).on('click', function(e){
 	var position = $(menu).position();
 	if(position.left < 0){
 		e.preventDefault();
 		$(menu).animate({left:0});
 	}
 	else{
 		e.preventDefault();
 		$(menu).animate({left:-200});
 	}
 });

})