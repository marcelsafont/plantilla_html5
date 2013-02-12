$(document).ready(function(){
	
	/*afegim la capa obscura*/
	$('<div></div>', {
		'class': 'bg_gris',
	}).prependTo('#page');

	


	/*menu idiomes*/

	$('#idiomes').addClass('js');
	$('#idiomes li.selected').find('a').clone().prependTo('#page').addClass('langhide');
	$('.langhide').click(function(){
		$('#main-nav').css({'z-index':'0'})
		$('#idiomes').slideToggle('fast', function(){
			$('.bg_gris').toggleClass('active');
		});
		$(this).toggleClass('active');

	});
	


	/*menu navegacio*/

	$('#main-nav h1').addClass('mobil');
	$('h1.mobil').click(function(){
		$('#main-nav').css({'z-index':'20'})
		$(this).next('ul').toggleClass('open');
		$(this).toggleClass('open').promise().done(function(){
    				$('.bg_gris').toggleClass('active');
			});
		
	});

	/*desabilitar el fons gris*/
	$('.bg_gris').click(function(){
		$(this).toggleClass('active');
		$('h1.mobil').next('ul').removeClass('open');
		$('h1.mobil').removeClass('open');
		$('#idiomes').slideUp('fast');
	})
	
})

