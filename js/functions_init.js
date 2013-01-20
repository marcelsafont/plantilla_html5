$(document).ready(function(){
	
	/*menu idiomes*/

	$('#idiomes').addClass('js');
	$('#idiomes li.selected').find('a').clone().prependTo('#page').addClass('langhide');
	$('.langhide').click(function(){
		$('#idiomes').slideToggle('fast', function(){
			$('.bg_gris').toggleClass('active');
		});
		$(this).toggleClass('active');
	});
	$('<div></div>', {
		'class': 'bg_gris',
	}).prependTo('#page');


	/*menu navegacio*/



})