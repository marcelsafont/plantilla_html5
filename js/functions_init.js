$(document).ready(function(){
	$('html').addClass('js');
	
    $(".js #idiomes ul").tinyNav({
    	 active: 'selected',
    });

    $('.js #main-nav ul:first').tinyNav({
    	header: 'Menu',
    })
  
})