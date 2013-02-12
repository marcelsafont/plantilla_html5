$(document).ready(function(){
	
	/*afegim la capa obscura*/
	$('<div></div>', {
		'class': 'bg_gris',
	}).prependTo('#page');

	$('<div></div>', {
		'class': 'bg_gris_menu',
	}).prependTo('#page');


	/*menu idiomes*/

	$('#idiomes').addClass('js');
	$('#idiomes li.selected').find('a').clone().prependTo('#page').addClass('langhide');
	$('.langhide').click(function(){
		$('#idiomes').slideToggle('fast', function(){
			$('.bg_gris').toggleClass('active');
		});
		$(this).toggleClass('active');
	});
	


	/*menu navegacio*/

	$('#main-nav h1').addClass('mobil');
	$('h1.mobil').click(function(){
		$(this).next('ul').toggleClass('open');
		$(this).toggleClass('open').promise().done(function(){
    				$('.bg_gris_menu').toggleClass('active');
			});
		
	})
	
	
})

